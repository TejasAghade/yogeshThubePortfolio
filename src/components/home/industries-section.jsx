import React from 'react'
import servicesData from '../../data/services.data';

export default function IndustriesSection() {
  return (
    <>
        <section className="home-fourth-section flex flex-col justify-center items-center mt-28 p-4">
            <div className="bg"></div>
                <div className="main-content w-4/5 absolute z-30 mt-64">
                    <div className="heading flex flex-col justify-center items-center mb-12">
                        <div className="mark text-lg font-medium">Yogesh Thube & Co</div>
                        <div className="heading mt-6">
                            <p className='font-medium text-white text-3xl h-12'>Industries We Support</p>
                        </div>
                    </div>
                    <div className="industry-support-card-wr flex flex-row p-5 pt-4 justify-between rounded-md bg-white">
                        <div className="card h-full w-96 p-4">
                            <div className="i-image">
                                <img src="assets/i1.webp" className='rounded-md' alt="" />
                            </div>
                            <div className="body mt-5">
                                <div className="tit">
                                    <p className='font-medium text-lg'>Small & Medium Enterprises</p>
                                </div>
                                <div className="desc mt-4">
                                    <p className='apple-system-font font-light'>As a small or medium-sized enterprise (SME) owner, you understand the importance of sound financial management.</p>
                                </div>
                                <div className='mt-6'>
                                    <a href='#' className='mark font-medium'>READ MORE</a>
                                </div>
                            </div>
                        </div>

                        <div className="card h-full w-96 p-4">
                            <div className="i-image">
                                <img src="assets/i2.webp" className='rounded-md' alt="" />
                            </div>
                            <div className="body mt-5">
                                <div className="tit">
                                    <p className='font-medium text-lg'>Startup and Entrepreneurial</p>
                                </div>
                                <div className="desc mt-4">
                                    <p className='apple-system-font font-light'>As a startup or entrepreneurial venture, you face unique financial challenges on your path to success. At CA Yogesh Thube and Co</p>
                                </div>
                                <div className='mt-6'>
                                    <a href='#' className='mark font-medium'>READ MORE</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card h-full w-96 p-4">
                            <div className="i-image">
                                <img src="assets/i3.webp" className='rounded-md' alt="" />
                            </div>
                            <div className="body mt-5">
                                <div className="tit">
                                    <p className='font-medium text-lg'>Non-Profit Organizations</p>
                                </div>
                                <div className="desc mt-4">
                                    <p className='apple-system-font font-light'>Non-profit organizations play a crucial role in driving positive change in society. At CA Yogesh Thube and Co.</p>
                                </div>
                                <div className='mt-6'>
                                    <a href='#' className='mark font-medium'>READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="backdrop-4"></div>
        </section>
    </>
  )
}
