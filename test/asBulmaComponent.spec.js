import React from "react"
import { mount, shallow } from "enzyme"
import sinon from "sinon"
import { asBulmaComponent, toClassnamesArray } from "components/asBulmaComponent"

describe("toClassnamesArray", () => {
  it("should process responsive flag", () => {
    expect(toClassnamesArray("test", { mobile: true, desktop: 6 }, true)).to.eql([
      { "test-mobile": true },
      { "test-6-desktop": true }
    ])
  })

  it("should return an array of objects when passed an object", () => {
    expect(toClassnamesArray("test", { something: true })).to.deep.include({ "test-something": true })
  })

  it("should return an array of objects when passed an array", () => {
    expect(toClassnamesArray("test", ["something"])).to.deep.include({ "test-something": true })
  })

  it("should return an object when passed a string", () => {
    expect(toClassnamesArray("test", "something")).to.deep.include({ "test-something": true })
  })

  it("should return an object when passed a number", () => {
    expect(toClassnamesArray("test", 9)).to.deep.include({ "test-9": true })
  })

  it("should return an object when passed a boolean", () => {
    expect(toClassnamesArray("test", true)).to.deep.include({ test: true })
  })

  it("should return null if nothing is passed", () => {
    expect(toClassnamesArray("test")).to.eql(null)
  })
})

describe("asBulmaComponent", () => {
  const Component = props => {
    return <div className={props.className} />
  }
  const Wrapped = asBulmaComponent(Component)

  it("should have the correct displayName", () => {
    expect(Wrapped.displayName).to.eql("asBulmaComponent(Component)")
  })

  it("handles extended properties", () => {
    const isSomething = sinon.fake.returns({ "is-something": true })
    const extensions = {
      isSomething
    }
    const ExtendedComponent = asBulmaComponent(() => {}, extensions)
    const wrapper = shallow(<ExtendedComponent isSomething="test" isSize={7} />)

    expect(isSomething).to.have.been.calledWith("test")
    expect(wrapper).to.have.prop("className", "is-something is-size-7")
  })

  it("should roll Bulma props into className", () => {
    const wrapper = shallow(<Wrapped hasText="black" hasTextWeight="bold" />)
    expect(wrapper).to.have.prop("className", "has-text-black has-text-weight-bold")
  })

  it("should append className prop", () => {
    const wrapper = shallow(<Wrapped hasText="black" className="foobar" />)
    expect(wrapper).to.have.prop("className", "has-text-black foobar")
  })

  it("ignores non-bulma props", () => {
    const wrapper = shallow(<Wrapped disabled />)
    expect(wrapper).to.have.prop("disabled", true)
  })

  it("passes Bulma classes to wrapped component", () => {
    const wrapper = mount(<Wrapped hasText="black" />)
    expect(wrapper).to.have.className("has-text-black")
  })

  const modifiers = [
    [{ isHelper: ["clipped", "pulled-right"] }, "is-clipped is-pulled-right"],
    [{ hasText: "black" }, "has-text-black"],
    [{ hasTextAlign: { mobile: "right", desktop: "center" } }, "has-text-right-mobile has-text-center-desktop"],
    [{ hasTextWeight: "bold" }, "has-text-weight-bold"],
    [{ hasBackground: "blue" }, "has-background-blue"],
    [{ isSize: 7 }, "is-size-7"],
    [{ isHidden: true }, "is-hidden"],
    [{ isFlex: { mobile: true } }, "is-flex-mobile"],
    [{ isBlock: true }, "is-block"],
    [{ isInline: true }, "is-inline"],
    [{ isInlineBlock: true }, "is-inline-block"],
    [{ isInlineFlex: true }, "is-inline-flex"],
    [{ isPrimary: true }, "is-primary"],
    [{ isSmall: true }, "is-small"],
    // false props
    [{ isFlex: false }, ""],
    [{ isFlex: { mobile: 6, "desktop-only": false } }, "is-flex-mobile"]
  ]

  modifiers.forEach(([modProps, expected]) => {
    it(`should have '${expected}' class names for ${JSON.stringify(modProps)}`, () => {
      const wrapper = shallow(<Wrapped {...modProps} />)
      expect(wrapper).to.have.prop("className", expected)
    })
  })
})