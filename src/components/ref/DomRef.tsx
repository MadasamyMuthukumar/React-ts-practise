import { useEffect, useRef } from "react"

export const DomRef =()=>{
    const inputEl=useRef<HTMLInputElement>(null!);  //IF SURE THE REFERENCE IS NOT NULL 
    useEffect(()=>{
     inputEl.current.focus()
    },[])
    return(
        <input type="text" ref={inputEl} />
    )
}