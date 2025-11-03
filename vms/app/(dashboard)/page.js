"use client";
import { FaBriefcase } from "react-icons/fa";

export default function ManagementWelcome() {
  return (
    <div
      className="pt-10 flex flex-col items-center justify-center 
  text-center min-h-[80vh] bg-white px-4 py-16 sm:py-20
  ml-16 md:ml-60"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-black mb-6 leading-snug">
        Welcome to{" "}
        <span className="text-[#2563EB] block sm:inline">Management</span>
      </h1>

      {/* Icon */}
      <div className="bg-gray-100 p-6 sm:p-8 md:p-10 rounded-2xl shadow-md flex items-center justify-center">
        <FaBriefcase className="text-[#2563EB]" size={90} />
      </div>
    </div>
  );
}
