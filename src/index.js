/**
 * @external
 * @see {@link https://github.com/lukeed/clsx#readme}
 */
import clsx from 'clsx'

// @private
const isModifier = mod => bool => ({ [`is-${mod}`]: bool })

// @private
const isObject = value => value instanceof Object && !Array.isArray(value)

// @private
const breakpoints = ['mobile', 'tablet', 'touch', 'desktop', 'widescreen', 'fullhd'].reduce(
  (bps, bp) => [...bps, bp, `${bp}-only`],
  []
)

export const StatusModifiers = {
  isPrimary: isModifier('primary'),
  isLink: isModifier('link'),
  isInfo: isModifier('info'),
  isSuccess: isModifier('success'),
  isWarning: isModifier('warning'),
  isDanger: isModifier('danger'),
  isLight: isModifier('light')
}

const ColorModifiers = {
  hasText: color => toClassnamesArray('has-text', color),
  isColor: color => toClassnamesArray('is', color)
}

const SizeModifiers = {
  isSmall: isModifier('small'),
  isMedium: isModifier('medium'),
  isLarge: isModifier('large')
}

const Bulma = {
  isBulma: name => toClassnamesArray('is', name),
  hasTextAlign: alignment => toClassnamesArray('has-text', handleResponsive(alignment)),
  hasTextWeight: weight => toClassnamesArray('has-text-weight', weight),
  hasBackground: color => toClassnamesArray('has-background', color),
  isSize: size => toClassnamesArray('is-size', handleResponsive(size)),
  isHidden: hidden => toClassnamesArray('is-hidden', hidden, handleResponsive(hidden)),
  isMobile: isModifier('mobile'),
  isFlex: display => toClassnamesArray('is-flex', display, handleResponsive(display)),
  isBlock: display => toClassnamesArray('is-block', display, handleResponsive(display)),
  isInline: display => toClassnamesArray('is-inline', display, handleResponsive(display)),
  isInlineBlock: display => toClassnamesArray('is-inline-block', display, handleResponsive(display)),
  isInlineFlex: display => toClassnamesArray('is-inline-flex', display, handleResponsive(display)),
  isPulled: direction => toClassnamesArray('is-pulled', direction),
  isShadowless: direction => toClassnamesArray('is-shadowless', direction),
  ...ColorModifiers,
  ...SizeModifiers
}

// @private
const extractBulmaProps = (bulma, props) => {
  const bulmaProps = {}
  const otherProps = {}
  Object.entries(props).forEach(
    ([key, value]) =>
      bulma[key]
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
      const isBool = typeof value === 'boolean'
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
  if (type === 'boolean') return { [prefix]: objOrString }
  if (type === 'string' || type === 'number') return { [`${prefix}-${objOrString}`]: true }
  if (isObject(objOrString)) {
    const values = responsive ? handleResponsive(objOrString) : objOrString
    return Object.entries(values).map(([key, value]) => ({ [`${prefix}-${key}`]: value }))
  }
  if (Array.isArray(objOrString)) return objOrString.map(value => ({ [`${prefix}-${value}`]: true }))
  return null
}

export const useBulmaExtensions = (extensions = {}) => {
  const extended = {}

  Object.entries(extensions).forEach(
    ([extName, attributes]) => {
      const { name, responsive, parser } = attributes

      Object.assign(extended, {
        [extName]: propValue => {
          const value = parser ? parser(propValue) : propValue
          return toClassnamesArray(name, value, responsive)
        }
      })
    }
  )

  return extended
}

export const useBulmaStyles = (props, extensions = {}) => {
  const bulmaExtended = {...Bulma, ...extensions}
  const [bulmaProps, { bulmaClass, className, ...other }] = extractBulmaProps(bulmaExtended, props)

  const classNameWithBulma = clsx(
    ...Object.entries(bulmaProps).map(([prop, value]) => bulmaExtended[prop](value)),
    bulmaClass,
    className
  )

  return [classNameWithBulma, other]
}

export const useBulma = (props, extensions = {}) => {
  const bulmaExtended = useBulmaExtensions(extensions)
  return useBulmaStyles(props, bulmaExtended)
}
