

import { atomFamily, RecoilRoot, useRecoilState } from 'recoil';
import {todoatomf}from "./store/atoms/atomfamly"

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todoatomf(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App