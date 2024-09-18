import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 const [count, setCount] = useState(0);

 useEffect(() => {
  console.log("component rendred successfully");
 }, [])

 const btnClick = () => {

  // difference between a and b

  // this is a
  setCount( count + 1)
  setCount( count + 1)

  // this is b
  setCount(count => count + 1)
  setCount(count => count + 1)

  // b will update counter by 2 and a only by 1
 }


  return (
    <div>
      <p>You clicked me {count} times</p>
       <button onClick={btnClick}>Click me!</button>
       
    </div>
  )
}

export default App
