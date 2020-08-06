import React from 'react'
import Element from './Element'

const Table = ({children, hasContainer, ...props}) => {
  const extensions = {
    isBordered: { name: 'is-bordered' },
    isStriped: { name: 'is-striped' },
    isNarrow: { name: 'is-narrow' },
    isHoverable: { name: 'is-hoverable' },
    isFullwidth: { name: 'is-fullwidth' }
  }

  const tableRender = <Element
    {...props}
    tag='table'
    extensions={extensions}
    bulmaClass='table'>{children}</Element>

  return hasContainer ? <div className='table-container'>{tableRender}</div> : tableRender
}

export default Table
