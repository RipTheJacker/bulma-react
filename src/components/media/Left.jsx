import React from 'react'
import Element from '../Element'

const Left = ({children, ...props}) => (
  <Element
    tag='figure'
    {...props}
    bulmaClass='media-left'>{children}</Element>
)

export default Left
