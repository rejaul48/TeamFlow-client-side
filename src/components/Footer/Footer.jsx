import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <section className=' bg-[#3674B5]'>
                <footer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 mt-16 container mx-auto space-y-8">
                    <aside className='text-white'>
                        <h2 className='text-4xl md:font-bold pb-3'>TemFlow</h2>
                        <p className='md:w-9/12 mt-2 border-l-[8px] border-blue-500 pl-5'>Manage Better, Work Smarter, Achieve More Together</p>
                    </aside>
                    <nav className='flex flex-col space-y-2 text-white'>
                        <h6 className="footer-title">Services</h6>
                        <Link className="link link-hover border-b-[1px] border-gray-400 border-dotted w-fit">Branding</Link>
                        <Link className="link link-hover border-b-[1px] border-gray-400 border-dotted w-fit">Design</Link>
                        <Link className="link link-hover border-b-[1px] border-gray-400 border-dotted w-fit">Marketing</Link>
                        <Link className="link link-hover border-b-[1px] border-gray-400 border-dotted w-fit">Advertisement</Link>
                      
                    </nav>
                    <nav className='flex flex-col space-y-2 text-white'>
                        <h6 className="footer-title">Categories</h6>

                        <Link className="link link-hover border-b-[1px] border-gray-400 border-dotted w-fit">Employee Development</Link>
                        <Link className="link link-hover border-b-[1px] border-gray-400 border-dotted w-fit">Legal and Compliance</Link>
                        <Link className="link link-hover border-b-[1px] border-gray-400 border-dotted w-fit">Recruitment and Onboarding</Link>
                        <Link className="link link-hover border-b-[1px] border-gray-400 border-dotted w-fit">Workplace Culture</Link>
                        <Link className="link link-hover border-b-[1px] border-gray-400 border-dotted w-fit">Strategies and Trends</Link>
                      
                    </nav>
                    <nav className='md:mt-8 leading-7 tracking-wide text-white'>
                      <p>With a commitment to excellence and a proven track record of success, we empower businesses to thrive by connecting them with exceptional talent and optimizing their human resources.</p>
                    </nav>

                </footer>
                <aside className='text-center text-white'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Rejaul Islam</p>
                </aside>
            </section>




        </>
    )
}

export default Footer
