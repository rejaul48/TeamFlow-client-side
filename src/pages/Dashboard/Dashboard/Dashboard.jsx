import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { TeamFlowContext } from '../../../ContextApi/AuthContext';
import useGetUserByEmail from '../../../hooks/useGetUserByEmail';
import { Helmet } from 'react-helmet';
import Loader from '../../../components/Loader/Loader';
import ThemeToogleButton from '../../../components/ThemeToogleButton/ThemeToogleButton';
import Swal from 'sweetalert2';

const Dashboard = () => {
    const { user, currentUser, userLogOut, setCurrentUser, setUser,theme } = useContext(TeamFlowContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


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

    useGetUserByEmail(user?.email);

    useEffect(() => {
        if (currentUser && currentUser?.role) {
            setLoading(false);
            const role = currentUser?.role.toLowerCase();
            const currentPath = window.location.pathname;

            if (role === 'employee' && currentPath === '/dashboard') {
                navigate('/dashboard/overview');
            } else if (role === 'hr' && currentPath === '/dashboard') {
                navigate('/dashboard/overview');
            } else if (role === 'admin' && currentPath === '/dashboard') {
                navigate('/dashboard/overview');
            }
        }
    }, [currentUser, navigate]);

    if (loading) {
        return <Loader />;
    }

    const role = currentUser?.role || "Unknown User";
    const normalizedRole = role.toLowerCase();

    const userRoleLinks = (
        <>
            <li>
                <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                        `p-2 block rounded transition duration-200 w-fit ${isActive ? "bg-[#A1E3F9] text-black font-bold" : "text-white hover:bg-[#A1E3F9] hover:text-black"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/dashboard/overview'}
                    className={({ isActive }) =>
                        `p-2 block rounded transition duration-200 w-fit ${isActive ? "bg-[#A1E3F9] text-black font-bold" : "text-white hover:bg-[#A1E3F9] hover:text-black"
                        }`
                    }
                >
                    OverView
                </NavLink>
            </li>
            
            {normalizedRole === 'employee' && (
                <>
                    <li>
                        <NavLink
                            to={'/dashboard/work-sheet'}
                            className={({ isActive }) =>
                                `p-2 block rounded transition duration-200 w-fit ${isActive ? "bg-[#A1E3F9] text-black font-bold" : "text-white hover:bg-[#A1E3F9] hover:text-black"
                                }`
                            }
                        >
                            WorkSheet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/payment-history'}
                            className={({ isActive }) =>
                                `p-2 block rounded transition duration-200 w-fit ${isActive ? "bg-[#A1E3F9] text-black font-bold" : "text-white hover:bg-[#A1E3F9] hover:text-black"
                                }`
                            }
                        >
                            Payment History
                        </NavLink>
                    </li>
                </>
            )}
            {normalizedRole === 'hr' && (
                <>
                    <li>
                        <NavLink
                            to={'/dashboard/employee-list'}
                            className={({ isActive }) =>
                                `p-2 block rounded transition duration-200 w-fit ${isActive ? "bg-[#A1E3F9] text-black font-bold" : "text-white hover:bg-[#A1E3F9] hover:text-black"
                                }`
                            }
                        >
                            Employee List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/progress'}
                            className={({ isActive }) =>
                                `p-2 block rounded transition duration-200 w-fit ${isActive ? "bg-[#A1E3F9] text-black font-bold" : "text-white hover:bg-[#A1E3F9] hover:text-black"
                                }`
                            }
                        >
                            Progress
                        </NavLink>
                    </li>
                </>
            )}
            {normalizedRole === 'admin' && (
                <>
                    <li>
                        <NavLink
                            to={'/dashboard/all-employee-list'}
                            className={({ isActive }) =>
                                `p-2 block rounded transition duration-200 w-fit ${isActive ? "bg-[#A1E3F9] text-black font-bold" : "text-white hover:bg-[#A1E3F9] hover:text-black"
                                }`
                            }
                        >
                            All Employee List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/payroll'}
                            className={({ isActive }) =>
                                `p-2 block rounded transition duration-200 w-fit ${isActive ? "bg-[#A1E3F9] text-black font-bold" : "text-white hover:bg-[#A1E3F9] hover:text-black"
                                }`
                            }
                        >
                            Payroll
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <>
            <Helmet>
                <title>TemFlow | Dashboard Page</title>
            </Helmet>

            <div>
                <main>
                    <section className='md:flex w-full h-screen'>
                        {/* Menu Section */}
                        <div className='bg-[#3674B5] md:min-h-screen md:w-3/12 lg:w-2/12'>
                            <ul className="menu rounded-box md:w-56  text-white">{userRoleLinks}</ul>
                        </div>

                        {/* Outlet Section */}
                        <div className={`w-full md:overflow-y-auto pb-12 h-fit md:h-full  ${theme === 'dark' ? 'bg-[#D1F8EF] bg-opacity-30': 'bg-[#D1F8EF]' }`}>
                            <section className='px-4'>
                                <div className='flex justify-between items-center py-2 '>
                                    <div className='dropdown dropdown-end space-y-2 '>
                                        <h3 className='text-xl uppercase'>Welcome,</h3>
                                        <h2 className='text-xl md:text-3xl uppercase font-semibold'>{currentUser?.name}</h2>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <ThemeToogleButton />
                                        <button onClick={handleUserLogout} className='btn px-6 py-3 bg-[#578FCA] rounded-sm'>LogOut</button>
                                        <Link to={'/dashboard/profile'}>
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
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            <Outlet />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
