import React from 'react'
import Element from '../Element'

const Breadcrumb = ({children, hasSeparator, ...props}) => {
  const getSeparator = (name) => {
    if (name) return { hasSeparator: { name: `has-${name}-separator` } }
    return { hasSeparator: { name: '' } }
  }


  return (
    <Element
      {...props}
      hasSeparator={!!hasSeparator}
      extensions={getSeparator(hasSeparator)}
      tag='nav'
      bulmaClass='breadcrumb'
      aria-label='breadcrumbs'
      >
        <ul>
          {children}
        </ul>
    </Element>
  )
}

export default Breadcrumb
