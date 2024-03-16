import { useEffect } from 'react'
import { getIndex } from './api/profileCompany'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
import Breadcrumb from './components/breadcrumb'

function App() {
  let profileCompany = localStorage.getItem('profileCompany')

  const handleGetInfoProfileCompany = async () => {
    if (!profileCompany) {
      const result = await getIndex()

      if(result) {
        localStorage.setItem("profileCompany", JSON.stringify(result))
      }
    }
  }

  useEffect(() => {
    handleGetInfoProfileCompany()
  },[])

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
