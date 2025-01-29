
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { TeamFlowContext } from '../../ContextApi/AuthContext';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const GoogleLogin = () => {
    const { setUser, loginWithGoole, userLogOut } = useContext(TeamFlowContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleLoginWithGoogle = async () => {
        try {
            // Perform Google login and retrieve user info
            const res = await loginWithGoole();
            const email = res?.user?.email;

            if (!email) {
                Swal.fire({
                    position: "top-center",
                    icon: "info",
                    title: "Unable to retrieve email from Google login.",
                    showConfirmButton: false,
                    timer: 1500
                });

                return;
            }

            // Prepare the user data (add all the fields you want to store)
            const googleLoginUser = {
                name: res?.user?.displayName,
                email: res?.user?.email,
                bankAccountNo: "",
                salary: "",
                designation: 'employee',
                role: 'employee',
                photo: res?.user?.photoURL,
                isVerified: false,
                isFired: false,
            };

            // Call the combined register-and-check API
            const response = await axiosPublic.post('/register-people', googleLoginUser,{withCredentials: true});

            // Check the response status
            if (response?.status === 200) {
                // Existing user, not fired, allowed to log in
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Login successful!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            } else if (response?.status === 403) {
                // Fired user, deny login
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: `${response?.data?.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                await userLogOut();
                navigate('/login');
            } else if (response?.status === 201) {
                // New user, successfully registered
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Login With Google Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
                setUser(res);
                navigate('/');
            }
        } catch (err) {
            console.error("Error during Google login:", err);
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "your are fired! you can't login",
                showConfirmButton: false,
                timer: 1500
            });
            await userLogOut(); 
            navigate('/login');
        }
    };

    return (
        <>
            <Link
                onClick={handleLoginWithGoogle}
                className='flex items-center gap-1 btn bg-slate-800 text-white hover:bg-slate-700'
            >
                <FaGoogle className='text-2xl' /> Log in with Google Account
            </Link>
        </>
    );
};

export default GoogleLogin;

