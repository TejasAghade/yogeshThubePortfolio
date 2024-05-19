import React from 'react'
import '../styles/css/navbar.css';

export default function Navbar() {
  return (
    <>
        <div className="navbar-section flex flex-col">
            <div className="contact-details flex flex-row items-center justify-end gap-4 w-4/5 mb-5">
                <div className="phone-img">
                    <img src="public/assets/phone.png" className='w-7' alt="" />
                </div>
                <div className="mobile">
                    <span>+91 7020408061</span>
                </div>
                <div className="btn">
                    <button className='call-us-btn'>Call Us</button>
                </div>
            </div>
            <div className="navbar">    
                <div className="logo">
                    <img src="public/assets/logo.jpeg" className='w-16 h-16' alt="" />
                </div>
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </>
  )
}
