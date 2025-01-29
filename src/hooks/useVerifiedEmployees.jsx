import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import { TeamFlowContext } from '../ContextApi/AuthContext';

const useVerifiedEmployees = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(TeamFlowContext);

    const {
        data: verifiedEmployee = [], // Default to an empty array if no tasks are fetched
        isLoading,
        isFetching,
        error,
        refetch,
    } = useQuery({
        queryKey: ['verifiedUsers', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                throw new Error("employee email not available.");
            }
            const res = await axiosSecure.get(`/verified-employees`);
            return res.data;
        },
        enabled: !!user?.email, 
    });

    // Log errors for debugging
    if (error) {
        console.error("Error fetching verified employees:", error.message);
    }

    return { verifiedEmployee , isLoading, isFetching, error, refetch };
};



export default useVerifiedEmployees
