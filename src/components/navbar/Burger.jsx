import React from 'react'
import Element from '../Element'
import { useNavbarContext } from './hooks'

const Burger = (props) => {
  const extensions = {
    isActive: { name: 'is-active' }
  }
  const { active } = useNavbarContext()
  const ariaExpanded = active ? 'true' : 'false'

  return (
    <Element
      tag='a'
      extensions={extensions}
      bulmaClass='navbar-burger'
      role='button'
      aria-label='menu'
      aria-expanded={ariaExpanded}
      isActive={active}
      {...props}>
      <span aria-hidden='true'>
      </span>
      <span aria-hidden='true'>
      </span>
      <span aria-hidden='true'>
      </span>
    </Element>
  )
}

export default Burger
