
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil';
import { todoatomf } from "./store/atoms/selectoryfamily"

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilStateLoadable(todoatomf(id));
// if(todo.state)
  return (
    <>
    
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App