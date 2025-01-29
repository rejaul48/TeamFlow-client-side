import React from 'react'
import Section_head from '../Section_head/Section_head'

const WorkingWithSection = () => {
    // const workingWithImage = ['https://imgur.com/8EXfzcX','https://imgur.com/6ytSO9f','https://imgur.com/nMpxCsp','https://imgur.com/DOzS6tV','https://imgur.com/Kj6f41x','https://imgur.com/gn2ku8h']

    const workingWithImages = [
        {
            image: 'https://i.imgur.com/8EXfzcX.png'
        },
        {
            image: 'https://i.imgur.com/6ytSO9f.png'
        },
        {
            image: 'https://i.imgur.com/nMpxCsp.png'
        },
        {
            image: 'https://i.imgur.com/DOzS6tV.png'
        },
        {
            image: 'https://i.imgur.com/Kj6f41x.png'
        },
        {
            image: 'https://i.imgur.com/gn2ku8h.png'
        }
    ]

    return (
        <>

            <section className='pt-24 pb-12 bg-[#EEEEEE] px-4 xl:px-0'>
                {/* working with section head */}
                <Section_head heading={"Working with the Bests!"} shortHeading={"Our clients consistently report high satisfaction with our services and outcomes."}></Section_head>


                <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-2 items-center pt-5 px-3 xl:px-0'>
                    {
                        workingWithImages.map((img, ind) => (
                            <div key={ind} className='flex justify-center items-center md:flex-none'>
                                <img  src={img?.image} className='w-24 md:w-28 cursor-pointer hover:scale-110 transition-transform duration-300' alt="working-with-image" />
                            </div>
                        ))
                    }
                </div>


            </section>

        </>
    )
}

export default WorkingWithSection
