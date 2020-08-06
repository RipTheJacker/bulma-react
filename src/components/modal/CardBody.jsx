import React from 'react'
import Element from '../Element'

const CardBody = ({children, ...props}) => (
  <Element
    tag='section'
    bulmaClass='modal-card-body'
    {...props}>{children}</Element>
)

export default CardBody
