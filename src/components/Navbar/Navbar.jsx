
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { TeamFlowContext } from '../../ContextApi/AuthContext';
import useGetUserByEmail from '../../hooks/useGetUserByEmail';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, setUser, userLogOut, currentUser, setCurrentUser } = useContext(TeamFlowContext);
  console.log(currentUser)

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
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
    </>
  );

  return (
    <section className='absolute top-0 w-full  bg-[#2B354C] bg-opacity-40 text-white' >
      <div className="navbar max-w-6xl mx-auto md:py-3 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg onClick={handleMenuClick} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow 
              ${isShowMenue ? 'block' : 'hidden'}
              `}>
              {links}
            </ul>
          </div>
          <a className="text-2xl md:text-3xl font-bold">TeamFlow</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
 
          {!user && <Link to="/login" className="btn">Login</Link>}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user image"
                  src={
                   currentUser? currentUser?.photo : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  }
                />
              </div>
            </div>
            <ul tabIndex={0} className="absolute top-10 z-30 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-black">
              {user?.email ? <li><Link onClick={handleUserLogout}>Logout</Link></li> : <Link to="/login" className="btn">Login</Link>}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;


