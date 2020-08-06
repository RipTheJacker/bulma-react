import React from 'react';
import Element from './Element'

const Button = ({children, ...props}) => {
  const extensions = {
    isLight: { name: 'is-light' },
    isInverted: { name: 'is-inverted' },
    isHovered: { name: 'is-hovered' },
    isFocused: { name: 'is-focused' },
    isActive: { name: 'is-active' },
    isRounded: { name: 'is-rounded' },
    isLoading: { name: 'is-loading' },
    isOutlined: { name: 'is-outlined' }
  }

  return <Element tag='button' {...props} extensions={extensions} bulmaClass='button'>{children}</Element>
}

export default Button
