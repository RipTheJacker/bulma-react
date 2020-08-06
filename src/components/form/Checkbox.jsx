import React from 'react'
import Element from '../Element'
import withLabel from './withLabel'

const Checkbox = (props) => <Element {...props} type='checkbox' tag='input' bulmaClass='checkbox'/>

export default withLabel(Checkbox)
