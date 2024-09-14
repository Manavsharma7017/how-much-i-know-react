import { BrowserRouter, Route, Routes,useNavigate } from "react-router-dom"
import { Dashbord } from "./component/A13dasbord"

import { Landing } from "./component/A13landing"

function App(){
    
 return (
    <>
   
    <BrowserRouter>
    <Bar/>
    <Routes> 
       <Route path="/das" element={<Dashbord></Dashbord>}></Route>
       <Route path="/" element={<Landing></Landing>}></Route>
    </Routes>
    </BrowserRouter>
    </>
 )
}
function Bar(){
   const navigate=useNavigate();
   return (
      <div>
         <button onClick={()=>{
            navigate("/")
         }}>landing</button>
         <button onClick={()=>{
           navigate("/das")
         }}>dashbord</button>
      </div>
   )
}
// export default App