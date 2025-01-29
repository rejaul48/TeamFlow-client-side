import React from 'react'
import Banner from '../../components/Banner/Banner'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import Testimonial from '../../components/Testimonial/Testimonial'
import HumanResource from '../../components/HumanResource/HumanResource'
import WorkingWithSection from '../../components/WorkingWithSection/WorkingWithSection'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>

      <Helmet >
        <title>TemFlow | Home Page</title>
      </Helmet>

      <main>

        <Banner ></Banner>

        <ServiceSection ></ServiceSection>

        <Testimonial ></Testimonial>

        <HumanResource ></HumanResource>

        <WorkingWithSection ></WorkingWithSection>

      </main>
    </>
  )
}

export default Home
