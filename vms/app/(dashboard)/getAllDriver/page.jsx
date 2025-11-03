"use client";
import Pagination from "./components/Pagination";
import Table from "./components/DriverTable";
import AddDriverModal from "./components/AddDriverModal";

export default function GetAllDriver() {
  return (
    <div className="pt-20 ml-16 md:ml-60 min-h-screen bg-[#F9FAFB] p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Driver</h1>
          <div className="w-16 h-[3px] bg-[#38384A] mt-2"></div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <p className="text-gray-700 text-sm">Show</p>
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <p className="text-gray-700 text-sm">entries</p>
          <input
            type="text"
            placeholder="Search by name"
            className="border rounded-md px-3 py-2 text-sm w-full sm:w-[250px]"
          />
        </div>

        <div className="flex flex-wrap gap-3 justify-end">
          <button className="bg-[#38384A] hover:bg-black text-white px-4 py-2 rounded-lg text-sm">
            Assign Vehicle
          </button>
          <button className="bg-[#38384A] hover:bg-black text-white px-4 py-2 rounded-lg text-sm">
            Add Document
          </button>

          {/* ✅ Replace + Add Driver button & modal with this */}
          <AddDriverModal />
        </div>
      </div>

      <Table />
      <Pagination />
    </div>
  );
}
