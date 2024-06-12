import React from 'react'
type Styles ={
    styles:React.CSSProperties
}
function Styleprop(props:Styles) {
  return (
    <div>
      <p style={props.styles}>Text style goes here...</p>
    </div>
  )
}

export default Styleprop
