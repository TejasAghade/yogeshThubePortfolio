import React from 'react'
import Navbar from './navbar'

import '../styles/css/about.css';

export default function About() {
  return (
    <>
      <section className='about'>
        <div className="navbar text-white"><Navbar/></div>
        <div className="header text-white flex justify-center items-center">
            <h2 className='z-10 text-4xl font-medium mt-40'>About Us</h2>
        </div>

        <div className="main flex justify-center items-center mt-20 apple-system-font">
          <div className="wrapper w-4/5">
            <div className="desc">
              <p className='font-normal'>We are a leading Chartered Accountancy (CA) firm providing a comprehensive range of professional services in the field of accounting, auditing, taxation, and financial consulting.
                <br/><br/> With a highly skilled and experienced team, we strive to deliver exceptional services and build long-term relationships with our clients. Our firm is committed to upholding the highest standards of professionalism, integrity, and ethical conduct.</p>
            </div>
            <div className="list">
                <p className='font-semibold mt-8'>Our CA firm serves a diverse clientele, including:</p>
                <ul className="list-disc ml-8 mt-3 font-normal">
                  <li>Small and medium-sized enterprises (SMEs)</li>
                  <li>Startups and entrepreneurial ventures</li>
                  <li>Corporations and multinational companies</li>
                  <li>Non-profit organizations</li>
                  <li>Professionals and individuals</li>
                </ul>
            </div>
            
            <div className="team-leads mt-16">
              <div className="heading">
                <h2 className="text-3xl font-semibold" style={{fontSize : '2rem'}}>Our Team Leads</h2>
              </div>
              <div className="flex flex-row mt-16">
                  <div className="one w-1/2 p-4">
                      <div className="profile flex flex-col items-center">
                        <div className="w-72 h-72 rounded-full overflow-hidden flex justify-center items-center">
                          <img src="assets/profile.jpeg" className='' alt="" />
                        </div>
                        <div className="name mt-8">
                          <span className='text-3xl font-semibold'>John Doe</span>
                        </div>
                        <div className="info mt-8 text-justify font-normal">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus voluptatem sit quidem voluptates dolore amet recusandae molestias cum, deleniti laborum animi veniam porro illum vero praesentium, ipsam atque, deserunt necessitatibus itaque illo! Quidem inventore eligendi consectetur ipsam labore similique voluptatum laboriosam officia, nostrum vel architecto rerum a! Optio laborum eligendi vero error atque et sint commodi eum rerum expedita aliquid sequi reprehenderit facere molestias repudiandae, sed nam repellat consequuntur soluta. Unde, provident dicta fugiat atque commodi totam consectetur doloremque quam molestias doloribus temporibus tempora culpa perferendis a saepe. Consequatur dolorem sit vero odio molestias similique fuga eaque odit nulla autem.</p>
                        </div>
                      </div>
                  </div>
                  <div className="two w-1/2 p-4">
                    <div className="profile flex flex-col items-center">
                        <div className="w-72 h-72 rounded-full overflow-hidden flex justify-center items-center">
                          <img src="assets/profile.jpeg" className='' alt="" />
                        </div>
                        <div className="name mt-8">
                          <span className='text-3xl font-semibold'>John Doe</span>
                        </div>
                        <div className="info mt-8 text-justify font-normal">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus voluptatem sit quidem voluptates dolore amet recusandae molestias cum, deleniti laborum animi veniam porro illum vero praesentium, ipsam atque, deserunt necessitatibus itaque illo! Quidem inventore eligendi consectetur ipsam labore similique voluptatum laboriosam officia, nostrum vel architecto rerum a! Optio laborum eligendi vero error atque et sint commodi eum rerum expedita aliquid sequi reprehenderit facere molestias repudiandae, sed nam repellat consequuntur soluta. Unde, provident dicta fugiat atque commodi totam consectetur doloremque quam molestias doloribus temporibus tempora culpa perferendis a saepe. Consequatur dolorem sit vero odio molestias similique fuga eaque odit nulla autem.</p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </section>
       <div className="backdrop-f"></div>
    </>
  )
}
