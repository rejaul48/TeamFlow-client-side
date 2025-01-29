import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

// custom css 
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <>

            <section >

                <div className='overflow-hidden h-[270px] md:h-[440px] lg:h-[640px]'>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide >
                            <img className='w-full h-[270px] md:h-[440px] lg:h-[640px]' src="https://static.vecteezy.com/system/resources/previews/006/831/704/non_2x/panoramic-banner-of-business-partner-meeting-in-success-concept-businessman-corporate-teamwork-with-professional-team-partnership-celebration-greeting-with-a-work-deal-free-photo.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='w-full'>
                            <img className='w-full h-[270px] md:h-[440px] lg:h-[640px]' src="https://www.shutterstock.com/image-photo/business-people-men-teamwork-tablet-600nw-2370698141.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide> 
                            <img className='w-full h-[270px] md:h-[440px] lg:h-[640px]' src="https://www.cscanada.ca/wp-content/uploads/Consulting_Banner.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='w-full h-[270px] md:h-[440px] lg:h-[640px]' src="https://career-tree.in/wp-content/uploads/2019/09/consulting-banner.jpg" alt="" />
                        </SwiperSlide>
                         
                    </Swiper>
                   
                </div>
              

            </section>

        </>
    )
}

export default Banner
