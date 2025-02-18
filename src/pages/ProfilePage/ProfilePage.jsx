import React, { useContext, useState } from 'react';
import { TeamFlowContext } from '../../ContextApi/AuthContext';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ProfilePage = () => {
    const { currentUser } = useContext(TeamFlowContext);
    const [date, setDate] = useState(new Date());

    return (
        <>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:max-w-[98%]'>
                    {/* Left Side: Profile Info */}
                    <div className='flex items-center gap-6 bg-white md:col-span-8 py-4 px-6 rounded-lg shadow-md'>
                        {/* User Image */}
                        <div>
                            <img className='w-52 h-52 rounded-full' src={currentUser?.photo} alt="Profile" />
                        </div>
                        {/* User Details */}
                        <div className='text-black space-y-2'>
                            <h2 className='text-xl md:text-2xl font-bold'>
                                {currentUser?.name || "Rejaul Islam"} 
                               
                            </h2>
                            <p> <span className='text-lg bg-[#A1E3F9] px-3 py-1 rounded-lg mt-4 uppercase'>{currentUser?.role}</span></p>
                            <p className='text-lg'>Email: {currentUser?.email}</p>
                            <p className='text-lg'>Salary: {currentUser?.salary} tk</p>
                        </div>
                    </div>

                    {/* Right Side: Calendar */}
                    <div className='md:col-span-4 bg-white p-4 rounded-lg shadow-md'>
                        <h3 className="text-xl font-semibold mb-3">Todays a Date</h3>
                        <Calendar onChange={setDate} value={date} />
                        <p className='text-lg mt-2'>Todays Date: <strong>{date.toDateString()}</strong></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfilePage;
