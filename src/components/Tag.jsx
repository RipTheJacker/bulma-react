import React from 'react'
import Element from './Element'
import { StatusModifiers } from '../index'

const Tag = ({children, ...props}) => {
  const extensions = {
    isRounded: { name: 'is-rounded' },
    isDelete: { name: 'is-delete' },
    ...StatusModifiers
  }

  return (
    <Element {...props} tag='span' extensions={extensions} bulmaClass='tag'>
      {children}
    </Element>
  )
}

export default Tag
