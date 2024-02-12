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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' bg-white text-black'>
        <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
