// wrapper in react
// function App(){
// return(
//     <div>
//       <Wrappercomponent innercomponent={<Textcomponent></Textcomponent>}></Wrappercomponent>
//     </div>
// )
// }
// function Textcomponent(){
//     return(
//         <div>
//             <h1>
//                 hi there
//             </h1>
//         </div>
//     )
// }
// function Wrappercomponent({innercomponent}){
//     return(<div style={
//         {
//             border:"2px solid black",
//         }
//     }>
//         {innercomponent}
//     </div>)
// }
// cleaner way to write wrapper

function App(){
return(
    <div>
      <Wrappercomponent >
        hi there
      </Wrappercomponent>
    </div>
)
}
function Wrappercomponent({children}){
    return(<div style={
        {
            border:"2px solid black",
        }
    }>
        {children}
    </div>)
}
// export default App