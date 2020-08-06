import React from 'react'
import Element from '../Element'

const Label = ({children, ...props}) => (
  <Element
    tag='p'
    {...props}
    bulmaClass='menu-label'>{children}</Element>
)

export default Label
