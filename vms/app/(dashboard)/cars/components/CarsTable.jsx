"use client";
import { FaCarAlt, FaRegEdit  } from "react-icons/fa";
import carsTableData from "./carsTableData";
import { useState } from "react";
import Pagination from "@/components/Pagination";

export default function CarsTable() {
  const rows = carsTableData;
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
            <th className="py-3 px-4 text-left">Model</th>
            <th className="py-3 px-4 text-left">Year</th>
            <th className="py-3 px-4 text-left">Type</th>
            <th className="py-3 px-4 text-left">Engine Type</th>
            <th className="py-3 px-4 text-left">Company</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-center w-[120px]">Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedRows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              <td className="py-3 px-4">{row.manufacture}</td>
              <td className="py-3 px-4">{row.model}</td>
              <td className="py-3 px-4">{row.year}</td>
              <td className="py-3 px-4">{row.type}</td>
              <td className="py-3 px-4">{row.engine}</td>
              <td className="py-3 px-4">{row.company}</td>
              <td className="py-3 px-4">{row.status}</td>
              <td className="py-3 px-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <button className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
                    <FaCarAlt className="text-[#38384A]" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
                    <FaRegEdit className="text-[#38384A]" />
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
