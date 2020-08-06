import React from 'react'
import Element from '../Element'

const Panel = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='panel'>{children}</Element>
)

export default Panel
