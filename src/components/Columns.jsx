import React from 'react'
import Element from './Element'

const sizeAliasList = {
  '4/5': 'four-fifths',
  '3/5': 'three-fifths',
  '2/5': 'two-fifths',
  '1/5': 'one-fifth',
  '3/4': 'three-quarters',
  '2/3': 'two-thirds',
  '1/2': 'half',
  '1/3': 'one-third',
  '1/4': 'one-quarter',
}

const parser = (propValue) => sizeAliasList[propValue] || propValue

export const Columns = (props) => (
  <Element
    {...props}
    extensions={{
      isCentered: { name: 'is-centered' },
      isMultiline: { name: 'is-multiline' },
      isSize: { name: 'is', parser, responsive: true  }
    }}
    tag='div'
    bulmaClass='columns'
    />
)

export const Column = (props) => (
  <Element
    {...props}
    extensions={{
      isNarrow: { name: 'is-narrow', responsive: true },
      isSize: { name: 'is', parser, responsive: true  }
    }}
    tag='div'
    bulmaClass='column'
    />
)
