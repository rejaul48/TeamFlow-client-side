
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EmployeeDetails = ({ noDataFound }) => {
  const detailsEmployeeData = useLoaderData();
  const employeeDataArray = detailsEmployeeData?.data || [];
  const [selectUser, setSelectUser] = useState(null);
  const axiosSecure = useAxiosSecure();

  const email = employeeDataArray[0]?.email;

  useEffect(() => {
    if (email) {
      axiosSecure
        .get(`/register-people/${email}`)
        .then((res) => {

          setSelectUser(res.data); // Set data when found
        })
        .catch((err) => {

          console.error("Error fetching user details:", err);
          setSelectUser(null); // Ensure no invalid data is displayed

        });
    }
  }, [email, axiosSecure]);


  const photoURL = selectUser?.photo;

  // Redirect or handle when no data is available
  if (!employeeDataArray.length || !detailsEmployeeData.data || detailsEmployeeData.data.length === 0 || noDataFound) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg md:text-4xl animate-pulse font-semibold text-gray-600">No Data Found</p>
      </div>
    );
  }

  // Prepare chart data
  const selectedEmployee = employeeDataArray.map((entry) => ({
    month: entry.paymentMonth,
    year: entry.paymentYear,
    salary: entry.salary,
  }));

  const data = {
    labels: selectedEmployee.map((item) => `${item.month} ${item.year}`),
    datasets: [
      {
        label: "Salary",
        data: selectedEmployee.map((item) => item.salary),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Salary vs. Month and Year",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month and Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Salary",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>TemFlow | Employee Details Page</title>
      </Helmet>

      <div className="h-screen flex flex-col">
        {/* Sticky Header */}
        <div
          className="flex items-center gap-4 bg-white p-4 shadow-md"
          style={{ position: "sticky", top: 0, zIndex: 10 }}
        >
          {photoURL && (
            <img
              src={photoURL}
              alt="Employee Photo"
              className="w-24 h-24 rounded-full"
            />
          )}
          <div>
            <h3 className="text-xl font-semibold">{employeeDataArray[0]?.name}</h3>
            <p className="text-gray-600 uppercase">{employeeDataArray[0]?.designation}</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
          <div className="h-[300px]   md:h-[400px] lg:h-[550px] xl:h-[480px] p-3 ">
            <Bar data={data} options={options} className="h-[500px]" />
          </div>

        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;

