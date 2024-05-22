import React from 'react'

import '../styles/css/service.css';

import ServicesSection from './home/services-section';

export default function Services() {
  return (
    <>
      <section className='service w-full'>
        <div className="header text-white flex justify-center items-center border">
            <h2 className='z-10 text-4xl font-medium mt-40 h-12'>Services</h2>
        </div>

        <div className="main flex justify-center w-full -mt-20 items-center apple-system-font p-4">
          <div className="wrapper">
            <ServicesSection/>
          </div>
        </div>

      </section>
       <div className="backdrop-f"></div>
    </>
  )
}
