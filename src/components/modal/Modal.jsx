import React, { useEffect } from 'react'
import Element from '../Element'

const Modal = ({children, fullscreen = true, ...props}) => {
  const extensions = {
    isActive: { name: 'is-active' }
  }

  useEffect(() => {
    if (props.isActive && fullscreen) {
      document.body.classList.add('is-clipped');
    }

    return function removeClipped() {
      document.body.classList.remove('is-clipped');
    }
  }, [props.isActive])

  return <Element
    tag='div'
    {...props}
    bulmaClass='modal'
    extensions={extensions}
    role='dialog'
    aria-modal='true'
    >{children}</Element>
}


export default Modal
