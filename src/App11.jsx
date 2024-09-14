import { useEffect, useState } from "react";
import axois from "axios"
function useTodo(){
    const[todo,settodo]=useState([])
    useEffect(()=>{
     axois.get("http://localhost:3000/seetodo").then((res)=>{
        settodo(res.data.response)
     })
    })
    return todo;
}
function App(){
  const todo=useTodo()
  return(
    <div>
        {todo.map((t)=>{
            return(
                <div>
                  {  t.tittle}
                </div>
            )
        })}
    </div>
  )
}
// export default App