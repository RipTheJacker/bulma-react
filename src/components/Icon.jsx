import React from 'react'
import Element from './Element'

const Icon = ({name, ...props}) => {
  const extensions = {
    isSize: { name: 'is' },
    isLeft: { name: 'is-left' },
    isRight: { name: 'is-right' }
  }

  return (
    <Element tag='span' {...props} extensions={extensions} bulmaClass='icon'>
      <i className={name}></i>
    </Element>
  )
}

export default Icon
