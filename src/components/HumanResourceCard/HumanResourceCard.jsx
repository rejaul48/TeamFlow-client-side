import React from 'react'

import { CountUp } from 'use-count-up'

const HumanResourceCard = ({ successPer, successName, successDescription }) => {
    return (
        <>

            <div className='p-2 border-b-[1px] pb-6 mt-4 md:mt-0'>

                <h2 className='text-4xl md:text-6xl font-bold'>
                     <CountUp isCounting={true} end={successPer} duration={2.2}  />%
                </h2>
                <h3 className='text-xl my-2 font-bold'>{successName}</h3>
                <p className='text-[16px] md:text-lg w-10/12'>
                    {successDescription}
                </p>
            </div>

        </>
    )
}

export default HumanResourceCard
