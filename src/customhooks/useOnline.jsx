import { useEffect, useState } from "react"

const useOnline=()=>{
const [isonline,setonline]=useState(window.navigator.onLine)
useEffect(()=>{
    window.addEventListener("online",()=>{
        setonline(true)
    })
    window.addEventListener("offline",()=>{
        setonline(false)
    })
    return ()=>{
        window.removeEventListener("online")
        window.removeEventListener("offline")
    }
},[])
return isonline
}
export default useOnline