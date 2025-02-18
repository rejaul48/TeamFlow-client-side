import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// custom css 
import '../Banner/Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>

            <section >

                <div className='overflow-hidden h-[290px] md:h-[440px] lg:h-[640px]'>
                    <Swiper
                        loop={true} // Enables infinite looping
                        autoplay={{
                            delay: 3000, // Slide change every 3 seconds
                            disableOnInteraction: false, // Continues autoplay after user interaction
                        }}
                        pagination={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper">
                        <div className='relative'>
                            <SwiperSlide >
                                <img className='w-full h-[290px] md:h-[440px] object-cover lg:h-[640px]' src="https://i.imgur.com/ell6lep.jpeg" alt="slider-image" />

                                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-30 '>
                                    <div className='flex flex-col items-center justify-center h-full mt-5 md:mt-0'>
                                        <h1 className='text-xl md:text-5xl lg:text-6xl text-white font-bold 
                                        
                                        '>Optimize Workforce Efficiency</h1>
                                        <p className='text-lg text-white md:mt-2 w-11/12 md:w-full text-center'>Manage employees, track performance, and automate HR tasks effortlessly.</p>
                                        <Link to={'/contact-us'} className='text-white text-lg font-semibold bg-[#578FCA] px-8 py-3 rounded-md animate-bounce mt-4'>Get in Touch</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                        <div className="relative">
                            <SwiperSlide className='w-full'>
                                <img className='w-full h-[290px] md:h-[440px] object-cover lg:h-[640px]' src="https://i.imgur.com/16Lohcx.jpeg" alt="slider-image" />

                                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-30 '>
                                    <div className='flex flex-col items-center justify-center h-full'>
                                        <h1 className='text-xl md:text-5xl lg:text-6xl text-white font-bold'>Empower Your Team</h1>
                                        <p className='text-lg text-white md:mt-2  w-11/12 md:w-full text-center'>Enhance productivity with smart employee scheduling and task automation.</p>
                                        <Link to={'/contact-us'} className='text-white text-lg font-semibold bg-[#578FCA] px-8 py-3 rounded-md animate-bounce mt-4'>Get in Touch</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                        <div className="relative">
                            <SwiperSlide>
                                <img className='w-full h-[290px] md:h-[440px] object-cover lg:h-[640px]' src="https://i.imgur.com/k0XI8r9.jpeg" alt="slider-image" />

                                <div className='absolute top-0 left-0 pt-5 w-full h-full bg-black bg-opacity-25 z-30 '>
                                    <div className='flex flex-col items-center justify-center h-full'>
                                        <h1 className='text-xl md:text-5xl lg:text-6xl text-white font-bold'>Smart HR Solutions</h1>
                                        <p className='text-lg text-white md:mt-2   w-11/12 md:w-full text-center'>Simplify hiring, onboarding, and evaluation—all in one platform.</p>
                                        <Link to={'/contact-us'} className='text-white text-lg font-semibold bg-[#578FCA] px-8 py-3 rounded-md animate-bounce mt-4'>Get in Touch</Link>
                                    </div>
                                </div>


                            </SwiperSlide>


                        </div>

                        <div className="relative">

                            <SwiperSlide>
                                <img className='w-full h-[290px] md:h-[440px] object-cover lg:h-[640px]' src="https://i.imgur.com/C0QsMQU.jpeg" alt="slider-image" />

                                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-30 '>
                                    <div className='flex flex-col items-center justify-center h-full'>
                                        <h1 className='text-xl md:text-5xl lg:text-6xl text-white font-bold'>Manage with Confidence</h1>
                                        <p className='text-lg text-white md:mt-2   w-11/12 md:w-full text-center'>Real-time insights, seamless reporting, and secure employee records.</p>
                                        <Link to={'/contact-us'} className='text-white text-lg font-semibold bg-[#578FCA] px-8 py-3 rounded-md animate-bounce mt-4'>Get in Touch</Link>
                                    </div>
                                </div>

                            </SwiperSlide>



                        </div>


                    </Swiper>

                </div>


            </section >

        </>
    )
}

export default Banner
