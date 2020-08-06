import React from 'react'
import PropTypes from 'prop-types'
import Element from '../Element'
import { NavbarContext } from './hooks'


const Navbar = ({isActive = false, children, ...props}) => {
  const extensions = {
    isTransparent: { name: 'is-transparent' },
    isSpaced: { name: 'is-spaced' }
  }

  return (
    <NavbarContext.Provider value={{active: isActive}}>
      <Element
        tag='nav'
        extensions={extensions}
        bulmaClass='navbar'
        role='navigation'
        aria-label='main navigation'
        {...props}>
          {children}
      </Element>
    </NavbarContext.Provider>
  )
}

Navbar.propTypes = {
  isActive: PropTypes.bool
}

export default Navbar
