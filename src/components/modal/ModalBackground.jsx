import React from 'react'
import Element from '../Element'

const ModalBackground = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='modal-background'
    >{children}</Element>
)

export default ModalBackground
