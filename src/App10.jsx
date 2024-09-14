import { useCallback, useState } from "react"

function App(){
const[a,seta]=useState(0);
const b=useCallback(()=>{
    return(
        <div>
            count {a}
        </div>
    )
},[])
return(
    <div>
        <button onClick={()=>{
            seta(a+1)
        }}>
            counter {a}
        </button>
        <Call b={b}></Call>
    </div>
)
}
function Call({b}){
    return(
        <div>
            hi there {b}
        </div>
    )
}
// export default App