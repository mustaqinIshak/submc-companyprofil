import { useEffect } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
import Breadcrumb from './components/breadcrumb'

function App() {
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
