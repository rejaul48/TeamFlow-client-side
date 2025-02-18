import React from 'react'
import { Link } from 'react-router-dom'

const WhatWeServe = () => {
    return (
        <>

            <section className='mt-16 mx-4 xl:mx-0'>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 ">

                    {/* left side */}
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex flex-col items-center justify-center space-y-2 border-[1px] rounded-md p-3'>
                            <img className='w-20' src="https://i.imgur.com/ieVdsTa.png" alt="developing image" />
                            <h2 className='text-xl  font-bold text-center'>DEVELOP & TRAINING</h2>
                        </div>

                      
                            <div className='flex flex-col items-center justify-center space-y-2 border-[1px] rounded-md bg-[#D1F8EF] p-3'>
                                <img className='w-20' src="https://i.imgur.com/vXberic.png" alt="developing image" />
                                <h2 className='text-xl font-bold text-center'>JOBS PLACEMENT</h2>
                            </div>
                      

                        <div className='flex flex-col items-center justify-center space-y-2 border-[1px] rounded-md bg-[#D1F8EF] p-3'>
                            <img className='w-20' src="https://i.imgur.com/Mt6tCWG.png" alt="developing image" />
                            <h2 className='text-xl font-bold text-center'>TEST & INTERVIEW</h2>
                        </div>

                        <div className='flex flex-col items-center justify-center space-y-2 border-[1px] rounded-md  p-3'>
                            <img className='w-20' src="https://i.imgur.com/YhUkESt.png" alt="developing image" />
                            <h2 className='text-xl font-bold text-center'>JOBS COUNSELING</h2>
                        </div>
                    </div>
                    {/* rihgt side */}
                    <div>
                        <p className='text-lg font-semibold text-[#3674B5]'>What We Serve</p>
                        <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold py-5'>The Recruitment solution for you​</h2>
                        <p className='text-sm tracking-wide text-gray-500'>At TeamFlow we provide a comprehensive suite of solutions to simplify and enhance workforce management. Our Employee & HR Management System is designed to optimize HR operations, improve efficiency, and empower organizations. We offer automated payroll processing, attendance tracking, performance management, employee self-service portals, and compliance tools to streamline your HR workflow.</p>

                        <div className='mt-6'>
                            <Link className='px-12 bg-blue-500 py-4 text-white hover:rounded-md'>Find Job Now</Link>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default WhatWeServe
