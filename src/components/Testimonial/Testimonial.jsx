import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Section_head from '../Section_head/Section_head';

// Custom CSS
import '../Testimonial/testimonials.css';

const Testimonial = () => {
    const testimonials = [
        {
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            name: 'John Doe',
            position: 'CEO of TechCompany',
            testimonial:
                'This product completely changed the way our company works. It helped us streamline processes and improve efficiency drastically. Highly recommend!',
        },
        {
            image: 'https://randomuser.me/api/portraits/women/2.jpg',
            name: 'Jane Smith',
            position: 'Marketing Director at ABC Corp',
            testimonial:
                'The experience with this team has been amazing. They truly understand our needs and provided excellent solutions. Great customer service too!',
        },
        {
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            name: 'Mark Johnson',
            position: 'Founder of TechPioneers',
            testimonial:
                'A fantastic tool that integrates seamlessly into our workflow. The features are intuitive, and the support is always responsive. 10/10!',
        },
        {
            image: 'https://randomuser.me/api/portraits/women/3.jpg',
            name: 'Emma White',
            position: 'Product Manager at SuperBrand',
            testimonial:
                'Incredible experience from start to finish. Their team really understands the needs of businesses and works to solve problems efficiently.',
        },
    ];

    return (
        <>
            <section className='mt-24 mb-3 px-4 xl:px-0'>
                {/* Testimonial section head */}
                <Section_head heading={'Testimonials'} shortHeading={'What clients say about us?'} />

                <div className="max-w-6xl mx-auto">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        spaceBetween={20}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,  
                        }}

                        breakpoints={{
                             
                            320: {
                                slidesPerView: 1, 
                                spaceBetween: 10,
                            },
                       
                            768: {
                                slidesPerView: 2,  
                                spaceBetween: 20,
                            },
                           
                            1024: {
                                slidesPerView: 3, 
                                spaceBetween: 40,
                            },
                        }}


                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper "
                    >
                        {/* Loop through the testimonials */}
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center bg-blue-200 text-white p-6 rounded-lg shadow-lg">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-24 h-24 rounded-full object-cover mb-4"
                                    />
                                    <p className="text-lg text-gray-800 font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500 mb-4">{testimonial.position}</p>
                                    <p className="text-gray-600 text-center italic">{`"${testimonial.testimonial}"`}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </section>
        </>
    );
};

export default Testimonial;
