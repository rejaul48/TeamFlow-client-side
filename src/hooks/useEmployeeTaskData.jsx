import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import { TeamFlowContext } from '../ContextApi/AuthContext';

const useEmployeeTaskData = () => {
    const axiosSecure = useAxiosSecure();
    const { user,currentUser } = useContext(TeamFlowContext);
    console.log(currentUser)

    const {
        data: tasks = [], 
        isLoading,
        isFetching,
        error,
        refetch,
    } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                throw new Error("User email not available.");
            }
            const res = await axiosSecure.get(`/all-tasks/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email, // Prevent query execution if user email is not available
    });

    // Log errors for debugging
    if (error) {
        console.error("Error fetching tasks:", error.message);
    }

    return { tasks, isLoading, isFetching, error, refetch };
};

export default useEmployeeTaskData;
