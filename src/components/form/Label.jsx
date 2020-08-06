import React from 'react'
import Element from '../Element'

const Label = ({children, ...props}) => (
  <Element {...props} tag='label' bulmaClass='label'>{children}</Element>
)

export default Label
