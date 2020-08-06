import React from 'react'
import { useBulmaStyles, useBulmaExtensions } from '../../index'

const Select = ({children, ...props}) => {
  const extensions = {
    isMultiple: { name: 'is-multiple' },
    isRounded: { name: 'is-rounded' },
    isHovered: { name: 'is-hovered' },
    isFocused: { name: 'is-focused' },
    isLoading: { name: 'is-loading' }
  }

  const bulmaExtensions = useBulmaExtensions(extensions)

  const [bulma, rest] = useBulmaStyles({...props, bulmaClass: 'select'}, bulmaExtensions)


  return <div className={bulma}>
    <select {...rest} multiple={props.isMultiple}>
      {children}
    </select>
  </div>
}

export default Select
