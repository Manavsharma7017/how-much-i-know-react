import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashbord } from "./component/A13dasbord"
import { Landing } from "./component/A13landing"

function App(){
 return (
    <>
    <div>
       <button onClick={()=>{
         window.location.href="/"
       }}>landing</button>
       <button onClick={()=>{
         window.location.href="/das"
       }}>dashbord</button>
       
    </div>
    <BrowserRouter>
    <Routes>
       <Route path="/das" element={<Dashbord></Dashbord>}></Route>
       <Route path="/" element={<Landing></Landing>}></Route>
    </Routes>
    </BrowserRouter>
    </>
 )
}
// export default App