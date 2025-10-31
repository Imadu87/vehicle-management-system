"use client";
import { useState } from "react";

export default function Pagination() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
      {/* Previous Button */}
      <button className="px-3 py-1  rounded-md text-sm hover:opacity-90 transition">
        Previous
      </button>

      {/* Page Numbers */}
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          onClick={() => setActivePage(num)}
          className={`px-3 py-1 rounded-md text-sm transition 
            ${
              activePage === num
                ? "bg-[#38384A] text-white"
                : "bg-[#E0E0E0] text-[#38384A]"
            }`}
        >
          {num}
        </button>
      ))}

      {/* Next Button */}
      <button className="px-3 py-1 rounded-md text-sm hover:opacity-90 transition">
        Next
      </button>
    </div>
  );
}
