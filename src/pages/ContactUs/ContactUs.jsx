import React, { useContext, useRef } from 'react'

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


const ContactUs = () => {


    const form = useRef();

    // send mail to me

    const sendEmail = (e) => {
        e.preventDefault();

        // need to hide email js credential using .env file
        emailjs
            .sendForm('service_8p04wg2', 'template_wz54rff', form.current, {
                publicKey: 'ezMM8EA7HMYCpweLx',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Message send to Admin",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    Swal.fire({
                        position: "top-center",
                        icon: "error",
                        title: "Something went wrong!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
            );
    };


    return (
        <>

            <Helmet >
                <title>TemFlow | Contact Us Page</title>
            </Helmet>


            <section className=' p-4 md:p-12 pt-24 md:pt-24'>

                <div className='container mx-auto'>

                    <div className='md:flex md:gap-6 justify-between bg-[#3674B5] bg-opacity-80 text-white p-6 md:p-12 rounded-xl'>

                        <div className="contact_path ">
                            <p className="text-white">
                                <span>Address</span> <br />
                                1234 Demo Street, Suite 567<br />
                                Innovation City, Techland 78901
                            </p>
                            <p className='uppercase text-sm font-light mt-2'>write an email</p>
                            <h3 className='text-lg font-semibold mb-3'>temflow.admin@gmail.com</h3>
                            <p className='uppercase text-sm font-light'>call us</p>
                            <h3 className='text-lg font-bold '>015********</h3>

                        </div>

                        <div className="contact_from mt-8 md:mt-0">

                            <div>
                                <h2 className='lg:text-4xl font-bold'>Let's Discuss Your Project</h2>
                                <p className='text-sm md:w-8/12 my-3'>Always aviable for freelancing if the right project comes along, Feel free to contact me.</p>
                            </div>

                            {/* contact from */}


                            <div className='mt-12 '>
                                <form ref={form} onSubmit={sendEmail}>
                                    {/* name and email */}
                                    <div className='md:flex items-center gap-4'>

                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text uppercase text-white">Your Full Name*</span>
                                            </div>
                                            <input required
                                                name='name' type="text" className="input input-bordered w-full bg-blue-100 bg-opacity-25   border-[1px] border-green-50" />

                                        </label>

                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text uppercase text-white">Your Email*</span>
                                            </div>
                                            <input
                                                required
                                                name='email' type="email" className="input input-bordered w-full  bg-blue-100 bg-opacity-25   border-[1px] border-green-50" />

                                        </label>
                                    </div>
                                    {/* subjuect */}
                                    <div>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text uppercase text-white">subject*</span>
                                            </div>
                                            <input required
                                                name='subject' type="text" className="input input-bordered w-full  bg-blue-100 bg-opacity-25   border-[1px] border-green-50" />

                                        </label>

                                        {/* project description with some message */}
                                        <div>
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span className="label-text text-white">Description*</span>
                                                </div>
                                                {/* Text Area */}
                                                <textarea required
                                                    placeholder="your message"
                                                    name='description'
                                                    className="textarea textarea-bordered w-full mt-2 bg-blue-100 bg-opacity-25   border-[1px] border-green-50"
                                                    rows="4"
                                                ></textarea>
                                            </label>
                                        </div>

                                        {/* submite button */}
                                        <div>

                                            <button type='submit' className='mt-5 gap-4 text-lg font-semibold uppercase 
                                             bg-[#3674B5] py-3 w-full rounded-full
                                                 text-white hover:delay-100
                                             hover:bg-black hover:bg-opacity-60  
                                             transition-colors duration-200 
                                             '>send message</button>

                                        </div>

                                    </div>
                                </form>
                            </div>


                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default ContactUs
