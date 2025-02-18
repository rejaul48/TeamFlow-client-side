
import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TeamFlowContext } from '../../ContextApi/AuthContext';
import useGetUserByEmail from '../../hooks/useGetUserByEmail';
import Swal from 'sweetalert2';
import ThemeToogleButton from '../ThemeToogleButton/ThemeToogleButton';

const Navbar = () => {
  const { user, setUser, userLogOut, currentUser, setCurrentUser } = useContext(TeamFlowContext);
  console.log(currentUser)

  const location = useLocation()
  

  // Fetch user data based on email
  useGetUserByEmail(user?.email);
  const navigate = useNavigate()

  // Handle user logout
  const handleUserLogout = () => {
    userLogOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        setUser(null);
        setCurrentUser([]);
        // navigate to login page
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };

  // handle navbar tootle case
  const [isShowMenue, setIsShowMenue] = useState(false)

  const handleMenuClick = () => {
    setIsShowMenue(!isShowMenue)

  }

  const links = (
    <>
      <li><NavLink to="/"
        className={({ isActive }) =>
          `btn border-transparent text-sm shadow-none rounded-md ${location?.pathname === '/contact-us' ? 'text-black' : 'text-white'} ${isActive
            ? 'border-b-4 border-b-[#3674B5] bg-transparent'
            : 'bg-transparent border-b-2 border-transparent'
          } hover:border-b-2 hover:border-b-[#3674B5] hover:bg-transparent`
        }>Home</NavLink></li>
      <li><NavLink to="/about-us"
        className={({ isActive }) =>
          `btn border-transparent text-sm shadow-none rounded-md ${location?.pathname === '/contact-us' ? 'text-black' : 'text-white'} ${isActive
            ? 'border-b-4 border-b-[#3674B5] bg-transparent'
            : 'bg-transparent border-b-2 border-transparent'
          } hover:border-b-2 hover:border-b-[#3674B5] hover:bg-transparent`
        }>About Us</NavLink></li>
      <li><NavLink to="/contact-us"
        className={({ isActive }) =>
          `btn border-transparent text-sm shadow-none rounded-md ${location?.pathname === '/contact-us' ? 'text-black' : 'text-white'} ${isActive
            ? 'border-b-4 border-b-[#3674B5]   bg-transparent'
            : 'bg-transparent border-b-2 border-transparent'
          } hover:border-b-2 hover:border-b-[#3674B5] hover:bg-transparent`
        }>Contact Us</NavLink></li>
      {user && <li><NavLink to="/dashboard"
        className={({ isActive }) =>
          `btn border-transparent text-sm shadow-none rounded-md ${location?.pathname === '/contact-us' ? 'text-black' : 'text-white'} ${isActive
            ? 'border-b-4 border-b-[#3674B5]  bg-transparent'
            : 'bg-transparent border-b-2 border-transparent'
          } hover:border-b-2 hover:border-b-[#3674B5] hover:bg-transparent`
        }
      >Dashboard</NavLink></li>}
    </>
  );

  return (
    <section className={`absolute top-0 w-full  bg-[#2B354C] bg-opacity-40 text-white ${location?.pathname === '/contact-us' ? 'bg-white text-black bg-opacity-80': '' }`} >
      <div className="navbar container mx-auto md:py-3 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg onClick={handleMenuClick} xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${location?.pathname === '/contact-us' ? 'text-black': ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content text-black bg-[#578FCA] rounded-box z-[1] mt-3 w-52 p-2 shadow 
              ${isShowMenue ? 'block' : 'hidden'}
              `}>
              {links}
            </ul>
          </div>
          <Link to={'/'} className={`text-2xl md:text-3xl font-bold ${location?.pathname === '/contact-us' ? 'text-black' : 'text-white'}`}>TeamFlow</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4 ">
          {/* theme toggle button */}
            <div>
                <ThemeToogleButton ></ThemeToogleButton>
            </div>

          {!user && <Link to="/login" className="btn bg-[#578FCA] border-none rounded-sm text-black hover:bg-[#578FCA]">Login</Link>}
          <div className="dropdown dropdown-end">
           
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user image"
                  src={
                    currentUser ? currentUser?.photo : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  }
                />
              </div>
            </div>
            <ul tabIndex={0} className="absolute top-10 z-30 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-black">
              {user?.email ? <li><Link className='bg-white' onClick={handleUserLogout}>Logout</Link></li> : <Link to="/login" className="btn bg-white">Login</Link>}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;


