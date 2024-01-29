import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-slate-200 text-black'>
      <Header />
      <Navbar />
    </div>
  )
}

export default App
