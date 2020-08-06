import { createContext, useContext } from 'react'

export const NavbarContext = createContext()

export const useNavbarContext = () => useContext(NavbarContext)
