import React from 'react'
import '../styles/css/footer.css';

export default function Footer() {
  return (
    <>
        <section className="footer bg-black mt-32 flex justify-center">
            <div className="w-4/5 h-34">
                <div className="contacts mt-20">
                    <div className="top flex flex-row justify-between">
                        <div className="phone flex flex-row justify-start items-center gap-4 w-80 h-16">
                            <div className="img">
                                <img src="assets/phon2.webp" className='w-7' alt="" />
                            </div>
                            <div className="texts flex flex-col">
                            <span className='mark font-medium text-sm'>Give us a call</span>
                            <span className='font-light text-base text-white'>+ 91 98903 81234</span>
                            </div>
                        </div>
                        <div className="mail flex flex-row justify-start items-center gap-4 w-80 h-16">
                            <div className="img">
                                <img src="assets/mail.webp" className='w-7' alt="" />
                            </div>
                            <div className="texts flex flex-col">
                            <span className='mark font-medium text-sm'>Send us a message</span>
                            <span className='font-light text-base text-white'>+ 91 98903 81234</span>
                            </div>
                        </div>

                        <div className="location flex flex-row justify-start items-center gap-4 w-80 h-16">
                            <div className="img">
                                <img src="assets/location.webp" className='w-7' alt="" />
                            </div>
                            <div className="texts flex flex-col">
                            <span className='mark font-medium text-sm'>Office location</span>
                            <span className='font-light text-base text-white'>Viman nagar, pune, mh</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-12 horizontal-line"></div>
                </div>
                <div className="mt-20 flex flex-row justify-between">
                    <div className="sec-1 w-80">
                        <div className="log flex flex-row justify-center items-center gap-4">
                            <img src="assets/logo.jpeg" className='w-20' alt="" />
                            <div className='flex flex-col text-white gap-1'>
                                <span className='uppercase text-base font-medium'>Yogesh Thube & CO</span>
                                <span className='uppercase text-xs'>chartered accountant</span>
                            </div>
                        </div>
                        <div className="desc mt-8">
                            <p className='text-white text-sm font-light'>Contact us today to explore how we can help streamline your financial processes</p>
                        </div>
                        <div className="socials flex flex-row gap-6 mt-12">
                            <a href="#">
                                <img src="assets/twit.png" className='mark-bg rounded-full w-10 p-1' alt="" />
                            </a>
                            <a href="#">
                                <img src="assets/linkedin.png" className='mark-bg rounded-full w-10 p-1' alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="sec-2 w-80 flex flex-col items-center">
                        <div className="log flex flex-row justify-center items-center gap-4">
                            <span className='font-medium mark text-lg'>Quick Links</span>
                        </div>
                        <div className="desc mt-8">
                            <ul className="list-disc text-white text-base font-light">
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sec-2 w-80 flex flex-col items-center">
                        <div className="log flex flex-row justify-center items-center gap-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.144466399739!2d73.90272551978505!3d18.568571581373096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c131ed5b54a7%3A0xad718b8b2c93d36d!2sSky%20Vista!5e0!3m2!1sen!2sin!4v1716226733336!5m2!1sen!2sin" style={{border : '0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
