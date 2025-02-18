import React from 'react'
import { Link } from 'react-router-dom'

const HelpUsSolution = () => {
    return (
        <>

            <section className="relative h-[400px] mt-12 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://i.imgur.com/r17vKwl.jpeg')" }}>
                <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for readability */}

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h2 className="text-2xl md:text-4xl md:w-8/12 lg:w-full font-bold px-4 xl:px-0">We continue to help people find their passion and job</h2>
                    <div className="mt-10">
                        <Link className="px-12 py-4 bg-blue-500 text-white hover:rounded-md">Find Job Now</Link>
                    </div>
                </div>
            </section>


        </>
    )
}

export default HelpUsSolution
