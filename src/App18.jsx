import { createContext, useContext, useState } from "react"
import { RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countatom } from "./store/atoms/count";

const selec= selector({
    key:"selec",
    get:({get})=>{
        return get(countatom)%2
    }
})


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
    <Rende></Rende>
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
function Rende(){
  const c=useRecoilValue(selec)

      if(c===0){
    return( <div>even</div>)
    } 
    return(
      <>
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