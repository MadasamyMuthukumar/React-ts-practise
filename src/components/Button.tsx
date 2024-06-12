import React from 'react'
type ButtonProps={
handleClick?: ()=>void //neither accepts parameter nor returns anything
handleClick2: (event: React.MouseEvent<HTMLButtonElement>,id:number) => void //describes event is mouse event and also specifying that its a button element
}
function Button(props:ButtonProps) {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
      <button onClick={(event) => props.handleClick2(event,1)}>Event Click</button>
    </div>
  )
}

export default Button
