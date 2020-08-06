import React from 'react'
import Element from '../Element'
import withLabel from './withLabel'

const Radio = (props) => <Element {...props} type='radio' tag='input' bulmaClass='radio'/>

export default withLabel(Radio)
