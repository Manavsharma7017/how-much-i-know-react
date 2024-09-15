import { useState } from "react"
import useDebounce from "./customhooks/useDebounce"


const App=()=>{
const [value,setvalue]=useState("")
const debouncevalue=useDebounce(value,5000)
return(<>
<div>
<input type="text" placeholder="enter your text" value={value} onChange={(e)=>{
    setvalue(e.target.value)
}}></input>
{debouncevalue}
</div>
</>)
}
export default App