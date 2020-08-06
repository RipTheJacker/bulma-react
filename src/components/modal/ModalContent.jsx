import React from 'react'
import Element from '../Element'

const ModalContent = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='modal-content'
    >{children}</Element>
)

export default ModalContent
