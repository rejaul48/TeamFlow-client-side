

import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { TeamFlowContext } from '../../../ContextApi/AuthContext';
import useGetUserByEmail from '../../../hooks/useGetUserByEmail';
import { Helmet } from 'react-helmet';
import Loader from '../../../components/Loader/Loader';

const Dashboard = () => {
    const { user, currentUser } = useContext(TeamFlowContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useGetUserByEmail(user?.email);

    useEffect(() => {
        if (currentUser && currentUser?.role) {
            setLoading(false);

            const role = currentUser?.role.toLowerCase();
            // Get the current path
            const currentPath = window.location.pathname;

            if (role === 'employee' && currentPath === '/dashboard') {
                navigate('/dashboard/work-sheet');
            } else if (role === 'hr' && currentPath === '/dashboard') {
                navigate('/dashboard/employee-list');
            } else if (role === 'admin' && currentPath === '/dashboard') {
                navigate('/dashboard/all-employee-list');
            }
        }
    }, [currentUser, navigate]);

    if (loading) {
        return <div>
            <Loader ></Loader>
        </div>; // Add a loader or fallback UI while fetching user data
    }

    const role = currentUser?.role || "Unknown User";
    const normalizedRole = role.toLowerCase();

    const userRoleLinks = (
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            {normalizedRole === 'employee' && (
                <>
                    <li className='w-fit'><NavLink to={'/dashboard/work-sheet'}>WorkSheet</NavLink></li>
                    <li className='w-fit'><NavLink to={'/dashboard/payment-history'}>Payment History</NavLink></li>
                </>
            )}
            {normalizedRole === 'hr' && (
                <>
                    <li className='w-fit'><NavLink to={'/dashboard/employee-list'}>Employee List</NavLink></li>
                    <li className='w-fit'><NavLink to={'/dashboard/progress'}>Progress</NavLink></li>
                </>
            )}
            {normalizedRole === 'admin' && (
                <>
                    <li className='w-fit'><NavLink to={'/dashboard/all-employee-list'}>All Employee List</NavLink></li>
                    <li className='w-fit'><NavLink to={'/dashboard/payroll'}>Payroll</NavLink></li>
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
                <main className='2xl:container mx-auto'>
                    <section className='md:flex gap-3 w-full h-screen'>
                        {/* Menu Section */}
                        <div className='bg-base-200 md:min-h-screen md:w-3/12 lg:w-2/12'>
                            <ul className="menu rounded-box w-56">{userRoleLinks}</ul>
                        </div>

                        {/* Outlet Section */}
                        <div className='md:w-9/12 lg:w-10/12 md:overflow-y-auto md:h-full '>
                            <Outlet />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Dashboard;


