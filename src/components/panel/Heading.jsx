import React from 'react'
import Element from '../Element'

const Heading = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='panel-heading'>{children}</Element>
)

export default Heading
