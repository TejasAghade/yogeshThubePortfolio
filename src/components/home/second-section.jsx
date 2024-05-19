import React from 'react'
import '../../styles/css/home.css';

export default function HomeSecond() {
  return (
    <>  
        <section className="mt-32 second-section flex flex-row justify-center items-center">
            <div className="wrapper w-4/5 flex flex-row justify-between">
                <div className="left w-2/4 gap-6 flex flex-col">
                    <div className="mark text-lg font-medium">Welcome To Y Thube & Co</div>
                    <div className="heading">
                        <p className='text-23px font-medium'>Welcome to Yogesh Thube & Co., your trusted partner in financial excellence</p>
                    </div>
                    <div className="info text-base apple-system-font font-extralight">
                        <p>Established with a commitment to delivering comprehensive financial solutions, we are a team of seasoned Chartered Accountants dedicated to helping businesses and individuals navigate the complex landscape of accounting, taxation, and financial planning.</p>
                    </div>
                    <div className="services w-full mt-4 flex justify-center text-base apple-system-font font-extralight">
                        <div className="wrapper flex flex-row gap-14 pl-8 pr-8">
                            <div className="left ">
                                <ul className='list-disc'>
                                    <li>Accounting and Bookkeeping</li>
                                    <li>Auditing and Assurance</li>
                                    <li>Taxation</li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul className='list-disc'>
                                    <li>Financial Consulting</li>
                                    <li>Financial Advisory</li>
                                    <li>Company Formation</li>
                                </ul>
                                <p className='author text-xl mt-2 font-medium'>Yogesh Thube & Co. <br />
                                 <span className='text-sm font-light'>– Founder</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-acc-img-wr bg-triangle flex flex-col">
                    <img src="public/assets/building.webp" className='w-full relative -z-0 building-img' alt="" />
                    <img src="public/assets/accounting.png" className='w-full relative z-10 -top-24 left-8 acc-img' alt="" />
                </div>
            </div>
        </section>
    </>
  )
}
