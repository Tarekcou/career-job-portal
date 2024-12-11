import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Router, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Routers from './Routes/Routers.jsx'
import router from './Routes/Routers.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
       </AuthProvider>
  </StrictMode>,
)
