import { useContextValue } from "./UserContext"
export const User=()=>{
    const user=useContextValue();
    const login=()=>{
        user.setName({
            first:"vijay",
            last:"kumar"
        })
    }
    const logout=()=>{
        user.setName(null)
    }
   return(
    <div>
    <button onClick={login}>Logged nIn</button>
    <button onClick={logout}>Logged Out</button>
    <div> First name : {user.name?.first}</div>
    <div>Lasr name : {user?.name?.last}</div>
    </div>
   ) 
}