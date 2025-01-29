
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { TeamFlowContext } from "../../../../ContextApi/AuthContext";

const PaymentHistory = () => {
  const { user } = useContext(TeamFlowContext);
  const [payrollEmployee, setPayrollEmployee] = useState([]); // Initialize as an empty array
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/payroll-employee/${user?.email}`)
        .then((res) => {
          setPayrollEmployee(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user?.email]);

  console.log(payrollEmployee);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Reverse the data for displaying the latest data first
  const reversedData = [...payrollEmployee].reverse();

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = reversedData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(reversedData.length / rowsPerPage);

  return (
    <>
      <Helmet>
        <title>TemFlow | Payment History</title>
      </Helmet>

      <div className="p-4 w-full overflow-x-auto ">
        <h2 className="text-2xl font-bold mb-4">Payment History</h2>

        {/* Conditional Rendering for Data */}
        {payrollEmployee.length === 0 ? (
          <p className="md:text-4xl">No data found</p>
        ) : (
          <>
            {/* Table */}
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Year</th>
                  <th>Amount</th>
                  <th>Transaction ID</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((payment, index) => (
                  <tr key={index}>
                    <td>{payment.paymentMonth}</td>
                    <td>{payment.paymentYear}</td>
                    <td>${payment.salary}</td>
                    <td>
                      {payment?.transactionID ? payment.transactionID : "Not Payment Yet"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            {payrollEmployee.length > rowsPerPage && (
              <div className="flex justify-center items-center mt-4 gap-2">
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="font-bold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default PaymentHistory;
