import React from 'react'
import Element from '../Element'

const Head = ({children, ...props}) => (
  <Element
    tag='div'
    bulmaClass='hero-head'
    {...props}>{children}</Element>
)

export default Head
