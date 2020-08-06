import React from 'react'
import Element from '../Element'

const Input = (props) => {
  const extensions = {
    isRounded: { name: 'is-rounded' },
    isHovered: { name: 'is-hovered' },
    isFocused: { name: 'is-focused' },
    isStatic: { name: 'is-static' }
  }

  return <Element type='text' {...props} extensions={extensions} tag='input' bulmaClass='input' />
}

export default Input
