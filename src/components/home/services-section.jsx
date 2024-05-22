import React from 'react'
import '../../styles/css/home.css';
import servicesData from '../../data/services.data';

export default function ServicesSection() {
  return (
    <>
        <section className="home-third-section flex flex-col justify-center items-center mt-28 p-4">
            <div className="wrapper flex flex-col">
              <div className="heading flex flex-col justify-center items-center">
                  <h2 className='uppercase font-medium'>Our Services</h2>
                  <div className='bg-black w-48 h-1 mt-8' ></div>
              </div>
              <div className="cards flex flex-row flex-wrap justify-center items-center mt-16 gap-3">
                {
                  servicesData.map((e, i)=>{
                   return (
                      <div key={"m"+i}  className="services-card flex sm:flex-row flex-col sm:items-start items-center gap-4 p-4 mb-4 rounded-lg">
                        <div className="card-left mt-2  w-16 sm:h-16 h-16 flex sm:justify-normal justify-center">
                            <img src={e.img} className='w-16 sm:h-16 h-16' alt="" />
                        </div>
                        <div className="card-right mt-2">
                          <div className="title">
                            <h3 className='text-xl font-medium sm:text-left text-center'>{e.service}</h3>
                          </div>
                          <div className="body ml-4 mt-3">
                            <ul className="list-disc apple-system-font text-base list-inside">
                              { e.list.map((s, i)=><li className='mt-1 text-sm ' key={"s"+i}>{s}</li>) }
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        </section>
    </>
  )
}
