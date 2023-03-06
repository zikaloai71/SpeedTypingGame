// import { useState } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
const [number , setNumber ]=useState(10)
const [count,setCount]=useState(0)
const [text ,setText]=useState("")
function handleNumber(e){
   setNumber(e.target.value)
   if(e.target.value==="" || e.target.value < 0){
    setNumber(0)
   }
}
function handleText(e){
 setText(e.target.value);
}

function handleCount(text){
  const wordsArr = text.trim().split(" ");
  return setCount(wordsArr.filter(word => word !== "").length)
}
  function startGame(){
    handleCount(text)
  }
    return (
      <div>
          <h1>How fast do you type in <input type="number" onChange={handleNumber}className='time' name="number" value={number}/> seconds ?</h1>
          <textarea value={text} name="text" onChange={handleText}/>
          <h4>Time remaining:{number}</h4>
          <button 
          onClick={startGame}
          >
              Start
          </button>
          <h1>Word count:{count}</h1>
      </div>
  )
  
}

export default App
