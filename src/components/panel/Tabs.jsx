import React from 'react'
import Element from '../Element'

const Tabs = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='panel-tabs'>{children}</Element>
)

export default Tabs
