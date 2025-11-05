"use client";
import { FaCarAlt } from "react-icons/fa";
import balanceTableData from "./balanceData";
import { useState } from "react";
import Pagination from "@/components/Pagination";

export default function BalanceTable() {
  const rows = balanceTableData;
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
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Phone Number</th>
            <th className="py-3 px-4 text-left">License Number</th>
            <th className="py-3 px-4 text-left">Ni Number</th>
            <th className="py-3 px-4 text-left">Badge Type</th>
            <th className="py-3 px-4 text-left">Date of Birth</th>
            <th className="py-3 px-4 text-left">Balance</th>
            <th className="py-3 px-4 text-center w-[120px]">Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedRows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              <td className="py-3 px-4">{row.name}</td>
              <td className="py-3 px-4">{row.email}</td>
              <td className="py-3 px-4">{row.phone}</td>
              <td className="py-3 px-4">{row.license}</td>
              <td className="py-3 px-4">{row.ni}</td>
              <td className="py-3 px-4">{row.badge}</td>
              <td className="py-3 px-4">{row.dob}</td>
              <td className="py-3 px-4">{row.balance}</td>
              <td className="py-3 px-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <button className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
                    <FaCarAlt className="text-[#38384A]" />
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
