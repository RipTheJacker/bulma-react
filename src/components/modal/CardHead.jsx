import React from 'react'
import Element from '../Element'

const CardHead = ({children, ...props}) => (
  <Element
    tag='header'
    bulmaClass='modal-card-head'
    {...props}>{children}</Element>
)

export default CardHead
