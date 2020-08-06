import React from 'react'
import Element from './Element'

export const Message = (props) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='message'
    />
)

export const MessageHeader = (props) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='message-header'
    />
)

export const MessageBody = (props) => (
  <Element
    tag='div'
    {...props}
    bulmaClass='message-body'
    />
)
