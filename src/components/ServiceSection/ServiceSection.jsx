import React from 'react'
import Section_head from '../Section_head/Section_head'
import ServiceCard from '../ServiceCard/ServiceCard'
import { MdDesignServices } from 'react-icons/md'
import { MdOutlineAppShortcut } from "react-icons/md";
import { IoIosCloud } from "react-icons/io";
import { SiCyberdefenders } from "react-icons/si";
import { SiTorbrowser } from "react-icons/si";
import { SiAlwaysdata } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { SiInductiveautomation } from "react-icons/si";




const ServiceSection = () => {

    const textWhite = "#ffffff"
    const bgColor = "#16A34A"
    const bgColor2 = "#FFF5EA"
    const colorDark = "#000000"

    return (
        <>

            <section className='mt-12 md:mt-24'>
                {/* section head */}
                <div>
                    <Section_head heading={"Our Services"} shortHeading={"Find your services from us"}></Section_head>
                </div>

                <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 
                px-4 xl:px-0
                '>
                    <ServiceCard
                        Icon={MdDesignServices}
                        textColor={textWhite}
                        bgColor={bgColor}
                        serviceName={'Custom Software Development'}
                        serviceDescription={'Build tailored software solutions to meet specific business needs. Services include web applications, desktop software, and custom tools.'}
                    >

                    </ServiceCard>

                    <ServiceCard
                        Icon={MdOutlineAppShortcut}
                        textColor={colorDark}
                        bgColor={bgColor2}
                        serviceName={'Mobile App Development'}
                        serviceDescription={'Develop user-friendly mobile apps for iOS and Android platforms, ensuring seamless performance and intuitive interfaces.'}
                    ></ServiceCard>

                    <ServiceCard
                        Icon={IoIosCloud}
                        textColor={textWhite}
                        bgColor={bgColor}
                        serviceName={'Cloud Computing Solutions'}
                        serviceDescription={'Provide cloud infrastructure setup, migration, and management services, enabling businesses to operate efficiently and scale easily.'}
                    ></ServiceCard>

                    <ServiceCard
                        Icon={SiCyberdefenders}
                        textColor={colorDark}
                        bgColor={bgColor2}
                        serviceName={'Cybersecurity Services'}
                        serviceDescription={'Offer network security, vulnerability assessment, and real-time monitoring to protect your company against digital threats.'}
                    ></ServiceCard>

                    <ServiceCard
                        Icon={SiTorbrowser}
                        textColor={textWhite}
                        bgColor={bgColor}
                        serviceName={'Web Development'}
                        serviceDescription={'Design and develop responsive and scalable websites with modern frameworks to enhance your online presence.'}
                    ></ServiceCard>

                    <ServiceCard
                        Icon={SiAlwaysdata  }
                        textColor={colorDark}
                        bgColor={bgColor2}
                        serviceName={'Data Analytics and Business Intelligence'}
                        serviceDescription={'Deliver data analysis, visualization, and reporting solutions to help businesses make data-driven decisions.'}
                    ></ServiceCard>

                    <ServiceCard
                        Icon={GiArtificialIntelligence}
                        textColor={textWhite}
                        bgColor={bgColor}
                        serviceName={'Artificial Intelligence'}
                        serviceDescription={'Implement AI-powered tools, predictive analytics, and machine learning models to automate processes and improve efficiency.'}
                    ></ServiceCard>

                    <ServiceCard
                        Icon={MdSupportAgent}
                        textColor={colorDark}
                        bgColor={bgColor2}
                        serviceName={'IT Support and Maintenance'}
                        serviceDescription={'Provide 24/7 IT support, system maintenance, and troubleshooting to ensure smooth business operations.'}
                    ></ServiceCard>

                    <ServiceCard
                        Icon={SiInductiveautomation}
                        textColor={textWhite}
                        bgColor={bgColor}
                        serviceName={'DevOps and Automation'}
                        serviceDescription={'Implement CI/CD pipelines, cloud automation, and infrastructure as code (IaC) to streamline development and deployment processes.'}
                    ></ServiceCard>

                </div>

            </section>

        </>
    )
}

export default ServiceSection
