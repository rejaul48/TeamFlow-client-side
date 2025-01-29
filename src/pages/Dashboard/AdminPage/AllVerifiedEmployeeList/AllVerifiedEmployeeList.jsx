
import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import useVerifiedEmployees from "../../../../hooks/useVerifiedEmployees";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AllVerifiedEmployeeList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adjustSalaryEmployee, setAdjustSalaryEmployee] = useState(null);
  const [newSalary, setNewSalary] = useState(0);
  const [isTableView, setIsTableView] = useState(true);

  const { verifiedEmployee, refetch } = useVerifiedEmployees();
  const axiosSecure = useAxiosSecure();

  const handleAdjustSalary = (email) => {
    axiosSecure
      .get(`/register-people/${email}`)
      .then((res) => {
        setAdjustSalaryEmployee(res.data);
        setIsModalOpen(true);
      })
      .catch((err) => console.log(err));
  };


  const handleSaveSalary = () => {
    const currentSalary = adjustSalaryEmployee?.salary;
    console.log(currentSalary)
    if (newSalary <= currentSalary) {
      Swal.fire({
        position: "top-center",
        icon: "info",
        title: "Salary can only be increased",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    axiosSecure
      .patch(`/update-salary/${adjustSalaryEmployee?._id}`, { salary: newSalary })
      .then(() => {
        refetch();
        setIsModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChengeUserRole = (id, currentRole) => {
    const newRole = { role: currentRole === "HR" ? "Employee" : "HR" };
    const action = { role: currentRole === "HR" ? "Employee" : 'HR' };

    Swal.fire({
      title: "Are you sure?",
      text: `You wanna make ${action.role}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `YES Make ${action.role}`
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure
          .patch(`/update-user-role/${id}`, newRole)
          .then(() => {
            refetch();
          })
          .catch((err) => console.error("Error updating user role:", err));

        Swal.fire({
          title: `Now ${action.role}`,
          text: `Successfully make to ${action.role}`,
          icon: "success"
        });
      }
    });



  };

  const handleFiredEmployee = (id, firedStatus) => {
    const fireStatus = { isFired: firedStatus === true ? false : true };
    const action = { isFired: firedStatus === true ? "Remove from Fired" : 'Fired' };

    Swal.fire({
      title: "Are you sure?",
      text: `You wanna ${action.isFired}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `YES ${action.isFired}`
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure
          .patch(`/chenge-fired-status/${id}`, fireStatus)
          .then(() => {

            refetch();
          })
          .catch((err) => console.log(err));

        Swal.fire({
          title: `${action.isFired}`,
          text: `successfully ${action.isFired}`,
          icon: "success"
        });
      }
    });


  };


  const data = React.useMemo(() => verifiedEmployee || [], [verifiedEmployee]);

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
        Header: "Designation",
        accessor: "designation",
      },
      {
        Header: "Bank Account",
        accessor: "bankAccountNo",
      },
      {
        Header: "Salary",
        accessor: "salary",
        Cell: ({ row }) => (
          <input
            type="number"
            value={row.original.salary}
            className="w-20"
            disabled
          />
        ),
      },
      {
        Header: "Adjust Salary",
        accessor: "adjustSalary",
        Cell: ({ row }) => (
          <button
            className="btn btn-warning text-sm"
            onClick={() => {
              handleAdjustSalary(row.original.email);
            }}
          >
            Adjust Salary
          </button>
        ),
      },
      {
        Header: "Fire",
        accessor: "fire",
        Cell: ({ row }) => (
          <button
            className="btn btn-danger"
            onClick={() =>
              row.original.role !== "admin" &&
              handleFiredEmployee(row.original._id, row.original.isFired)
            }
            disabled={row.original.role === "admin"}
          >
            {row.original.role === "admin"
              ? "Admin"
              : row.original.isFired
                ? <p className="text-red-500">Fired</p>
                : "Fire"}
          </button>
        ),
      },
      {
        Header: "Make HR",
        accessor: "makeHR",
        Cell: ({ row }) => (
          <button
            className="btn btn-primary"
            onClick={() =>
              row.original.role !== "admin" &&
              handleChengeUserRole(row.original._id, row.original.role)
            }
            disabled={row.original.role === "admin"}
          >
            {row.original.role === "admin"
              ? "Admin"
              : row.original.role === "HR"
                ? "Make Employee"
                : "Make HR"}
          </button>
        ),
      },
      {
        Header: "Details",
        accessor: "details",
        Cell: ({ row }) => (
          <Link
            to={`/dashboard/employee-details/${row.original.email}`}
            className="btn btn-info"
            disabled={row.original.isFired}
          >
            View Details
          </Link>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>

      <Helmet >
        <title>TemFlow | All Verified Employees Page</title>
      </Helmet>


      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Verified Employee List</h1>

        {/* Toggle View Button */}
        <button
          className="btn bg-emerald-800 text-white hover:bg-emerald-900 mb-4"
          onClick={() => setIsTableView((prev) => !prev)}
        >
          {isTableView ? "Switch to Card View" : "Switch to Table View"}
        </button>

        {/* Conditional Rendering */}
        {isTableView ? (
          <div className="overflow-auto max-h-[480px] border border-gray-200">
            <table
              className="table table-auto w-full border-collapse border border-gray-200"
              {...getTableProps()}
            >
              <thead>
                {headerGroups.map((headerGroup) => {
                  const { key, ...restProps } = headerGroup.getHeaderGroupProps();
                  return (
                    <tr key={key} {...restProps}>
                      {headerGroup.headers.map((column) => {
                        const { key, ...restColumnProps } = column.getHeaderProps();
                        return (
                          <th
                            key={key}
                            {...restColumnProps}
                            className="border border-gray-200 p-2 bg-gray-100 sticky top-0 z-10"
                          >
                            {column.render("Header")}
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  const { key, ...restRowProps } = row.getRowProps();
                  return (
                    <tr key={key} {...restRowProps}>
                      {row.cells.map((cell) => {
                        const { key, ...restCellProps } = cell.getCellProps();
                        return (
                          <td
                            key={key}
                            {...restCellProps}
                            className="border border-gray-200 p-2"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
            {data.map((employee) => (
              <div key={employee._id} className="card border p-4">
                <h2 className="text-lg font-semibold">{employee.name}</h2>
                <p>Email: {employee.email}</p>
                <p>Designation: {employee.designation}</p>
                <p>Salary: {employee.salary}</p>
                <div className="mt-4 flex gap-2">
                  <button
                    className="btn btn-warning"
                    onClick={() => handleAdjustSalary(employee.email)}
                  >
                    Adjust Salary
                  </button>

                  {/* Make HR Button */}
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      employee.role !== "admin" &&
                      handleChengeUserRole(employee._id, employee.role)
                    }
                    disabled={employee.role === "admin"}
                  >
                    {employee.role === "admin"
                      ? "Admin" // Text to display if role is admin
                      : employee.role === "HR"
                        ? "Make Employee"
                        : "Make HR"}
                  </button>


                </div>

                <div className="mt-4 flex gap-2">
                  {/* Fire Button */}
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      employee.role !== "admin" &&
                      handleFiredEmployee(employee._id, employee.isFired)
                    }
                    disabled={employee.role === "admin"}
                  >
                    {employee.role === "admin"
                      ? "Admin" // Text to display if role is admin
                      : employee.isFired
                        ? <p className="text-red-500">Fired</p>
                        : "Fire"}
                  </button>

                  {/* view detals button */}
                  <Link
                    to={`/dashboard/employee-details/${employee.email}`}
                    className="btn btn-info"
                  >
                    View Details
                  </Link>


                </div>


              </div>
            ))}
          </div>
        )}

        {/* DaisyUI Modal for Adjust Salary */}
        <input
          type="checkbox"
          id="adjust-salary-modal"
          className="modal-toggle"
          checked={isModalOpen}
          readOnly
        />
        <div className="modal">
          <div className="modal-box">
            <h2 className="text-xl font-semibold mb-4">Adjust Salary for</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Current Salary: {adjustSalaryEmployee?.salary}</label>
              {adjustSalaryEmployee?.length > 0 && (
                <input
                  type="number"
                  defaultValue={adjustSalaryEmployee[0]?.salary}
                  className="input input-bordered w-full mt-2"
                  disabled
                />
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">New Salary:</label>
              <input
                type="number"
                className="input input-bordered w-full mt-2"
                placeholder="Enter new salary"
                onChange={(e) => setNewSalary(e.target.value)}
              />
            </div>
            <div className="flex gap-4 w-full">
              <button
                className="btn btn-primary w-fit"
                onClick={() => handleSaveSalary()}
              >
                Save Changes
              </button>
              <button
                className="btn btn-secondary w-fit"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllVerifiedEmployeeList;
