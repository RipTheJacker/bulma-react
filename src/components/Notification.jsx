import React from 'react'
import Element from './Element'

const Notification = ({children, ...props}) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='notification'>{children}</Element>
)

export default Notification
