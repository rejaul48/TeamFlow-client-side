import React from 'react'
import Banner from '../../components/Banner/Banner'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import Testimonial from '../../components/Testimonial/Testimonial'
import HumanResource from '../../components/HumanResource/HumanResource'
import WorkingWithSection from '../../components/WorkingWithSection/WorkingWithSection'
import { Helmet } from 'react-helmet'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import HelpUsSolution from '../../components/HelpUsSolution/HelpUsSolution'
import WhatWeServe from '../../components/WhatWeServe/WhatWeServe'
import JobSearch from '../../components/JobSearch/JobSearch'

const Home = () => {
  return (
    <>

      <Helmet >
        <title>TemFlow | Home Page</title>
      </Helmet>

      <main>

        <Banner ></Banner>

        <ServiceSection ></ServiceSection>

        <WhyChooseUs ></WhyChooseUs>

        <HumanResource ></HumanResource>

        <WhatWeServe ></WhatWeServe>

        <HelpUsSolution ></HelpUsSolution>

        <JobSearch ></JobSearch>

        <Testimonial ></Testimonial>


        <WorkingWithSection ></WorkingWithSection>


      </main>
    </>
  )
}

export default Home
