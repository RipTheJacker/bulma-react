import React from 'react'
import Label from './Label'

const withLabel = Component => function labelWrapped({disabled, label, labelPlacement, ...rest}) {
  const isDisabled = disabled

  if (label) {
    const isBefore = labelPlacement === 'before'
    const isAfter = labelPlacement === 'after' || !isBefore

    return (
      <Label htmlFor={rest.id} disabled={isDisabled} className={rest.bulmaClass}>
        {isBefore && label}
        <Component {...rest} disabled={isDisabled} />
        {isAfter && label}
      </Label>
    )
  }

  return <Component {...rest} disabled={isDisabled} />
}

export default withLabel
