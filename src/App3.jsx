import { useState } from 'react'
function App() {
    return (
      <div>
        <CustomHeader title="my name is manav" />
        <CustomHeader title="My name is manav" />
      </div>
    )
  }
  
  function CustomHeader({title}) {
    return (<div>
      {title}
    </div>
  )}
  



// export default App