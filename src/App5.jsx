import { useState } from "react"
let count=4

function App(){
 const [todo,settodo]=useState([{
    id:1,
    tittle:"do some thing",
    des:"do it now"
 },{
    id:2,
    tittle:"do some work",
    des:"do it"
 },
 {   id:3,
    tittle:"do some work",
    des:"do it"
 }])
 function Addtodo(){
   settodo([...todo,{
    id:count++,
    tittle:"mdl",
    des:"v qlfp"
   }])
 }
return(
    <div>
        <button onClick={Addtodo}>Add todo</button>
        {todo.map((todos)=>{
            return(
            <Todo key={todos.id} tittle={todos.tittle} des={todos.des}></Todo>
        )})}
    </div>
)

}
function Todo({tittle,des}){
    return(
        <div>
            {tittle}
            <br />
            {des}
        </div>
    )
}
export default App