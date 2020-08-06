import React from 'react'
import Element from './Element'

const Container = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='container'>{children}</Element>
)

export default Container
