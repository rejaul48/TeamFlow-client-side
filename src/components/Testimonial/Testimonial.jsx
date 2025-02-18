import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
    const testimonials = [
        {
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            name: "John Doe",
            position: "CEO of TechCompany",
            testimonial:
                "This product completely changed the way our company works. It helped us streamline processes and improve efficiency drastically. Highly recommend!",
        },
        {
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            name: "Jane Smith",
            position: "Marketing Director at ABC Corp",
            testimonial:
                "The experience with this team has been amazing. They truly understand our needs and provided excellent solutions. Great customer service too!",
        },
        {
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            name: "Mark Johnson",
            position: "Founder of TechPioneers",
            testimonial:
                "A fantastic tool that integrates seamlessly into our workflow. The features are intuitive, and the support is always responsive. 10/10!",
        },
        {
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            name: "Emma White",
            position: "Product Manager at SuperBrand",
            testimonial:
                "Incredible experience from start to finish. Their team really understands the needs of businesses and works to solve problems efficiently.",
        },
    ];

    return (

        <section className="bg-[url('https://i.imgur.com/6Cn0Be2.jpeg')] bg-cover bg-center bg-no-repeat py-6 mt-12">
            <section className="max-w-6xl mx-auto grid grid-cols-12 gap-6 mt-12 px-4 xl:px-0">
                {/* Swiper Slider on Left Side */}
                <div className="col-span-12 md:col-span-8 flex flex-col justify-center overflow-hidden">
                    <Swiper
                        // effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        loop={true} // Enables infinite looping
                        autoplay={{ delay: 3000, disableOnInteraction: false }} // Enables auto-scroll
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index} className="md:p-6  rounded-lg ">
                                <p className="text-lg text-gray-600 w-full md:w-8/12 ">{item.testimonial}</p>
                                <div className="flex items-center gap-4 mt-4">
                                    <img className="w-16 h-16 rounded-full" src={item.image} alt={item.name} />
                                    <div>
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p className="text-gray-500">{item.position}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Image on Right Side */}
                <div className="col-span-12 md:col-span-4">
                    <img className="h-[400px] w-full object-cover rounded-lg" src="https://i.imgur.com/Ep0WG2s.jpeg" alt="Testimonial" />
                </div>
            </section>
        </section>

    );
};

export default Testimonial;
