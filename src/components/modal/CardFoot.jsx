import React from 'react'
import Element from '../Element'

const CardFoot = ({children, ...props}) => (
  <Element
    tag='footer'
    bulmaClass='modal-card-foot'
    {...props}>{children}</Element>
)

export default CardFoot
