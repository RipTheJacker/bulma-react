import React from 'react'
import Element from '../Element'

const ModalCard = ({children, ...props}) => (
  <Element
    tag='div'
    bulmaClass='modal-card'
    {...props}>{children}</Element>
)

export default ModalCard
