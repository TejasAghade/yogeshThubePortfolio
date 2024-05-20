import React from 'react'
import '../../styles/css/home.css';

export default function HomeSix() {
  return (
    <>
        <section className="home-section-six flex flex-col justify-center items-center mt-20 p-4">
                <div className="bg"></div>
                <div className="main-content w-4/5 flex justify-center absolute z-30 mt-20">
                    <div className="heading flex flex-col justify-center w-3/5 items-center mb-12">
                        <div className=" ">
                            <p className='text-white text-3xl font-medium'>Contact us to optimize your financial needs.</p>
                        </div>
                        <div className="heading mt-6">
                            <p className='font-light text-white text-base text-center'>Regardless of the industry you belong to, CA Yogesh Thube and Co. is dedicated to providing industry-specific financial solutions.</p>
                        </div>
                        <div className="mt-4">
                            <button className='uppercase mt-8 mark-bg p-3 w-40 outline-none border-none hover:bg-gray-400 tracking-wide hover:text-white'>Contact Us</button>
                        </div>
                    </div>
                </div>
            <div className="backdrop-4"></div>
        </section>
    </>
  )
}
