import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { TeamFlowContext } from "../../../ContextApi/AuthContext";
import GoogleLogin from "../../../components/GoogleLogin/GoogleLogin";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const RegisterPage = () => {

    // get userRegister function from authContect 
    const { newUserRegister } = useContext(TeamFlowContext)

    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordValid, setPasswordValid] = useState({
        length: false,
        uppercase: false,
        number: false,
    });

    // Watch password field for validation
    const password = watch("password", "");
    React.useEffect(() => {
        setPasswordValid({
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
        });
    }, [password]);


    const onSubmit = async (data) => {
        try {
            // Step 1: Upload the image to ImgBB
            const formData = new FormData();
            formData.append("image", data.photo[0]); // Correctly append the file to FormData

            const res = await axios.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Check if the response is successful
            if (res.data.success) {

                //  get image URL from the response
                const imageUrl = res.data.data.url;

                const newUser = {
                    name: data.name,
                    email: data.email,
                    bankAccountNo: data.bankAccountNo,
                    salary: data.salary,
                    designation: data.designation,
                    role: data.role,
                    photo: imageUrl,
                    isVerified: false,
                    isFired: false,
                };

                // now send data into database mongoDb
                const userAdd = await axiosSecure.post('/register-people', newUser, {withCredentials: true})
                console.log(userAdd)

                //  Register user using firebase
                await newUserRegister(data?.email, data?.password);

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "user register successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')

            } else {
                throw new Error("Image upload failed");
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "something went wrong",
                showConfirmButton: false,
                timer: 1500
            });

        }
    };


    return (
        <div className="md:flex md:items-center w-11/12 md:w-10/12 mx-auto md:p-4">
            <div className="bg-white p-2 md:p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center gap-5">
                        {/* Name Field */}
                        <div className="mb-4 w-full">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered w-full mt-2"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="mb-4 w-full">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: "Email is required" })}
                                className="input input-bordered w-full mt-2"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-4 w-full">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                {...register("password", { required: "Password is required" })}
                                className="input input-bordered w-full mt-2"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-5 text-gray-500"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                {passwordVisible ? "Hide" : "Show"}
                            </button>
                        </div>
                        {/* Password Validation Text */}
                        <div className="mt-2 text-sm">
                            <p className={passwordValid.length ? "text-green-500" : "text-red-500"}>
                                - At least 8 characters
                            </p>
                            <p className={passwordValid.uppercase ? "text-green-500" : "text-red-500"}>
                                - At least one uppercase letter
                            </p>
                            <p className={passwordValid.number ? "text-green-500" : "text-red-500"}>
                                - At least one number
                            </p>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center gap-5">
                        {/* Bank Account Number Field */}
                        <div className="mb-4 w-full">
                            <label htmlFor="bankAccountNo" className="block text-gray-700">Bank Account</label>
                            <input
                                type="text"
                                id="bankAccountNo"
                                {...register("bankAccountNo", { required: "Bank account number is required" })}
                                className="input input-bordered w-full mt-2"
                                placeholder="Enter your bank account number"
                            />
                            {errors.bankAccountNo && <p className="text-red-500 text-sm">{errors.bankAccountNo.message}</p>}
                        </div>

                        {/* Salary Field */}
                        <div className="mb-4 w-full">
                            <label htmlFor="salary" className="block text-gray-700">Salary</label>
                            <input
                                type="number"
                                id="salary"
                                {...register("salary", { required: "Salary is required" })}
                                className="input input-bordered w-full mt-2"
                                placeholder="Enter your salary"
                            />
                            {errors.salary && <p className="text-red-500 text-sm">{errors.salary.message}</p>}
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        {/* Designation Field */}
                        <div className="mb-4 w-full">
                            <label htmlFor="designation" className="block text-gray-700">Designation</label>
                            <select
                                id="designation"
                                {...register("designation", { required: "Designation is required" })}
                                className="select select-bordered w-full mt-2"
                            >
                                <option value="sales_assistant">Sales Assistant</option>
                                <option value="social_media_executive">Social Media Executive</option>
                                <option value="digital_marketer">Digital Marketer</option>
                                <option value="hr">HR</option>
                            </select>
                        </div>

                        {/* User role Field */}
                        <div className="mb-4 w-full">
                            <label htmlFor="designation" className="block text-gray-700">User Role</label>
                            <select
                                {...register("role", { required: "Role is required" })}
                                className="select select-bordered w-full mt-2"
                            >
                                <option value="employee">Employee</option>
                                <option value="hr">HR</option>

                            </select>
                        </div>
                    </div>

                    {/* Photo Field */}
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700">Upload Photo</label>
                        <input
                            type="file"
                            id="photo"
                            {...register("photo")}
                            className="file-input file-input-bordered w-full mt-2"
                        />
                        {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button type="submit" className="btn btn-primary w-full">
                            Register
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to={'/login'} className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </p>

                {/* divider */}
                <div className='mt-4'>
                    <div className="flex w-full flex-col">
                        <div className="divider">other's login method</div>
                    </div>
                </div>

                {/* sign in with google account */}
                <div className='mt-3'>
                    <GoogleLogin ></GoogleLogin>
                </div>
            </div>

            <div className="hidden lg:block">
                <img src="https://i.imgur.com/MYE1DJN.png" alt="" />
            </div>
        </div>
    );
};

export default RegisterPage;
