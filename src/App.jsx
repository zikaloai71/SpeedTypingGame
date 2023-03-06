import { useEffect, useState ,useRef} from 'react'
import './App.css'

function App() {
const [timer , setTimer ]=useState(10)
const [count,setCount]=useState(0)
const [text ,setText]=useState("")
const [timeRemaining,setTimeRemaining]=useState(timer)
const [isTimeRemaining,setIsTimeRemaining] = useState(false)

const textRef = useRef(null);

useEffect(()=>{
  if(timeRemaining  > 0 && isTimeRemaining){
    setTimeout(()=>{
      setTimeRemaining(prev=>prev-1)
    },1000)
  }
  else{
    endGame()
  }
},[timeRemaining , isTimeRemaining  ])

function handleTimer(e){
   setTimer(e.target.value)
   setTimeRemaining(e.target.value)
   if(e.target.value==="" || e.target.value < 0){
   setTimer(0)
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
   setIsTimeRemaining(prev=>!prev)
   textRef.current.disabled=false
   textRef.current.focus();
   if(timeRemaining === 0) {
    setText("")
    setTimeRemaining(timer);
   }
   
}

function endGame(){
  setIsTimeRemaining(false);
  handleCount(text)
}
    return (
      <div>
          <h1>How fast do you type in <input disabled={isTimeRemaining} type="number" onChange={handleTimer} className='time' name="timer" value={timer}/> seconds ?</h1>
          <textarea value={text} ref={textRef} disabled={!isTimeRemaining} name="text" onChange={handleText}/>
          <h4>Time remaining:{timeRemaining}</h4>
          <button 
          onClick={startGame}
          >
             { isTimeRemaining ? "pause" : "start"}
          </button>
          <h1>Word count:{count}</h1>
      </div>
  )
  
}

export default App
