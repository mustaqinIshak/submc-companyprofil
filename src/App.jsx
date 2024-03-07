import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home/home'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
import Breadcrumb from './components/breadcrumb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white text-black'>
      <Navbar />
        <div className='mt-[188px]'>
          <Breadcrumb />
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default App
