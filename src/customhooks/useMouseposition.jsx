import { useEffect, useState } from "react"


const useMouseposition=()=>{
    const [position,setposition]=useState({x:0,y:0})
    const handle=(e)=>{
        setposition({ x: e.clientX, y: e.clientY })
    }
    useEffect(()=>{
     window.addEventListener("mousemove",handle)
     return ()=>{
        window.removeEventListener("mousemove",handle)
     }
    },[])
    return position
}
export default useMouseposition
