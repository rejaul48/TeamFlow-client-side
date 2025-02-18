import React from 'react'
import { Link } from 'react-router-dom'

const WhyChooseUs = () => {
    return (
        <>

            <section className='mt-24 mx-4 xl:mx-0'>

                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* left side */}
                    <div className='relative flex items-center justify-center'>
                        <div className='mt-4'>
                            <img src="https://i.imgur.com/MJpwSQn.png" alt="why-choose-us-image" />
                        </div>

                        <div className='absolute top-12 lg:top-32 xl:top-20 left-6 w-11/12 mx-auto'>
                            <img src="https://i.imgur.com/QjHBVEH.jpeg" alt="why-choose-us-image" />
                        </div>
                    </div>

                    {/* right side */}
                    <div>
                        <p className='text-lg font-semibold text-[#3674B5]'>Why Choose Us</p>
                        <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold py-5'>HELP COMPANY AND EMPLOYEE TO GROW</h2>
                        <p className='text-sm tracking-wide text-gray-500'>At TeamFlow we provide a comprehensive and user-friendly Employee & HR Management System designed to simplify workforce management and enhance efficiency. Our platform offers seamless automation for payroll, attendance tracking, performance evaluations, and employee records, reducing manual workload and boosting productivity. <br/> <br />  With robust security measures, we ensure data protection and compliance with labor regulations. Whether you're a small business or a large enterprise, our scalable and customizable solution adapts to your needs. Backed by 24/7 support and regular updates, we empower organizations to streamline HR processes and focus on what matters most—growing their business.</p>

                        <div className='mt-6'>
                            <Link className='px-12 bg-blue-500 py-4 text-white hover:rounded-md'>Find Job Now</Link>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default WhyChooseUs
