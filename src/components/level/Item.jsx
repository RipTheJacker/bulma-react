import React from 'react'
import Element from '../Element'

const Item = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='level-item'>
    <div>
      {children}
    </div>
  </Element>
)

export default Item
