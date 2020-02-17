// Use this
// https://github.com/mridgway/hoist-non-react-statics

/* eslint-disable react/prop-types */
import React from "react"
/**
 * @external
 * @see {@link https://github.com/JedWatson/classnames}
 */
import classNames from "classnames"

// @private
const isModifier = mod => {
  return bool => ({ [`is-${mod}`]: bool })
}

// @private
const isObject = value => value instanceof Object && !Array.isArray(value)

// @private
const breakpoints = ["mobile", "tablet", "touch", "desktop", "widescreen", "fullhd"].reduce(
  (bps, bp) => [...bps, bp, `${bp}-only`],
  []
)

const ColorModifiers = {
  isPrimary: isModifier("primary"),
  isLink: isModifier("link"),
  isInfo: isModifier("info"),
  isSuccess: isModifier("success"),
  isWarning: isModifier("warning"),
  isDanger: isModifier("danger")
}

const SizeModifiers = {
  isSmall: isModifier("small"),
  isMedium: isModifier("medium"),
  isLarge: isModifier("large")
}

const Bulma = {
  isHelper: name => toClassnamesArray("is", name),
  hasText: color => toClassnamesArray("has-text", color),
  hasTextAlign: alignment => toClassnamesArray("has-text", handleResponsive(alignment)),
  hasTextWeight: weight => toClassnamesArray("has-text-weight", weight),
  hasBackground: color => toClassnamesArray("has-background", color),
  isSize: size => toClassnamesArray("is-size", handleResponsive(size)),
  isHidden: hidden => toClassnamesArray("is-hidden", hidden),
  isFlex: display => toClassnamesArray("is-flex", display),
  isBlock: display => toClassnamesArray("is-block", display),
  isInline: display => toClassnamesArray("is-inline", display),
  isInlineBlock: display => toClassnamesArray("is-inline-block", display),
  isInlineFlex: display => toClassnamesArray("is-inline-flex", display),
  ...ColorModifiers,
  ...SizeModifiers
}

// @private
const extractBulmaProps = (bulma, props) => {
  const bulmaProps = {}
  const otherProps = {}
  Object.entries(props).forEach(
    ([key, value]) =>
      bulma.hasOwnProperty(key)
        ? Object.assign(bulmaProps, { [key]: value })
        : Object.assign(otherProps, { [key]: value })
  )
  return [bulmaProps, otherProps]
}

/**
 * @param  {Object} obj {mobile: true, desktop: 6}
 * @return {Object}     {'mobile': true, '6-desktop': true}
 * @private
 */
const handleResponsive = obj => {
  if (!isObject(obj)) return obj
  return breakpoints.reduce((classObj, bp) => {
    const value = obj[bp]
    if (value) {
      const isBool = typeof value === "boolean"
      const cname = isBool ? { [bp]: value } : { [`${obj[bp]}-${bp}`]: true }
      return { ...classObj, ...cname }
    }
    return classObj
  }, {})
}

/**
 * Return array of classnames to pass to classnames lib
 * @see classNames
 * @param  {string} prefix      - The Bulma prefix ie. 'is' or 'has' (without a '-')
 * @param  {(object|string)} objOrString - the React prop value
 * @param {boolean} [responsive=false] If this prefix responds to '-mobile' or '-desktop', etc.
 * @return {Array<{className: Boolean}>}
 */
export const toClassnamesArray = (prefix, objOrString, responsive = false) => {
  const type = typeof objOrString
  if (type === "boolean") return { [prefix]: objOrString }
  if (type === "string" || type === "number") return { [`${prefix}-${objOrString}`]: true }
  if (isObject(objOrString)) {
    const values = responsive ? handleResponsive(objOrString) : objOrString
    return Object.entries(values).map(([key, value]) => ({ [`${prefix}-${key}`]: value }))
  }
  if (Array.isArray(objOrString)) return objOrString.map(value => ({ [`${prefix}-${value}`]: true }))
  return null
}

/**
 * HOC for allowing Bulma CSS classes as props
 * @param  {function} WrappedComponent React comoponent to wrap in HOC
 * @param  {object} [extensions={}] Properties to add to when class names are created
 * @example
 *  // add modifiers for Bulma Tags
 *  const Tag = asBulmaComponent((props) => {}, { isRounded: bool => toClassnamesArray("is-rounded", bool) })
 *
 * @return {function}
 */
export const asBulmaComponent = (WrappedComponent, extensions = {}) => {
  const wrappedName = WrappedComponent.displayName || WrappedComponent.name || "Component"
  const bulmaWithExtensions = { ...Bulma, ...extensions }
  const Component = props => {
    // debugger
    const [bulmaProps, { className, ...rest }] = extractBulmaProps(bulmaWithExtensions, props)
    const classNameWithBulma = classNames(
      ...Object.entries(bulmaProps).map(([prop, value]) => bulmaWithExtensions[prop](value)),
      className
    )

    return <WrappedComponent {...rest} className={classNameWithBulma} />
  }

  Component.displayName = `asBulmaComponent(${wrappedName})`
  Component.InnerComponent = WrappedComponent
  return Component
}
