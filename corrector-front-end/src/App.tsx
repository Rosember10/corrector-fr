import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const counter = (number:number):void =>{
    setCount(count+1)
  }

  return (
    <>
      <h2>test</h2>
      <span>valor {count}</span>
      <br />
      <button onClick={()=>counter(1)}>
        +1
      </button>
    </>
  )
}

export default App
