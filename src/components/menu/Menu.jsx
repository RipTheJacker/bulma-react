import React from 'react'
import Element from '../Element'

const Menu = ({children, ...props}) => (
  <Element
    tag='aside'
    {...props}
    bulmaClass='menu'>{children}</Element>
)

export default Menu
