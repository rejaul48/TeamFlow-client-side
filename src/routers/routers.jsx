import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import WorkSheet from "../pages/Dashboard/EmployeePage/WorkSheet/WorkSheet";
import PaymentHistory from "../pages/Dashboard/EmployeePage/PaymentHistory/PaymentHistory";
import EmployeeList from "../pages/Dashboard/HrPage/EmployeeList/EmployeeList";
import ProgressReport from "../pages/Dashboard/HrPage/ProgressReport/ProgressReport";
import EmployeeDetails from "../pages/Dashboard/HrPage/EmployeeDetails/EmployeeDetails";
import AllVerifiedEmployeeList from "../pages/Dashboard/AdminPage/AllVerifiedEmployeeList/AllVerifiedEmployeeList";
import PayrollPage from "../pages/Dashboard/AdminPage/PayrollPage/PayrollPage";
import RegisterPage from "../pages/Atuhentication/RegisterPage/RegisterPage";
import LoginPage from "../pages/Atuhentication/LoginPage/LoginPage";
import useAxiosSecure from "../hooks/useAxiosSecure";
import PaymentPage from "../pages/Dashboard/AdminPage/PaymentPage/PaymentPage";
import UnAuthorize from "../pages/ErrorPage/UnAuthorize";
import PrivetRoute from "./PrivetRoute";


const axiosSecure = useAxiosSecure()
const routers = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout ></MainLayout>,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home ></Home>
            },
            {
                path: '/contact-us',
                element: <ContactUs ></ContactUs>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard ></Dashboard>,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [

            // those are employee route
            {
                path: 'work-sheet',
                element: <PrivetRoute allowedRoles={['employee']}>
                    <WorkSheet ></WorkSheet>
                </PrivetRoute>
            },
            {
                path: 'payment-history',
                element: <PrivetRoute allowedRoles={['employee']}>
                    <PaymentHistory ></PaymentHistory>
                </PrivetRoute>

            },
            // those page are for HR only
            {
                path: 'employee-list',
                element: <PrivetRoute allowedRoles={['hr']}>
                    <EmployeeList ></EmployeeList>
                </PrivetRoute>


            },
            {
                path: 'progress',
                element: <PrivetRoute allowedRoles={['hr']}>
                    <ProgressReport ></ProgressReport>
                </PrivetRoute>


            },
            {
                path: 'employee-details/:email',
                element: <PrivetRoute allowedRoles={['hr', 'admin']}>
                    <EmployeeDetails ></EmployeeDetails>
                </PrivetRoute>,
                // loader: ({ params }) => axiosSecure.get(`/payroll-employee/${params.email}`)
                loader: async ({ params }) => {
                    try {
                        const response = await axiosSecure.get(`/payroll-employee/${params.email}`);

                        // Check if there is no data in the response
                        if (!response.data || Object.keys(response.data).length === 0) {
                            return { noDataFound: true };
                        }

                        return { data: response.data };

                    } catch (error) {
                        console.error('Error fetching data:', error);
                        return { noDataFound: true };
                    }
                }

            },
            // those route for admin only
            {
                path: 'all-employee-list',
                element: <PrivetRoute allowedRoles={['admin']}>
                    <AllVerifiedEmployeeList ></AllVerifiedEmployeeList>
                </PrivetRoute>


            },
            {
                path: 'payroll',
                element: <PrivetRoute allowedRoles={['admin']}>
                    <PayrollPage ></PayrollPage>
                </PrivetRoute>
            },
            {
                path: 'payment/:id',
                element: <PrivetRoute allowedRoles={['admin']}>
                    <PaymentPage ></PaymentPage>
                </PrivetRoute>,

                loader: ({ params }) => axiosSecure.get(`/payroll-employee-list/${params.id}`)
            }

        ]
    },
    // unauthorized page
    {
        path: '/unauthorize',
        element: <UnAuthorize ></UnAuthorize>
    },
    // this is authentication router for 
    //login and registration
    {
        path: '/register',
        element: <RegisterPage ></RegisterPage>
    }, {
        path: '/login',
        element: <LoginPage ></LoginPage>
    }
])

export default routers

