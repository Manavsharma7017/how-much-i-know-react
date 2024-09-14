
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
//  { now it is not a normal todo
 //    it have a state and content
//}
 if(todo.state==="loading"){
    return <div>loding</div>
 }
 else if(todo.state==="hasValue"){
   return   <>
      {todo.contents.title}
      {todo.contents.description}
      <br /> </>
  }
}

// export default App