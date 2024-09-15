import useMouseposition from "./customhooks/useMouseposition"

const App=()=>{
    const position=useMouseposition()
return(<>
   <div>x:position{position.x}</div>
   <div>y:position{position.y}</div></>
)
}
export default App