
const App=()=>{
return(
    <><MyComponent></MyComponent>
   </>
)
}
import{ useState, useEffect } from 'react';

function MyComponent() {
  const [count,setcount]=useState(0)
  useEffect(() => {
    console.log("hi")

    return () => {
      console.log("unmount")
    };
  }, [count]);

  return(
  <><div>
    
    {
      count
    }
   <div> <button onClick={()=>{
      setcount(count+1)
    }}>in</button></div>
   <div><button onClick={()=>{
      setcount(count-1)
    }}>de</button></div> 
    </div></>
  )
}
export default App