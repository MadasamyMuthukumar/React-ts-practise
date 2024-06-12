import React, { useState } from 'react'
import { FullName } from '../Exporttypes.types'
import { logged } from '../Exporttypes.types'
import { GreetTypes } from '../Exporttypes.types'
type username = {
    first:string,
    last:string
}
type color = {
    favcolor:string
}
function LoggedIn() {
    const [isLoggedIn , setLogged] = useState(false)  //REACT DEFUALTY UNDERSTAND THE TYPE OF THE STATE USING THE DEFAULT VALUE(BY TYPE INFERENCE)
    //WHEN THE INITIAL VALUE IS DIFFER FROM FUTURE VALUE..YOU CAN USE LIKE BELOW
    const [name,setName] = useState<logged['names'] |null>(null) //IT SPECIFIES THE TYPE AS NULL or USERNAME with initial value NULL

    //IT TELLS THE STATE ALWAYSN BE TYPE OF COLOR AND NOT BE NULL
    const [color ,setColot] = useState<logged['favcolor']>()  

    const [hobby,setHobby] = useState<GreetTypes['ObjArray'] >([{}] as GreetTypes['ObjArray']) //SPECIFIES TYPE AS ARRAY OF OBEJCT AND INITIAL VALUE AS EMPTY ARRAY OF OBJECT AS LIKE GreetTypes['ObjArray']. IN FUTURE THE VALUE CANT BE OF ANY TYPE.(TYPE ASSERTION)

const loggedin = ()=>{
    setLogged(true)
    setName({
        first:"kumar",
        last:"vijay"
    })
    setColot('green')
    setHobby([{
      first:"kumar",
      last:"vijay"
  }])
  console.log(hobby);
  

}
const loggedout = ()=>{
    setLogged(false)
    setName(null)
    setColot('red')
}
  return (
    <div>
      <button onClick={loggedin}>Logg in</button>
      <button onClick={loggedout}>Log out</button>
      <div>{isLoggedIn ? name?.first + " " + name?.last + ' LOGGED IN' : ' LOGGED OUT' }</div>
      {/* COLOR CANT BE NULL SO THERE IS NO CHECK REQUIRED FOR THIS */}
      <div> {color}</div> 
      <div>
        <h1>HOBBBIES</h1>
        {hobby.map(hobby=> <h4>{hobby.first}</h4>)}
      </div>
    </div>
  )
}
//name?.first means (it can be possibly null so it checks whether the name exist it prints the firstname)
export default LoggedIn
