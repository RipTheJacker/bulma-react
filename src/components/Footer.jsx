import React from 'react'
import Element from './Element'

const Footer = ({children, ...props}) => (
  <Element
    tag='footer'
    {...props}
    bulmaClass='footer'>{children}</Element>
)

export default Footer
