import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} ></CustomButton>
      <CustomButton count={count2} setCount={setCount2} ></CustomButton>
    </div>
  );
}

function CustomButton({ count, setCount }) {
  function onButtonClick() {
    setCount(count + 1);
  }

  return(
    <button onClick={onButtonClick}>
      Counter {count}
    </button>
    );
}

//export default App
