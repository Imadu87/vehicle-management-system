"use client";
import { useState } from "react";
import Pagination from "./components/Pagination";
import Table from "./components/DriverTable";
import Modal from "@/app/(dashboard)/components/Modal.jsx";
import AddDriverForm from "./components/AddDriverForm";

export default function GetAllDriver() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleAddDriver = (data) => {
  //   console.log("Driver added:", data);
  //   setIsModalOpen(false);
  // };

  return (
    <div className="pt-20 md:ml-[260px] min-h-screen bg-[#F9FAFB] p-6">
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
        </div>

        <input
          type="text"
          placeholder="Search by name"
          className="border rounded-md px-3 py-2 text-sm w-full sm:w-[250px]"
        />

        <div className="flex flex-wrap gap-3 justify-end">
          <button className="bg-[#38384A] text-white px-4 py-2 rounded-lg text-sm">
            Assign Vehicle
          </button>
          <button className="bg-[#38384A] text-white px-4 py-2 rounded-lg text-sm">
            Add Document
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#38384A] text-white px-4 py-2 rounded-lg text-sm"
          >
            + Add Driver
          </button>
        </div>
      </div>

      <Table />
      <Pagination />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Driver"
      >
        <AddDriverForm
          onSubmit={(data) => {
            console.log("Driver form:", data);
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
