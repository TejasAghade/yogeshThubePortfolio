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
import Footer from './components/footer.jsx'
import Services from './components/services.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about-us",
    element: <About/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="navbar text-white">
      <Navbar/>
    </div>
    <RouterProvider router={router} />
    <div className="footer-d invisible lg:visible">
      <Footer/>
    </div>
  </React.StrictMode>,
)
