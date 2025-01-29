import { useContext, useEffect } from 'react';
import { TeamFlowContext } from '../ContextApi/AuthContext';
import useAxiosSecure from './useAxiosSecure';


const useGetUserByEmail = (email) => {
    const { setLoader, setCurrentUser } = useContext(TeamFlowContext);
    const axiosSecure = useAxiosSecure();  // Use the axios instance if necessary

    useEffect(() => {
        if (!email) return;  // Exit if no email is provided

        const fetchUserData = async () => {
            try {
                setLoader(true); // Start loading indicator
                
                // Use axiosSecure if you have a secure axios instance configured
                const response = await axiosSecure.get(`/register-people/${email}`);
                
                // Set the fetched user data in the context
                setCurrentUser(response.data);
            } catch (err) {
                console.log('Error fetching user data:', err); // Log the error for debugging
            } finally {
                setLoader(false); // Stop loading indicator
            }
        };

        fetchUserData();  // Call the function to fetch data
    }, [email, setLoader, setCurrentUser]);  // Dependency array, to run the effect when `email` changes

    return null;  // This custom hook doesn't need to return anything
};

export default useGetUserByEmail;
