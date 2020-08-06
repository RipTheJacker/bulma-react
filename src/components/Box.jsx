import React from 'react'
import Element from './Element'

const Box = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='box'>{children}</Element>
)

export default Box
