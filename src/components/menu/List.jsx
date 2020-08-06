import React from 'react'
import Element from '../Element'

const List = ({children, ...props}) => (
  <Element
    tag='ul'
    {...props}
    bulmaClass='menu-list'>{children}</Element>
)

export default List
