import React from 'react'
import PropTypes from 'utils/prop-types'
import { useBulmaStyles, useBulmaExtensions } from '../index'

const Element = ({tag, extensions, ...allProps}) => {
  const bulmaExtensions = useBulmaExtensions(extensions)

  const [bulma, rest] = useBulmaStyles(allProps, bulmaExtensions)
  const Tag = tag

  return <Tag className={bulma} {...rest} />
}

Element.propTypes = {
  tag: PropTypes.string,
  extensions: PropTypes.object,
  bulmaClass: PropTypes.string
}

Element.defaultProps = {
  tag: 'div'
}

export default Element
