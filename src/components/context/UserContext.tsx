import { createContext, useContext, useState } from "react";
type userContextProps={
    children:React.ReactNode
}
 type user={
    first:string,
    last:string
 }
type userContextType={
    name: user | null
    setName: React.Dispatch<React.SetStateAction<user | null>>
}
const UserContext = createContext<userContextType>({} as userContextType);
export const UserContextProvider =({children}:userContextProps)=>{
   const [name,setName]=useState<user | null>(null);
   const value={
    name,
    setName
   }
    return <UserContext.Provider value={ value }>
        {children}
    </UserContext.Provider>

}
export const useContextValue=()=>{
    return useContext(UserContext)
}