import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about-us",
    element: <About/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
