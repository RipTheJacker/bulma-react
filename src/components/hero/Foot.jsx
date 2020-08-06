import React from 'react'
import Element from '../Element'

const Foot = ({children, ...props}) => (
  <Element
    tag='div'
    bulmaClass='hero-foot'
    {...props}>{children}</Element>
)

export default Foot
