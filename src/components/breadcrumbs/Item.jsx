import React from 'react'
import Element from '../Element'

const Item = ({children, ...props}) => (
  <Element {...props} extensions={{isActive: { name: 'is-active' }}} tag='li'>{children}</Element>
)

export default Item
