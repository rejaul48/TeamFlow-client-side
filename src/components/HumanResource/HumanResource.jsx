import React from 'react'
import HumanResourceCard from '../HumanResourceCard/HumanResourceCard'

const HumanResource = () => {
    return (
        <>

            <section className='mt-24 '>
                {/* human resource section head */}
                <div className='container mx-auto md:flex md:items-center md:gap-5 pb-8 px-4 xl:px-0'>
                    <div className='md:w-6/12'>
                        <h2 className='tracking-widest border-b-2 w-fit pb-1 md:text-lg uppercase'>end-to-end recruitment</h2>
                        <h2 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 font-bold'>We are dedicated to delivering the highest standards of service</h2>
                    </div>
                    <div className='md:w-6/12 mt-8 md:mt-0'>
                        <p className='md:text-[18px] lg:text-lg leading-7'> We specialize in identifying and recruiting top talent that aligns with your company's culture and objectives. From entry-level positions to executive roles, our extensive network and expert recruiters ensure the perfect fit for every role. We are achieving exceptional results for our clients.</p>
                    </div>
                </div>

                {/* human resource */}

                <div>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://i.imgur.com/QVyIpFy.jpeg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content container mx-auto py-24">
                            <div className="w-full  lg:flex lg:items-center lg:gap-12">
                                <div className='lg:w-5/12'>
                                    <p className='text-xl md:text-3xl lg:text-lg tracking-widest border-b-[1px] w-fit pb-1'>strategy that aligns with your goals</p>
                                    <h2 className='mt-7 text-3xl md:text-5xl font-semibold border-l-[5px] pl-6'>Our Human Resources Agency in Stats</h2>
                                </div>

                                {/* success card */}
                                <div className='lg:w-7/12 md:grid md:grid-cols-2 md:gap-12 md:mt-12 lg:mt-0'>
                                    <HumanResourceCard
                                        successPer={90}
                                        successName={"Client Satisfaction Rat"}
                                        successDescription={"Our clients consistently report high satisfaction with our services and outcomes."}
                                    ></HumanResourceCard>

                                    <HumanResourceCard
                                        successPer={85}
                                        successName={"Reduction in Time-to-Hire"}
                                        successDescription={"Our streamlined recruitment processes significantly decrease the time it takes to fill positions."}
                                    ></HumanResourceCard>

                                    <HumanResourceCard
                                        successPer={70}
                                        successName={"Increase in Employee Retention"}
                                        successDescription={"HR solutions help businesses retain top talent and reduce turnover rates."}
                                    ></HumanResourceCard>

                                    <HumanResourceCard
                                        successPer={94}
                                        successName={"Compliance Rate"}
                                        successDescription={"We help businesses achieve and maintain high compliance with labor laws and regulations."}
                                    ></HumanResourceCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default HumanResource
 