

import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { TeamFlowContext } from '../../../ContextApi/AuthContext';
import GoogleLogin from '../../../components/GoogleLogin/GoogleLogin';
import useAxiosPublic from './../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const LoginPage = () => {
    // get data from context api
    const { registerUserLogin, setUser } = useContext(TeamFlowContext);

    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleUserLogin = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            // Send a request to check the user's fired status
            const response = await axiosPublic.post('/check-user-fired-status', { email });
            console.log('Check fired status response:', response);

            // If the user is not fired, proceed with Firebase login
            const userCredential = await registerUserLogin(email, password);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
            });

            // setUser(userCredential);
            navigate('/');

        } catch (err) {
            console.log('Error during login:', err); // Log the full error

            if (err.response?.status === 403) {
                // User is fired
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "You have been fired!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else if (err.response?.status === 404) {
                // User not found
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "User not found!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                // Other errors
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Something went wrong. Please try again!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <>
            <section className='container md:min-h-[80vh] mx-auto mt-6 
              flex items-center justify-center 
            md:flex md:items-center gap-7 md:px-4
            
            '

            >
                <div className='border-[1px] border-gray-400 p-2 rounded-md 
              w-full
                mx-5 md:mx-0
                 md:w-6/12'
                >
                    <h2 className='text-2xl lg:text-4xl font-bold text-center m2-4'>Welcome Back</h2>

                    <div className='mt-7'>
                        <form onSubmit={handleUserLogin}>

                            {/* user email */}
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Your Email: </span>
                                    </div>
                                    <input
                                        type="email"
                                        name='email'
                                        required
                                        placeholder="Your email here.."
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                            {/* user password */}
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Your Password: </span>
                                    </div>
                                    <div className="relative">
                                        <input
                                            name='password'
                                            type={isPasswordVisible ? 'text' : 'password'}
                                            placeholder="Type password here.."
                                            className="input input-bordered w-full"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-2/4 right-2 transform -translate-y-2/4"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </label>
                            </div>

                            {/* submit button */}
                            <div className='mt-2'>
                                <button
                                    type='submit'
                                    className='btn w-full bg-pink-700 hover:bg-pink-900 text-xl text-white'>
                                    Log in
                                </button>
                            </div>
                        </form>

                        {/* i have an account */}
                        <div>
                            <p className='text-center mt-2'>
                                I don't have an account? <Link to={'/register'} className='hover:underline'>Register</Link>
                            </p>
                        </div>
                        {/* divider */}
                        <div className='mt-4'>
                            <div className="flex w-full flex-col">
                                <div className="divider">Other Login Methods</div>
                            </div>
                        </div>

                        {/* sign in with google account */}
                        <div className='mt-3'>
                            <GoogleLogin />
                        </div>

                    </div>

                </div>

                <div className='md:w-6/12 hidden md:block'>
                    <img src="https://i.imgur.com/WKf2Zpy.gif" alt="login page" />
                </div>
            </section>

        </>
    );
};

export default LoginPage;
