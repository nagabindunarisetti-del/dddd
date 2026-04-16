import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Home/>
      
        
    </>
  )
}

export default App
