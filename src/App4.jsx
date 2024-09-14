import { memo, useState } from 'react'
// anytime set is changed then the hole app will rerender and its childer wil rerender to
// function App() {
//     const [name, setname]=useState("my name is manav");
//     function changename(){
//         setname([name]+" my name is"+Math.random())
//       }
      
//     return (
//       <div>
//         <button onClick={changename}>change name</button>
//         <CustomHeader title={name} ></CustomHeader>
//         <CustomHeader title="my name is manan" />
//       </div>
//     )
//   }
 
//   function CustomHeader({title}) {
//     return (<div>
//       {title}
//     </div>
//   )}
  
// to avoid rerender
// function App() {
 
//     return (
//       <div>
//          <CustomHeaderButton></CustomHeaderButton>
//         <CustomHeader title="my name is manan" />
//       </div>
//     )
//   }
//   function CustomHeaderButton(){
//        const [name, setname]=useState("my name is manav");
//        function changename(){
//            setname(" my name is "+Math.random())
//          }
//     return(
//         <div>
//             <button onClick={changename}>changename</button>
//             <div>
//                 {name}
//             </div>
//         </div>
//     )
//   }
 
//   function CustomHeader({title}) {
//     return (<div>
//       {title}
//     </div>
//   )}

//using memo
function App() {
  const [name, setname]=useState("my name is manav");
  function changename(){
      setname("my name is "+Math.random())
    }
    
  return (
    <div>
      <button onClick={changename}>change name</button>
      <Custom title={name} ></Custom>
      <br />
      <br />
      <Custom title="my name is manan" />
    </div>
  )
}

const Custom=memo(function Custom({title}){
    return (<div>
      {title}
    </div>
  )}
)

// export default App