"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import companyTableData from "./companyTableData";
import { useState } from "react";
import Pagination from "@/components/Pagination";

export default function CompanyTable() {
  const rows = companyTableData;
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const paginatedRows = rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm p-4">
      {/* ✅ Table */}
      <table className="min-w-full text-sm text-gray-800">
        <thead className="bg-[#38384A] text-white">
          <tr>
            <th className="py-3 px-4 text-left">Company Name</th>
            <th className="py-3 px-4 text-left">Company Email</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-center w-[120px]">Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedRows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              <td className="py-3 px-4">{row.company_name}</td>
              <td className="py-3 px-4">{row.company_email}</td>
              <td className="py-3 px-4">{row.status}</td>
              <td className="py-3 px-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <button className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
                    <FaEdit className="text-[#38384A]" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
                    <FaTrash className="text-[#38384A]" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Reusable Pagination Component */}
      <Pagination
        page={page}
        setPage={setPage}
        totalRows={rows.length}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
}
