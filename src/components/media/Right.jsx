import React from 'react'
import Element from '../Element'

const Right = ({children, ...props}) => (
  <Element
    tag='figure'
    {...props}
    bulmaClass='media-right'>{children}</Element>
)

export default Right
