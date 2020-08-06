import React from 'react'
import Element from '../Element'

const Media = ({children, ...props}) => (
  <Element
    tag='article'
    {...props}
    bulmaClass='media'>{children}</Element>
)

export default Media
