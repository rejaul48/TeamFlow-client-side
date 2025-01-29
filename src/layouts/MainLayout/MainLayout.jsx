import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const MainLayout = () => {
  return (
    <>

      <div className='sticky top-0 z-30  w-full '>
        <Navbar ></Navbar>
      </div>

      <Outlet ></Outlet>
      <Footer ></Footer>
    </>
  )
}

export default MainLayout
