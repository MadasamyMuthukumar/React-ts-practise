import { GreetTypes } from "./Exporttypes.types"
export const Greet = (props: GreetTypes) => {
  const {age =0}=props //meaning if age is passed then use that value..otherwise use 0 as age value
  return (
    <div>
      {/* STRING & NUMBER */}

      <h1>{props.isLoggedIn ? `Welcome ${props.name} - ${age}` : 'Welcome Guest'}</h1>

      {/* OBEJCT */}

      <h2>{props.personName.first},{props.personName.last}</h2>

      {/* ARRAY */}
      <h2>Integer Array</h2>
      <div>{
             props.numArr.map(no=><li>{no}</li>)
      }</div>

      {/* ARRAY OF OBJECTS */}
      <h2>Array of Object</h2>
      <div>{
        props.ObjArray.map(name=>{
        return (<li>{name.first}-{name.last}</li>)
      })
        }</div>

        {/* CHILDREn PROP */}
        <div>
        {props.children[0]}
        {props.children[1]}
        </div>

    </div>
  )
}

// export default Greet
