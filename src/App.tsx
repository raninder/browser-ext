
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState('')


  const onclick = async () => {
    let [tab] = await chrome.tabs.query({active:true});
    chrome.scripting.executeScript<string[], void>({
      // !: identifier! removes null and undefined from the type of identifier
      target: { tabId: tab.id!},
      args: [color],
      func: (color) => {
        // alert("Hello from my vite extension")
        document.body.style.backgroundColor =  color
      }
    })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Extension</h1>
      <div className="card">
        <input type="color" onChange = {(e)=> setColor(e.currentTarget.value)} value={color} /> 
        <button onClick={onclick}>
         click Me
        </button>
       
      </div>
      
    </>
  )
}

export default App
