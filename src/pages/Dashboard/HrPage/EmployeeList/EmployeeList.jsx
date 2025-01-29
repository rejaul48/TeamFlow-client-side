
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useTable } from 'react-table';
import useAllEmployeeList from "../../../../hooks/useAllEmployeeList";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const EmployeeList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [paymentMonth, setPaymentMonth] = useState('');
  const [paymentYear, setPaymentYear] = useState('');
  const { allEmployee, refetch } = useAllEmployeeList();
  const axiosSecure = useAxiosSecure();

  console.log(allEmployee)
  // Handle toggle verified status
  const handleMakeVerified = (id, currentVerifiedStatus) => {
    const newVerifiedStatus = !currentVerifiedStatus;

    // Update the original data in the database
    axiosSecure.patch(`/user-verified/${id}`, { verified: newVerifiedStatus })
      .then(() => {
        // Manually update the local state of allEmployee
        allEmployee.map(employee =>
          employee._id === id ? { ...employee, verified: newVerifiedStatus } : employee
        );
        // Optionally refetch data from the server to ensure consistency
        refetch();
      })
      .catch(err => console.log('Error updating verification:', err));
  };



  const data = React.useMemo(() => allEmployee, [allEmployee]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Verified",
        accessor: "verified",
        Cell: ({ row }) => (
          <button
            onClick={() => { handleMakeVerified(row.original?._id, row.original.verified) }}
            className={`btn btn-sm ${row.original.verified ? "btn-success" : "btn-error"}`}
          >
            {row.original.verified ? "✅" : "❌"}
          </button>
        ),
      },
      {
        Header: "Bank Account",
        accessor: "bankAccountNo",
      },
      {
        Header: "Salary",
        accessor: "salary",
        Cell: ({ value }) => `$${value}`,
      },
      {
        Header: "Pay",
        accessor: "pay",
        Cell: ({ row }) => (
          <button
            className="btn btn-sm btn-primary"
            onClick={() => handlePay(row.original)}
            disabled={!row.original.verified} // Disable if already paid
          >
            Pay
          </button>
        ),
      },
      {
        Header: "Details",
        accessor: "details",
        Cell: ({ row }) =>
          <Link
            disabled={!row.original.verified || row.original.isFired}
            to={`/dashboard/employee-details/${row?.original?.email}`} className="btn btn-sm btn-info">
            Details

          </Link>,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const handlePay = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  // Handle pay button click
  const handleEmployeePay = () => {
    const paymentEmployee = {
      name: selectedEmployee?.name,
      email: selectedEmployee?.email,
      designation: selectedEmployee?.designation,
      salary: selectedEmployee?.salary,
      bankAccountNo: selectedEmployee?.bankAccountNo,
      paymentMonth: paymentMonth,
      paymentYear: paymentYear,
      transactionID: '',
      paymentDate: ''
    };

    // Send data into the database collection
    axiosSecure.post('/payroll', paymentEmployee, { withCredentials: true })
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Payment Request successfully",
          showConfirmButton: false,
          timer: 1500
        });

        // Mark the payment as requested
        const updatedEmployee = { ...selectedEmployee, paymentRequested: true };
        setSelectedEmployee(updatedEmployee);
        // Update the employee data locally
        const updatedEmployees = allEmployee.map(emp =>
          emp._id === selectedEmployee._id ? updatedEmployee : emp
        );
        // Optionally refetch data from the server to ensure consistency
        refetch();
        setShowModal(false);
      })
      .catch(err => {
        console.log(err);
      });
  };


  // Determine if the Pay button should be disabled
  const isPayButtonDisabled = !paymentMonth || !paymentYear;

  return (
    <>
      <Helmet>
        <title>TeamFlow | Employee List Page</title>
      </Helmet>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Employee List</h2>

        <div className="w-full max-h-[540px] overflow-x-auto overflow-y-auto">
          <table {...getTableProps()} className="table table-zebra  ">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {showModal && selectedEmployee && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Pay {selectedEmployee.name}</h3>
              <div className="mt-4">
                <p className="mb-2">
                  <strong>Salary:</strong> ${selectedEmployee.salary}
                </p>
                <input
                  type="text"
                  onChange={(e) => setPaymentMonth(e.target.value)}
                  placeholder="Month"
                  className="input input-bordered w-full mb-2"
                  required
                />
                <input
                  type="text"
                  onChange={(e) => setPaymentYear(e.target.value)}
                  placeholder="Year"
                  className="input input-bordered w-full mb-2"
                  required
                />
              </div>
              <div className="modal-action">
                <button
                  onClick={() => { handleEmployeePay() }}
                  className="btn btn-primary"
                  disabled={isPayButtonDisabled}  // Disable if either field is empty
                >
                  Pay
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeList;
