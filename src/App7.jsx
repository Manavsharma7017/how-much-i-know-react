import { useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    },[])
  
    return <h1>I've rendered {count} times!</h1>;
  }
// export default App



// useeffect get call out every time a rerender happen but we can use dependency on which it have to rerender