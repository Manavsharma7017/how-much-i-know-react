import { useEffect } from "react"
import axios from "axios"
import { useRecoilState, useRecoilValue } from "recoil"
import { alln, allns } from "./store/atoms/Notifiatom"
function App(){ 
    const [value,setvalue]=useRecoilState(alln)
    const t=useRecoilValue(allns)
  

return(
    <>
    <button >home</button>
    <button>ne{value.network}</button>
    <button>jobs{value.jobs}</button>
    <button>m{value.messaging}</button>
    <button>n{value.notifications}</button>
    <button>me{t}</button>
    </>
)
}
export default App