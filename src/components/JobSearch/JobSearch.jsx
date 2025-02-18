import React from 'react'
import Section_head from '../Section_head/Section_head'

const JobSearch = () => {
    return (
        <>

            <Section_head heading={"What We Serve"} shortHeading={"We streamline HR management with automation, real-time analytics, compliance, and a user-friendly interface."}></Section_head>

            {/* section content */}

            <div className='container mx-auto px-4 xl:px-0'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {/* left side with image */}
                    <div className='h-[340px] md:h-full w-full'>

                        <img className='w-full h-full ' src="https://i.imgur.com/DTc9GnM.jpeg" alt="job-search-image" />

                    </div>
                    {/* right side with content */}
                    <div className='space-y-12 flex flex-col justify-center'>

                        <div className='grid grid-cols-12 gap-6 '>
                            {/* left side */}
                            <div className='col-span-3 flex flex-col justify-end items-end relative'>
                                <img className='w-24 mt-6' src="https://i.imgur.com/ZOp3qKh.png" alt="apply-job-image" />
                                <div className='absolute top-0 left-0'>
                                    <h2 className='w-16 h-16  bg-[#D1F8EF] flex justify-center items-center text-2xl font-bold text-[#3674B5] rounded-full'>01</h2>
                                </div>
                            </div>
                            {/* right side */}
                            <div className='col-span-9 flex flex-col justify-center'>
                                <h2 className='text-xl md:text-2xl font-bold mb-1'>APPLY YOUR JOBS</h2>
                                <p className='text-gray-500 lg:w-9/12'>Submit applications seamlessly and take the next step toward your dream job</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-6 '>
                            {/* left side */}
                            <div className='col-span-3 flex flex-col justify-end items-end relative'>
                                <img className='w-24 mt-6' src="https://i.imgur.com/Hiuk8gW.png" alt="apply-job-image" />
                                <div className='absolute top-0 left-0'>
                                    <h2 className='w-16 h-16  bg-[#D1F8EF] flex justify-center items-center text-2xl font-bold text-[#3674B5] rounded-full'>02</h2>
                                </div>
                            </div>
                            {/* right side */}
                            <div className='col-span-9 flex flex-col justify-center'>
                                <h2 className='text-xl md:text-2xl font-bold mb-1'>FIND YOUR JOBS</h2>
                                <p className='text-gray-500 lg:w-9/12'>Discover opportunities and connect with employers to start your caree</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-6 '>
                            {/* left side */}
                            <div className='col-span-3 flex flex-col justify-end items-end relative'>
                                <img className='w-24 mt-6' src="https://i.imgur.com/tJmwhld.png" alt="apply-job-image" />
                                <div className='absolute top-0 left-0'>
                                    <h2 className='w-16 h-16  bg-[#D1F8EF] flex justify-center items-center text-2xl font-bold text-[#3674B5] rounded-full'>03</h2>
                                </div>
                            </div>
                            {/* right side */}
                            <div className='col-span-9 flex flex-col justify-center'>
                                <h2 className='text-xl md:text-2xl font-bold mb-1'>TEST & INTERVIEW</h2>
                                <p className='text-gray-500 lg:w-9/12'>Communicate with recruiters, showcase skills, and secure job offers efficiently.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default JobSearch
