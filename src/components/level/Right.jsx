import React from 'react'
import Element from '../Element'

const Right = ({children, ...props}) => (
  <Element
    {...props}
    tag='div'
    bulmaClass='level-right'>{children}</Element>
)

export default Right
