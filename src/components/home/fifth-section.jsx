import React from 'react'
import '../../styles/css/home.css';
import testimonials from '../../data/testimonial.data';

export default function HomeFive() {
  return (
    <>
        <section className="home-section-five mt-60 flex flex-col justify-center items-center p-4">
            <div className="wrapper flex flex-col">
              <div className="heading flex flex-col justify-center items-center">
                  <h2 className='uppercase font-medium'>TESTIMONIALS</h2>
                  <div className='bg-black w-48 h-1 mt-8' ></div>
              </div>
              <div className="cards flex flex-row flex-wrap justify-center items-center mt-16 gap-4">
                {
                    testimonials.map((e)=>{
                        return (
                            <>
                                <div className="testimonial-card w-80 h-96 flex flex-col justify-center items-center">
                                    <div className="heading-img w-36 flex flex-row justify-center items-center">
                                        <img src={e.img} className='w-36 border-2 border-black' alt="" />
                                    </div>
                                    <div className="test-body mt-8">
                                        <div className="title">
                                            <p className="font-medium font-15 text-center">{e.title}</p>
                                        </div>
                                        <div className="desc mt-4">
                                            <p className="apple-system-font font-normal font-15 italic text-center">"{e.desc}”</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
              </div>
              <div className="view-more flex justify-center items-center mt-4">
                <button className='uppercase mark-bg outline-none border-none hover:bg-gray-400 tracking-wide hover:text-white'>View More TESTIMONIALS</button>
              </div>
            </div>
        </section>
    </>
  )
}
