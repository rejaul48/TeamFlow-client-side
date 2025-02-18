

import React, { useContext, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TeamFlowContext } from "./../../../ContextApi/AuthContext";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const BarChartComponents = () => {
  const { user } = useContext(TeamFlowContext);
  const axiosPublic = useAxiosPublic();
  const [salaryData, setSalaryData] = useState([]);

  useEffect(() => {
    if (user) {
      axiosPublic.get("/payroll-employee")
        .then((response) => {
          // Filter payments that have a valid transaction ID
          const validPayments = response.data.filter(item => item.transactionID);
          
          // Transform the data to match the chart format
          const formattedData = validPayments.map(item => ({
            name: item.paymentMonth, // Month name for X-axis
            salary: parseFloat(item.salary), // Convert salary to number
          }));

          setSalaryData(formattedData);
        })
        .catch((error) => {
          console.error("Error fetching salary:", error);
        });
    }
  }, [user, axiosPublic]);

  console.log("Formatted Salary Data:", salaryData);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2 className="text-center text-xl font-bold mb-4">Monthly Payments</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={salaryData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill="#8884d8" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponents;
