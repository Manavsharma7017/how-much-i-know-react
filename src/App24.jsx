import useData from "./customhooks/useData"

const App=()=>{
    const [data,loding]=useData()
    
return(
    <>{
      loding?<div>l</div>:<div> {data.map((todo,index )=> <Track key={index} todo={todo} />)}</div>
    }
     
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App