import React from 'react'
import Element from '../Element'

export const Card = ({children, ...props}) => (
  <Element {...props} tag='div' bulmaClass='card'>{children}</Element>
)

export const CardContent = ({children, ...props}) => (
  <Element {...props} bulmaClass='card-content'>{children}</Element>
)

export const CardHeader = ({children, ...props}) => {
  const extensions = {
    isCentered: { name: 'is-centered' }
  }

  return <Element {...props} bulmaClass='card-header' extensions={extensions}>{children}</Element>
}

export const CardFooter = ({children, ...props}) => (
  <Element {...props} bulmaClass='card-footer'>{children}</Element>
)

export const CardImage = ({children, ...props}) => (
  <Element {...props} bulmaClass='card-image'>{children}</Element>
)

export const CardHeaderTitle = ({children, ...props}) => (
  <Element tag='p' {...props} bulmaClass='card-header-title'>{children}</Element>
)

export const CardHeaderIcon = ({children, ...props}) => (
  <Element tag='span' {...props} bulmaClass='card-header-icon'>{children}</Element>
)
