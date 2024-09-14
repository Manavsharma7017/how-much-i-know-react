import { useMemo } from "react";
import { useState } from "react"

function App(){
   const [Count,setcount]=useState(0) 
   const [Sum,setsum]=useState(0);

    let value=useMemo(()=>{
        let value=0
        for(let i=1;i<=Sum;i++){
           value=value+i;
        }
        return value
    },[Sum])
    return(
    <div>
        <input type="text" onChange={(e)=>{
            setsum(e.target.value)
        }}/>
        <h1>sum is {value}</h1>
        <button onClick={()=>{
            setcount(Count+1)
        }}>count {Count}</button>
    </div>

   )
}

// export default App