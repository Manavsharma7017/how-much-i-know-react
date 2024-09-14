import { createContext, useContext, useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countatom } from "./store/atoms/count";

function App(){
  return(
    <RecoilRoot>
      <Count></Count>
    </RecoilRoot>
   
  )
}
function Count(){
  return(
    <>
    <Countr></Countr>
    <Button></Button>
    </>
  )
}

function Countr(){
  const c=useRecoilValue(countatom)
  return(
    <>
    {c}
    </>
  )
}

function Button(){
  const [count,setcount] =useRecoilState(countatom)
  return(
    <div>
    <button onClick={()=>{
      setcount( c=> c+1)
      check(count)
    }}>increment</button>
    <button onClick={()=>{
      setcount(c=>c-1)
      check(count)
    }}>decrement</button>
    </div>
    
  )
}

// export default App