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
  const [sortOption, setSortOption] = useState("name");
  const { allEmployee, refetch } = useAllEmployeeList();
  const axiosSecure = useAxiosSecure();

  console.log(allEmployee)

  const handleMakeVerified = (id, currentVerifiedStatus) => {
    const newVerifiedStatus = !currentVerifiedStatus;
    axiosSecure.patch(`/user-verified/${id}`, { verified: newVerifiedStatus })
      .then(() => {
        refetch();
      })
      .catch(err => console.log('Error updating verification:', err));
  };

  const sortedData = React.useMemo(() => {
    if (!allEmployee) return [];
    return [...allEmployee].sort((a, b) => {
      if (a.salary <= 0 && b.salary > 0) return 1;
      if (b.salary <= 0 && a.salary > 0) return -1;
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "salary") {
        return a.salary - b.salary;
      } else if (sortOption === "verified") {
        return a.verified === b.verified ? 0 : a.verified ? -1 : 1;
      }
      return 0;
    });
  }, [allEmployee, sortOption]);

  const data = React.useMemo(() => sortedData, [sortedData]);

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
            className="btn btn-sm bg-[#A1E3F9] hover:bg-[#A1E3F9]"
            onClick={() => handlePay(row.original)}
            disabled={!row.original.verified}  
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
            to={`/dashboard/employee-details/${row?.original?.email}`} className="btn btn-sm bg-[#3674B5] hover:bg-[#3674B5]">
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

    axiosSecure.post('/payroll', paymentEmployee, { withCredentials: true })
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Payment Request successfully",
          showConfirmButton: false,
          timer: 1500
        });

        refetch();
        setShowModal(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const isPayButtonDisabled = !paymentMonth || !paymentYear;

  return (
    <>
      <Helmet>
        <title>TeamFlow | Employee List Page</title>
      </Helmet>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Employee List</h2>
        <div className="mb-4 flex gap-4">
          <select
            className="select select-bordered w-40"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="salary">Sort by Salary</option>
            <option value="verified">Sort by Verified</option>
          </select>
        </div>
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
      </div>
    </>
  );
};

export default EmployeeList;