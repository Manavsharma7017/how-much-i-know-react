import { useEffect, useState } from "react"
import axios from "axios"
const useData=()=>{
    const[data,setdata]=useState([])
    const[loding,setloding]=useState(true)
useEffect(()=>{
    const call= async()=>{
     const res=await axios.get("http://localhost:3000/todo")
     const userdata=res.data
     setloding(false)
     setdata(userdata)
     console.log(userdata)
    }
    call()
},[])
return [data,loding]
}

export default useData