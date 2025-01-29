import { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import { TeamFlowContext } from '../ContextApi/AuthContext';

const useGetPayrollEmployees = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(TeamFlowContext);

    const {
        data: payrollEmployee = [], 
        isLoading,
        isFetching,
        error,
        refetch,
    } = useQuery({
        queryKey: ['payrollEmployee', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                throw new Error("User email not available.");
            }
            const response = await axiosSecure.get(`/payroll-employee`);
            return response.data;
        },
        enabled: !!user?.email, // Only run query if user email exists
    });

    if (error) {
        console.error("Error fetching payroll employees:", error.message);
    }

    return { payrollEmployee, isLoading, isFetching, error, refetch };
};

export default useGetPayrollEmployees;
