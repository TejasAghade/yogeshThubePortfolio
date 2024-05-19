import React from 'react'
import Navbar from '../navbar'
import '../../styles/css/hero.css'

export default function Hero() {
  return (
    <>
      <div className="hero-section text-white top-section">     
            <Navbar/>
            <div className="heading">
                <div className="text">
                    <h4>A Leading Provider Of Comprehensive <span className="mark">Accountancy</span> & Financial Solution </h4>
                    <p>Your trusted partner for financial excellence</p>
                </div>
            </div>
        <div className="backdrop"></div>
      </div>
    </>
  )
}
