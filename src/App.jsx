import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import SlideShow from './components/slideshow/slideshow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen bg-white text-black'>
      <Navbar />
      <div className='mt-[188px]'>
        <SlideShow />
      </div>
    </div>
  )
}

export default App
