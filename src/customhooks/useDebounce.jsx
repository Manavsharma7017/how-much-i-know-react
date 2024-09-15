import { useState,useEffect } from "react"


const useDebounce=(initialvalue,time)=>{
    const[ivalue,setvalue]=useState("")
   useEffect(()=>{
    const timer=setTimeout(()=>{
        setvalue(initialvalue);
    },time)

    return ()=>{
        clearTimeout(timer)
    }
   },[initialvalue,time])
return ivalue
}
export default useDebounce