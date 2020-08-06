import React from 'react'
import Element from './Element'

const Section = ({children, ...props}) => (
  <Element
    tag='section'
    {...props}
    bulmaClass='section'>{children}</Element>
)

export default Section
