import React from 'react'
import '../../styles/css/home.css';
import servicesData from '../../data/services.data';

export default function HomeThird() {
  return (
    <>
        <section className="home-third-section flex flex-col justify-center items-center mt-28 p-4">
            <div className="wrapper flex flex-col">
              <div className="heading flex flex-col justify-center items-center">
                  <h2 className='uppercase font-medium'>Our Services</h2>
                  <div className='bg-black w-48 h-1 mt-8' ></div>
              </div>
              <div className="cards flex flex-row flex-wrap justify-center items-center mt-16 gap-4">
                {
                  servicesData.map((e, i)=>{
                   return (
                      <>
                        <div key={"m"+i} className="services-card flex flex-row gap-8 p-4 rounded-lg">
                          <div className="card-left mt-2">
                              <img src={e.img} className='w-16' alt="" />
                          </div>
                          <div className="card-right mt-2">
                            <div className="title">
                              <h3 className='text-xl font-medium'>{e.service}</h3>
                            </div>
                            <div className="body ml-8 mt-3 p-2">
                              <ul className="list-disc apple-system-font text-base">
                                { 
                                  e.list.map((s, i)=>{
                                    return (
                                      <li className='mt-1 text-sm' key={"s"+i}>{s}</li>
                                    )
                                  })
                                  
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
        </section>
    </>
  )
}
