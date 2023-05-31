import { useState } from 'react'
import './App.css'

function App() {
  
  const [buttonState, setButtonState] = useState('')
  const [count, setCount] = useState(1)

  const nombre = 'Francisco'


  const handleClick = () => {
    if(count % 2 != 0){
      setButtonState('- TOCADO')
    }else{
      setButtonState('')
    }
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <h1>Hola {nombre} {buttonState}</h1>
        <button onClick={handleClick}> ¡Clickeame! </button>
        <p>Hecho con React..</p>
      </div>
    </>
  )
}

export default App
