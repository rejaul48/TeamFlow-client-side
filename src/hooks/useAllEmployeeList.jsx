import { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import { TeamFlowContext } from '../ContextApi/AuthContext';
 

const useAllEmployeeList = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(TeamFlowContext);

    const {
        data: allEmployee = [], 
        isLoading,
        isFetching,
        error,
        refetch,
    } = useQuery({
        queryKey: ['allEmployee', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                throw new Error("User email not available.");
            }
            const res = await axiosSecure.get(`/register-people`);
            return res.data;
        },
        enabled: !!user?.email, 
    });

    // Log errors for debugging
    if (error) {
        console.error("Error fetching tasks:", error.message);
    }

    return { allEmployee, isLoading, isFetching, error, refetch };
};
 
export default useAllEmployeeList
