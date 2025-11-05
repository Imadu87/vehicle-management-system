"use client";

import { useState } from "react";
import Pagination from "@/components/Pagination";
import manuTableData from "./ManuData";

export default function ManuTable() {
  const rows = manuTableData;
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
            <th className="py-3 px-4 text-left">Manufacturer</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-center w-[120px]">Actions</th>
          </tr>
        </thead>

        <tbody>
          {paginatedRows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              <td className="py-3 px-4">{row.manufacturer}</td>
              <td className="py-3 px-4">{row.Status}</td>
              <td className="py-3 px-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  Added by Admin
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
