import { useEffect } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
import Breadcrumb from './components/breadcrumb'

function App() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className='flex flex-col min-h-screen bg-white text-black'>
      <Navbar />
        <div className='flex-grow pt-[90px] laptop:pt-[115px]'>
          <Breadcrumb />
          <Outlet />
        </div>
      <Footer />
      <div className="fixed z-30 bottom-0 right-0">
        <div className='p-8 cursor-pointer' onClick={() => openInNewTab("https://wa.me/6282188867819")}>
          <img src="/waLogo.png" width={60} height={60} />
        </div>
      </div>
    </div>
  )
}

export default App
