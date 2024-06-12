import { useEffect, useRef, useState } from "react"

export const MutableREf=()=>{
    const [timer,setTimer]=useState(0)
    const inputEl=useRef<number | null>(null)
    const stoptimer=()=>{
        if(inputEl.current) //POSSIBLY NULL SO CHEKCING
       window.clearInterval(inputEl.current)
    }

    useEffect(()=>{ 
        //THE RETURN VALUE OF SETINETERVAL IS NUMBER SO ASSING NUMBER TYPE TO OUR REFERENCE
     inputEl.current=window.setInterval(()=>{
        setTimer(prev=>prev+1)
        
        console.log("a");
     },1000)  //INCREASE TIMER VALUE 1 FOR EVERY SECOND
   
     return ()=>{  //CLEAR INTERVAL WHEN COMPONENT UNMOUNTS
        stoptimer()
     }

    },[])
    return(
        <div>
            Timer - {timer}
            <button onClick={stoptimer}>Stop</button>
        </div>
    )
}