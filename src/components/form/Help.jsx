import React from 'react'
import Element from '../Element'

const Help = ({children, ...props}) => (
  <Element tag='p' {...props} bulmaClass='help'>{children}</Element>
)

export default Help
