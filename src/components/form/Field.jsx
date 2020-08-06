import React from 'react'
import Element from '../Element'

const Field = ({children, ...props}) => {
  const extensions = {
    hasAddons: { name: 'has-addons' },
    isGrouped: { name: 'is-grouped' },
    isHorizontal: { name: 'is-horizontal' },
    isExpanded: { name: 'is-expanded' }
  }

  return <Element {...props} extensions={extensions} tag='div' bulmaClass='field'>
    {children}
  </Element>
}

export default Field
