import React from 'react'
import Element from '../Element'

const Body = ({children, ...props}) => (
  <Element
    tag='div'
    bulmaClass='hero-body'
    {...props}>{children}</Element>
)

export default Body
