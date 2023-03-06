// import { useState } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
const [number , setNumber ]=useState(10)

function handleNumber(e){
   setNumber(e.target.value)
   if(e.target.value==="" || e.target.value < 0){
    setNumber(0)
   }
}
  
    return (
      <div>
          <h1>How fast do you type in <input type="number" onChange={handleNumber}className='time' name="number" value={number}/> seconds ?</h1>
          <textarea/>
          <h4>Time remaining:{number}</h4>
          <button 
          >
              Start
          </button>
          <h1>Word count:000</h1>
      </div>
  )
  
}

export default App
