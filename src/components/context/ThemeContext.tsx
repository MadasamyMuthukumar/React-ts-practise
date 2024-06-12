import { theme } from "./theme";
import {createContext, useContext } from "react";

const ThemeContext = createContext(theme);  //need to provide initial value, we know it so not a problem
type ThemeContextProviderProps={
    children:React.ReactNode
}

export const ThemeContextProvider = ({children}:ThemeContextProviderProps)=>{

    return <ThemeContext.Provider value={theme}>
       {children} 
    </ThemeContext.Provider>
}

export const useContextValue=()=>{
   return useContext(ThemeContext);
}