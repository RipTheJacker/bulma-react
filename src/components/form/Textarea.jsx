import React from 'react'
import Element from '../Element'

const Textarea = ({children, ...props}) => {
  const extensions = {
    isRounded: { name: 'is-rounded' },
    isHovered: { name: 'is-hovered' },
    isFocused: { name: 'is-focused' },
    isActive: { name: 'is-active' },
    hasFixedSize: { name: 'has-fixed-size' }
  }

  return <Element {...props} extensions={extensions} tag='textarea' bulmaClass='textarea'>
    {children}
  </Element>
}

export default Textarea
