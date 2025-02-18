import React, { useEffect, useState } from 'react'
import LineChartsComponents from '../../../components/Charts/LineChartsComponents/LineChartsComponents'
import BarChartComponents from '../../../components/Charts/BarChartComponents/BarChartComponents'
import useAxiosPublic from '../../../hooks/useAxiosPublic'

const OverviewPage = () => {
    const axiosPublic = useAxiosPublic();

    const [allTasks, setAllTasks] = useState([]);
    const [totalEmployee, setTotalEmployee] = useState(0);
    const [totalPayments, setTotalPayments] = useState(0);
    const [duePayments, setDuePayments] = useState(0);

    useEffect(() => {
        axiosPublic.get('/verified-employees')
            .then(res => {
                setTotalEmployee(res.data.length);
            })
            .catch(err => console.error("Error fetching employees:", err));
    }, []);

    useEffect(() => {
        axiosPublic.get('/all-tasks')
            .then(res => {
                setAllTasks(res.data);
            })
            .catch(err => console.error("Error fetching tasks:", err));
    }, []);

    useEffect(() => {
        axiosPublic.get('/payroll-employee')
            .then(res => {
                const payrollData = res.data;

         
                const completedPayments = payrollData.filter(emp => emp.transactionID);
                
                
                const pendingPayments = payrollData.filter(emp => !emp.transactionID);

              
                setTotalPayments(completedPayments.length);
                setDuePayments(pendingPayments.length);

               
                console.log("Total Payments:", completedPayments);
                console.log("Due Payments:", pendingPayments);
            })
            .catch(err => console.error("Error fetching payroll data:", err));
    }, []);

    return (
        <>
            <section>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4 max-w-[97%] mx-auto'>
                    <div className='bg-white text-center py-8 space-y-4'>
                        <h2 className='text-2xl font-semibold'>Total Tasks</h2>
                        <h1 className='text-4xl font-bold text-[#578FCA]'>{allTasks.length}</h1>
                    </div>
                    <div className='bg-white text-center py-8 space-y-4'>
                        <h2 className='text-2xl font-semibold'>Total Employees</h2>
                        <h1 className='text-4xl font-bold text-[#578FCA]'>{totalEmployee}</h1>
                    </div>
                    <div className='bg-white text-center py-8 space-y-4'>
                        <h2 className='text-2xl font-semibold'>Total Payments</h2>
                        <h1 className='text-4xl font-bold text-[#578FCA]'>{totalPayments}</h1>
                    </div>
                    <div className='bg-white text-center py-8 space-y-4 mr-2'>
                        <h2 className='text-2xl font-semibold'>Due Payments</h2>
                        <h1 className='text-4xl font-bold text-[#578FCA]'>{duePayments}</h1>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className='py-12'>
                    <BarChartComponents />
                </div>

                {/* Line Chart */}
                <div>
                    <LineChartsComponents />
                </div>
            </section>
        </>
    );
}

export default OverviewPage;
