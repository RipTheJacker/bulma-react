import React from 'react'
import Element from '../Element'
import { useNavbarContext } from './hooks'

const Menu = ({children, ...props}) => {
  const extensions = {
    isActive: { name: 'is-active' }
  }
  const { active } = useNavbarContext()

  return (
    <Element
      tag='div'
      extensions={extensions}
      bulmaClass='navbar-menu'
      isActive={active}
      {...props}>
        {children}
      </Element>
  )
}

export default Menu
