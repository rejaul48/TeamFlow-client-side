 
import React from "react";
import { Helmet } from "react-helmet";
import { useTable } from "react-table";
import useGetPayrollEmployees from "../../../../hooks/useGetPayrollEmployees";
import { Link } from "react-router-dom";

const PayrollPage = () => {
  const { payrollEmployee } = useGetPayrollEmployees();
  const data = React.useMemo(() => payrollEmployee.slice().reverse(), [payrollEmployee]);

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
        Cell: ({ row }) => (
          <span className="uppercase">{row.original.designation}</span>
        ),
      },
      {
        Header: "Month & Year",
        accessor: "monthYear",
        Cell: ({ row }) => (
          <span>{`${row.original.paymentMonth}, ${row.original.paymentYear}`}</span>
        ),
      },
      {
        Header: "Amount",
        accessor: "amount",
        Cell: ({ row }) => <span>{`৳ ${row.original.salary}`}</span>,
      },
      {
        Header: "Transaction ID",
        accessor: "transactionId",
        Cell: ({ row }) => <span>{row.original.transactionID || "N/A"}</span>,
      },
      {
        Header: "Pay",
        accessor: "pay",
        Cell: ({ row }) => {
          const { transactionID, paymentDate } = row.original;
          const isPaid = transactionID && paymentDate;

          return (
            <Link
              to={`/dashboard/payment/${row.original._id}`}
              className={`btn ${
                isPaid ? "btn-disabled bg-gray-300" : "bg-[#578FCA] hover:bg-[#578FCA]"
              } text-white px-4 py-1 rounded`}
              disabled={isPaid}
            >
              {isPaid ? "Paid" : "Pay"}
            </Link>
          );
        },
      },
      {
        Header: "Payment Date",
        accessor: "paymentDate",
        Cell: ({ value }) => <span>{value || "Pending"}</span>,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <Helmet>
        <title>TemFlow | PayRoll Page</title>
      </Helmet>

      <div className="p-4">
        <h1 className="text-lg md:text-2xl font-semibold mb-4">
          Employee Payment Approval Requests
        </h1>

        {/* Table */}
        <div className="overflow-x-auto overflow-y-auto h-[540px] bg-white rounded shadow-md w-full">
          <table
            className="table-auto w-full border-collapse border border-gray-200"
            {...getTableProps()}
          >
            <thead className="bg-gray-100">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-700"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="divide-y divide-gray-200 text-sm text-gray-600"
            >
              {rows.map((row,ind) => {
                prepareRow(row);
                return (
                  <tr
                  key={ind}
                    {...row.getRowProps()}
                    className="hover:bg-gray-50"
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="border border-gray-200 px-4 py-2"
                      >
                        {cell.render("Cell")}
                      </td>
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

export default PayrollPage;
