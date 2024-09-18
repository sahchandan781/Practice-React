import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [items, setItems] = useState(['orange', 'apple', 'mango'])
  


  return (
    <div>
        <ul>
        {items.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, "Mango"])}>Add Mango</button>
      <button onClick={() => setItems([...items, "grapes"])}>Add grapes</button>
    </div>
  )
}

export default App
