import React from 'react'
import Element from '../Element'

const Close = (props) => (
  <Element
    tag='button'
    {...props}
    bulmaClass='modal-close'
    aria-label='close'
    />
)

export default Close
