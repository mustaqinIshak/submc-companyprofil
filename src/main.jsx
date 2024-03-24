import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './pages/home/home.jsx'
import ErrorPage from './pages/404/errorPage.jsx'
import Shop from './pages/shop/shop.jsx'
import DetailItem from './pages/detail-item/detailItem.jsx'
import AboutUs from './pages/about/aboutUs.jsx'
import CrasherMusicMerchandise from './pages/crasherMusicMerchandise/crasherMusicMerchandise.jsx'

const router = createBrowserRouter([
  {
    
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        
        path:"/",
        element: <Home />
      },
      {
        path:"/shop",
        element:<Shop />
      },
      {
     
        path: "/detail-product/id/:id",
        element:<DetailItem />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/crasher-music-merchandise",
        element: <CrasherMusicMerchandise />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full bg-white text-black'>
        <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
