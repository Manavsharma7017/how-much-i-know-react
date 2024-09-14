import { useState } from 'react'
function App(){
    const [todo,settod]=useState([{
        title:"to goto home",
        description:'till today',
        completed:"yes"
    },{
        title:"to goto school",
        description:'till today',
        completed:"no"
    }]);
    function addtodo(){
        settod([...todo,{
            title:document.getElementById("1").value,
            description:document.getElementById("2").value,
            completed:document.getElementById("3").value
        }])
    }
    return (
        <div>
       <input type="text" placeholder='tittle' id='1'/>
       <input type="text" placeholder='description' id='2'/>
       <input type="text" placeholder=' completed' id='3'/>
       <button onClick={addtodo}>add</button>
       {todo.map((todos)=>{
        return(
            <div>
                <todos>title:{todos.title} description:{todos.description} completed:{todos.completed}
                </todos>
            </div>
        )
       })}
       </div>
    )
}
// export default App