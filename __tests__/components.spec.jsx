import React from 'react'
import { mount } from 'enzyme'
import {
  // form
  Select, Textarea, Label, Radio, Checkbox, Input, Field, Control,
  // generic
  Container,
  // hero
} from 'bulma/components'

describe('Bulma Components', () => {

  const itRenders = (Component, className) => {
    it('should render', () => {
      const wrapper = mount(<Component />)
      expect(wrapper).to.exist
    })

    it('should contain matching', () => {
      const wrapper = mount(<Component />)
      expect(wrapper).to.have.className(className)
    })
  }

  describe('Form', () => {
    describe('Select', () => {
      itRenders(Select, 'select')

      it('should contain a select', () => {
        const wrapper = mount(<Select><option>Test</option></Select>)
        expect(wrapper).to.have.descendants('select')
        expect(wrapper).to.contain(<option>Test</option>)
      })

      it('should set the multiple prop on select', () => {
        const wrapper = mount(<Select isMultiple><option>Test</option></Select>)
        expect(wrapper).to.have.className('is-multiple')
        expect(wrapper.find('select').first()).have.props({multiple: true})
      })
    })

    describe('Textarea', () => {
      itRenders(Textarea, 'textarea')
    })

    describe('Label', () => {
      itRenders(Label, 'label')
    })

    describe('Radio', () => {
      itRenders(Radio, 'radio')

      it('should not wrap in a label', () => {
        const wrapper = mount(<Radio name='test' />)
        expect(wrapper).to.have.exactly(1).descendants('input.radio')
      })

      it('should wrap in a label', () => {
        const wrapper = mount(<Radio id='test-radio' name='test' label='Test Label' />)

        expect(wrapper).to.have.contain(Label)
        expect(wrapper.find('label').first()).to.have.props({htmlFor: 'test-radio'})
      })
    })

    describe('Checkbox', () => {
      itRenders(Checkbox, 'checkbox')
    })

    describe('Input', () => {
      itRenders(Input, 'input')
    })

    describe('Field', () => {
      itRenders(Field, 'field')
    })

    describe('Control', () => {
      itRenders(Control, 'control')
    })

    describe('Container', () => {
      itRenders(Container, 'container')
    })
  })

})
