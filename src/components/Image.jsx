import React from 'react'
import Element from './Element'

const Image = ({src, altText, ...props}) => {
  const extensions = {
    isRatio: { name: 'is' },
    isRounded: { name: 'is-rounded' }
  }

  return (
    <Element {...props} tag='figure' extensions={extensions} >
      <img src={src} alt={altText} />
    </Element>
  )
}

export default Image
