import React from 'react'
type inputProps = {
    value: string
    handleChange :(event:React.ChangeEvent<HTMLInputElement>)=>void
}
function Input({value,handleChange}:inputProps) {
  return (
    <div>
     <input type="text" value={value} onChange={(event)=>handleChange(event)}  /> 
    </div>
  )
}

export default Input
