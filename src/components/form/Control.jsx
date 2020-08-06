import React from 'react'
import Element from '../Element'

const Control = ({children, ...props}) => {
  const extensions = {
    hasIcons: { name: 'has-icons' },
    isExpanded: { name: 'is-expanded' },
    isLoading: { name: 'is-loading' }
  }

  return <Element tag='p' {...props} extensions={extensions} bulmaClass='control'>
    {children}
  </Element>
}

export default Control
