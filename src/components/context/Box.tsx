import { useContextValue } from "./ThemeContext"

export const Box=()=>{
    const themes=useContextValue()
    return( <div>
        <div style={{backgroundColor:themes.primary.color}}>Hello Im Primary COLOR</div>

        <div style={{backgroundColor:themes.secondary.color}}>Hello Im Secondary COLOR</div>
        </div>)
}