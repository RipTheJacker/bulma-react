import React from 'react'
import Element from '../Element'

const Block = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='panel-block'>{children}</Element>
)

export default Block
