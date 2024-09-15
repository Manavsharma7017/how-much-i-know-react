import useOnline from "./customhooks/useOnline"

const App=()=>{
    const isonline=useOnline()
return(
    <div>{isonline?<>online</>:<>offline</>}</div>
)
}
export default App