import React from 'react'
import Element from '../Element'
import PropTypes from 'utils/prop-types'

const Hero = ({children, ...props}) => {
  const extensions = {
    isBold: { name: 'is-bold' },
    isFullHeight: { name: 'is-fullheight' }
  }

  return (
    <Element
      tag='section'
      {...props}
      extensions={extensions}
      bulmaClass='hero'>{children}</Element>
  )
}

Hero.propTypes = {
  isSize: PropTypes.oneOf(['medium', 'large', 'fullheight'])
}

export default Hero
