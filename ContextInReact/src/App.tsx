import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [selected, setSelected] = useState(0)
  const [counter , setCounter] = useState(0)

  return (
    <>
      <div>
         <button onClick={()=>setSelected(0)}>Default</button> <button onClick={()=>setSelected(1)}>Context</button> <button onClick={()=>setSelected(2)}>Recoil</button> <button onClick={()=>setSelected(3)}>Redux</button>
      </div>
       {selected ===0 &&
        <h2>IM Default</h2>
      }
      {selected ===1 &&
        <h2>IM context</h2>
      }

{selected ===2 &&
        <h2>IM Recoil</h2>
      }
      {selected ===3 &&
        <h2>IM Redux</h2>
      }
      <center>
        {counter}
      </center>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
      <button onClick={() => setCounter(counter -1)}>Decrease</button>
    </>
  )
}

export default App
