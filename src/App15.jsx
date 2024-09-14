import { BrowserRouter, Route, Routes,useNavigate } from "react-router-dom"
import {lazy } from "react";
import { Suspense } from "react";
const Dashbord=lazy(()=> import("./component/A13dasbord"))
const Landing=lazy(()=> import("./component/A13landing"))


function App(){
    
 return (
    <>
    <BrowserRouter>
    <Bar/>
    <Routes> 
       <Route path="/das" element={<Suspense fallback={"l"}><Dashbord></Dashbord></Suspense>}></Route>
       <Route path="/" element={<Suspense fallback={"l"}><Landing></Landing></Suspense>}></Route>
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