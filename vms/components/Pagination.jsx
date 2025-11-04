"use client";
import { FaBan } from "react-icons/fa";

export default function Pagination({ page, setPage, totalRows, rowsPerPage }) {
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const disablePrev = page === 1;
  const disableNext = page === totalPages;

  return (
    <div className="flex justify-center items-center gap-4 mt-5 select-none">
      {/* Previous */}
      <button
        disabled={disablePrev}
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        className={`relative text-sm transition px-2 ${
          disablePrev ? "opacity-40 cursor-not-allowed" : "hover:text-gray-800"
        }`}
      >
        Previous
        {disablePrev && (
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
            <FaBan className="text-[16px] text-red-500" />
          </span>
        )}
      </button>

      {/* Next */}
      <button
        disabled={disableNext}
        onClick={() => setPage((p) => p + 1)}
        className={`relative text-sm transition px-2 ${
          disableNext ? "opacity-40 cursor-not-allowed" : "hover:text-gray-800"
        }`}
      >
        Next
        {disableNext && (
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
            <FaBan className="text-[16px] text-red-500" />
          </span>
        )}
      </button>
    </div>
  );
}
