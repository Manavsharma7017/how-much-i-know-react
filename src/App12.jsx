import { useEffect, useRef, useState } from "react"

function App(){
const [income,setincome]=useState(0);
const divref=useRef()
useEffect(()=>{
    setTimeout(()=>{
       divref.current.innerHTML=10
    },5000)
})
return(
    <div>
        hi there <div ref={divref}>{income}</div>
    </div>
)
}
// export default App