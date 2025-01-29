import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const ProgressReport = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Fetch all tasks from the database
    axiosSecure
      .get('/all-tasks')
      .then((res) => {
        setAllTasks(res.data);

        // Extract unique employee names from allTasks
        const uniqueEmployees = [
          ...new Set(res.data.map((task) => task.name)),
        ];
        setEmployees(uniqueEmployees);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // State for filtering
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  // Filter logic
  const filteredRecords = allTasks.filter((record) => {
    const recordMonth = new Date(record.date).toISOString().slice(0, 7);
    const isEmployeeMatch = selectedEmployee ? record.name === selectedEmployee : true;
    const isMonthMatch = selectedMonth ? recordMonth === selectedMonth : true;

    return isEmployeeMatch && isMonthMatch;
  });
  console.log(filteredRecords)

  return (
    <>

      <Helmet >
        <title>TemFlow | Progress Report Page</title>
      </Helmet>

      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Employee Work Records</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Employee Filter */}
          <div>
            <label className="block mb-2 font-medium">Select Employee</label>
            <select
              className="p-2 border rounded-md"
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
            >
              <option value="">All Employees</option>
              {employees.map((employee, index) => (
                <option key={index} value={employee}>
                  {employee}
                </option>
              ))}
            </select>
          </div>

          {/* Month Filter */}
          <div>
            <label className="block mb-2 font-medium">Select Month</label>
            <input
              type="month"
              className="p-2 border rounded-md"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            />
          </div>
        </div>

        {/* Records Table */}
        <div className="w-full max-h-[340px] overflow-x-auto overflow-y-auto">
          <table className="min-w-[90%] border-collapse border border-gray-200 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2">Employee Name</th>
                <th className="border border-gray-200 p-2">Task</th>
                <th className="border border-gray-200 p-2">Hours Worked</th>
                <th className="border border-gray-200 p-2">Date</th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto max-h-full">
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <tr key={record._id}>
                    <td className="border border-gray-200 p-2">{record?.name}</td>
                    <td className="border border-gray-200 p-2">{record?.task}</td>
                    <td className="border border-gray-200 p-2">{record?.hour}</td>
                    <td className="border border-gray-200 p-2">{record?.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="border border-gray-200 p-2 text-gray-500"
                  >
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProgressReport;
