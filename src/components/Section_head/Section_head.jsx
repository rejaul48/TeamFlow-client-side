import React from 'react'

const Section_head = ({heading, shortHeading}) => {
  return (
    <>
        <div className='text-center my-6'>
            <h2 className='bg-blue-500 w-fit mx-auto py-1 px-2 text-white rounded-lg italic tracking-widest'>{heading}</h2>
            <p className='md:text-lg mt-1 tracking-wide'>{shortHeading}</p>
        </div>

    </>
  )
}

export default Section_head
