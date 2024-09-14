import axios from "axios";
import { createContext, useContext, useState } from "react"
const CountContex=createContext(0);



function App() {
  const [count, setCount] = useState(0);
   
  
  return (
    <div>
        <CountContex.Provider value={{count,setCount}}>
      <Count />
      </CountContex.Provider>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons  />
  </div>
}

function CountRenderer() {
    const Count=useContext(CountContex)
  return <div>
    {Count.count}
  </div>
}

function Buttons() {
    const Count=useContext(CountContex)
  return <div>
    <button onClick={() => {
      Count.setCount(Count.count + 1)
    }}>Increase</button>

    <button onClick={() => {
     Count.setCount(Count.count - 1)
    }}>Decrease</button>
  </div>
}

// export default App