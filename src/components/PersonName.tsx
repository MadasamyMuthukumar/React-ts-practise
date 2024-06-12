import React from 'react'
import { FullName } from './Exporttypes.types'
function PersonName( props:FullName ) {
  return (
    <div>
      <h1>{props.names.first}</h1>
      <h2>{props.names.last}</h2>
    </div>
  )
}

export default PersonName
