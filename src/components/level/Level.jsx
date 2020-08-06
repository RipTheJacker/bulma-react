import React from 'react'
import Element from '../Element'

const Level = ({children, ...props}) => (
  <Element
    tag='nav'
    {...props}
    bulmaClass='level'>{children}</Element>
)

export default Level
