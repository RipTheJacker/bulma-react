import React from 'react'
import Element from '../Element'

const Left = ({children, ...props}) => (
  <Element
    {...props}
    tag='div'
    bulmaClass='level-left'>{children}</Element>
)

export default Left
