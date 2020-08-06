import React from 'react'
import { mount, shallow } from 'enzyme'
import sinon from 'sinon'
import { useBulmaStyles, toClassnamesArray, useBulmaExtensions } from 'bulma'
import { Element } from 'bulma/components'

describe('Bulma', () => {
  describe('toClassnamesArray', () => {
    it('should process responsive flag', () => {
      expect(toClassnamesArray('test', { mobile: true, desktop: 6 }, true)).to.eql([
        { 'test-mobile': true },
        { 'test-6-desktop': true }
      ])
    })

    it('should return an array of objects when passed an object', () => {
      expect(toClassnamesArray('test', { something: true })).to.deep.include({ 'test-something': true })
    })

    it('should return an array of objects when passed an array', () => {
      expect(toClassnamesArray('test', ['something'])).to.deep.include({ 'test-something': true })
    })

    it('should return an object when passed a string', () => {
      expect(toClassnamesArray('test', 'something')).to.deep.include({ 'test-something': true })
    })

    it('should return an object when passed a number', () => {
      expect(toClassnamesArray('test', 9)).to.deep.include({ 'test-9': true })
    })

    it('should return an object when passed a boolean', () => {
      expect(toClassnamesArray('test', true)).to.deep.include({ test: true })
    })

    it('should return null if nothing is passed', () => {
      expect(toClassnamesArray('test')).to.eql(null)
    })
  })

  describe('useBulmaStyles', () => {
    const Component = props => {
      const [bulma, rest] = useBulmaStyles(props)
      return <div className={bulma} {...rest} />
    }

    it('should extract all Bulma props', () => {
      const [bulma, rest] = useBulmaStyles({
        isColor: 'primary',
        onClick: () => {},
        className: 'some-class'
      })

      expect(bulma).to.eql('is-primary some-class')
      expect(rest).to.have.property('onClick')
      expect(rest).to.not.have.property('className')
    })

    it('should handle extensions', () => {
      const extSpy = sinon.stub().returns('is-something')
      const [bulma] = useBulmaStyles(
        {
          isColor: 'primary',
          isSomething: true
        },
        {
          isSomething: extSpy
        })

      expect(extSpy).to.have.been.calledWith(true)
      expect(bulma).to.eql('is-primary is-something')
    })

    it('should roll Bulma props into className', () => {
      const wrapper = shallow(<Component hasText='black' hasTextWeight='bold' />)
      expect(wrapper).to.have.prop('className', 'has-text-black has-text-weight-bold')
    })

    it('should append className prop', () => {
      const wrapper = shallow(<Component hasText='black' className='foobar' />)
      expect(wrapper).to.have.prop('className', 'has-text-black foobar')
    })

    it('ignores non-bulma props', () => {
      const wrapper = shallow(<Component disabled />)
      expect(wrapper).to.have.prop('disabled', true)
    })

    it('passes Bulma classes to wrapped component', () => {
      const wrapper = mount(<Component hasText='black' />)
      expect(wrapper).to.have.className('has-text-black')
    })

    const modifiers = [
      [{ isBulma: ['clipped', 'pulled-right'] }, 'is-clipped is-pulled-right'],
      [{ hasText: 'black' }, 'has-text-black'],
      [{ hasTextAlign: { mobile: 'right', desktop: 'center' } }, 'has-text-right-mobile has-text-center-desktop'],
      [{ hasTextWeight: 'bold' }, 'has-text-weight-bold'],
      [{ hasBackground: 'blue' }, 'has-background-blue'],
      [{ isSize: 7 }, 'is-size-7'],
      [{ isHidden: true }, 'is-hidden'],
      [{ isFlex: { mobile: true } }, 'is-flex-mobile'],
      [{ isBlock: true }, 'is-block'],
      [{ isInline: true }, 'is-inline'],
      [{ isInlineBlock: true }, 'is-inline-block'],
      [{ isInlineFlex: true }, 'is-inline-flex'],
      [{ isColor: 'primary' }, 'is-primary'],
      [{ isSmall: true }, 'is-small'],
      // false props
      [{ isFlex: false }, ''],
      [{ isFlex: { mobile: true, 'desktop-only': false } }, 'is-flex-mobile']
    ]

    modifiers.forEach(([modProps, expected]) => {
      it(`should have '${expected}' class names for ${JSON.stringify(modProps)}`, () => {
        const wrapper = shallow(<Component {...modProps} />)
        expect(wrapper).to.have.prop('className').equal(expected)
      })
    })
  })

  describe('useBulmaExtensions', () => {
    it('returns an object', () => {
      const extensions = {
        isSomething: { name: 'is-something' }
      }

      const extendedObj = useBulmaExtensions(extensions)
      expect(extendedObj).to.have.property('isSomething')
      expect(extendedObj.isSomething).to.be.a('function')
    })

    it('sets the className function', () => {
      const extensions = {
        isSomething: { name: 'is-something' }
      }

      const extendedObj = useBulmaExtensions(extensions)
      expect(extendedObj.isSomething(true)).to.eql({'is-something': true})
    })
  })

  describe('Element', () => {
    it('handles extended properties', () => {
      const extensions = {
        isSomething: { name: 'is-something' }
      }
      const TestComponent = props => <Element extensions={extensions} {...props} />
      const wrapper = mount(<TestComponent isSomething>Hello</TestComponent>)

      expect(wrapper).to.have.html('<div class="is-something">Hello</div>')
    })

    it('uses the proper html tag', () => {
      const wrapper = mount(<Element tag='button' />)

      expect(wrapper).to.have.tagName('button')
    })
  })
})
