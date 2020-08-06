import React from 'react'
import Element from './Element'

const extensions = {
  isSpaced: { name: 'is-spaced' }
}

export const Title = ({children, ...props}) => (
  <Element
    tag='h1'
    {...props}
    bulmaClass='title'
    extensions={extensions}>{children}</Element>
)

export const Subtitle = ({children, ...props}) => (
  <Element
    tag='h2'
    {...props}
    bulmaClass='subtitle'
    extensions={extensions}>{children}</Element>
)
