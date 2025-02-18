import React from 'react'

const Section_head = ({ heading, shortHeading }) => {
  return (
    <>


      <section className='my-12 px-4 xl:px-0'>

        {/* section head */}
        <div className='text-center my-6'>
          <h2 className='bg-blue-500 w-fit mx-auto py-1 px-2 text-white rounded-lg italic tracking-widest'>{heading}</h2>
          <p className='md:text-lg mt-1 tracking-wide md:w-6/12 mx-auto'>{shortHeading}</p>
        </div>

      

      </section>

    </>
  )
}

export default Section_head
