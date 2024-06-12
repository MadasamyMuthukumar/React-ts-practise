import { Login } from "./Login"
import { ProfileProps } from "./Profile"
type PrivateProps={
    isLoggedIn:boolean,
    Component:React.ComponentType<ProfileProps>  
}
//OUR PROFILE COMPONENT HAS NAME PROP WE NEED TO PASS FROM HERE. BUT HERE WE DONT KNOW THE TYPE OF THAT PROP..SO WE NEED TO IMPORT THAT TYPE AND ASSIGN
export const PrivateF=({isLoggedIn,Component}:PrivateProps)=>{
   if(isLoggedIn)
   return <Component name="vishwas"/>
   else
   return <Login />
}