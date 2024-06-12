import React, { useReducer } from 'react'

const inialState = {count:0};
//IF YOU WANT OT USE SEPERATE TYPE LIKE
// types Example={

// }
// ohterwise type definition conflates the state and the action into one type
// write two seperate types for state and action..
type UpdateAction={
  type:'inc' | 'dec',
  payload:number
}

type ResetAction ={
  type:'reset'
  payload:[]
}
type Action = UpdateAction | ResetAction
//HERE WE ARE USING TWO TYPES FOR ACTION

function reducer(state:{count:number},action:Action){
  switch(action.type){
    case 'inc':
      return {count: state.count + action.payload}
    case 'dec':
      return {count:state.count - action.payload}

    default:
     return state;
  }

}
function Usereduce() {
const [state,dispatch] = useReducer(reducer,inialState);
  return (
    <div>
      <h3> Count:{state.count}</h3>
      {/* FIRST TWO BUTTONS USES UPDATE ACTION TYPE HAS TWO PARAMETER TYPE AND PAYLOAD */}
      <button onClick={()=>dispatch({type:'inc',payload:5})}>+5</button>

      <button onClick={()=>dispatch({type:'dec',payload:5})}>-5</button>
      <button onClick={()=>dispatch({type:'reset',payload:'ds'})}>Reset</button>
      {/* RESET BUTTON ONLY HAS ONE PARAMETER..IT WILL USE RESETACTION TYPE */}

    </div>
  )
}

export default Usereduce
