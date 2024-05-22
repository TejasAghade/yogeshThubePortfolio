import React from 'react'
import '../../styles/css/home.css'


import InformationSection from './information-section'
import HomeSix from './sixth-section'
import ServicesSection from './services-section'


import Testimonials from './testimonials-section'
import IndustriesSection from './industries-section'

export default function Home() {
  return (
    <>
      <div className="home-section text-white top-section">     
            {/* <Navbar/> */}
            <div className="heading">
                <div className="text mt-72">
                    <h4>A Leading Provider Of Comprehensive <span className="mark">Accountancy</span> & Financial Solution </h4>
                    <p>Your trusted partner for financial excellence</p>
                </div>
            </div>
        <div className="backdrop"></div>
      </div>
      <div>
        <InformationSection />
        <ServicesSection/>
        <IndustriesSection/>
        <Testimonials/>
        <HomeSix/>
      </div>
    </>
  )
}
