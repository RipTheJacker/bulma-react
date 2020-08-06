import React from 'react'
import Element from './Element'

const Content = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='content'>{children}</Element>
)

export default Content
