import { useEffect, useState } from "react"
import axios from "axios"
function App(){
    const[count,setcount]=useState(1);
    
return(
    <div>
        <button onClick={()=>{
            setcount(1)
        }}>1</button>
        <button onClick={()=>{
            setcount(2)
        }}>2</button>
        <button onClick={()=>{
            setcount(3)
        }}>3</button>
        <button onClick={()=>{
            setcount(4)
        }}>4</button>
       <div>
       <Todod id={count}></Todod>
       </div>
    </div>
)


}
function Todod({id}){
const [Todos,setTodo]=useState([])

useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id).then((res)=>{
     setTodo(res.data.todo)
    })
},[id])
return(
    <div>          
          <div>
                    <h1>{Todos.title}</h1>
              <h2>{Todos.description}</h2>
          </div>
      
    </div>
)
}
// export default App