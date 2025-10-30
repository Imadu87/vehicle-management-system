import { FaEdit, FaTrash, FaCar } from "react-icons/fa";
import tableData from "./data.js"

export default function Table() {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
      <table className="min-w-full text-sm text-gray-800">
        <thead className="bg-[#38384A] text-white">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Phone Number</th>
            <th className="py-3 px-4 text-left">License Number</th>
            <th className="py-3 px-4 text-left">NI Number</th>
            <th className="py-3 px-4 text-left">Badge Type</th>
            <th className="py-3 px-4 text-left">Date of Birth</th>
            <th className="py-3 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((driver, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
              <td className="py-3 px-4">{driver.name}</td>
              <td className="py-3 px-4">{driver.email}</td>
              <td className="py-3 px-4">{driver.phone}</td>
              <td className="py-3 px-4">{driver.license}</td>
              <td className="py-3 px-4">{driver.ni}</td>
              <td className="py-3 px-4">{driver.badge}</td>
              <td className="py-3 px-4">{driver.dob}</td>
              <td className="py-3 px-4 text-center flex justify-center gap-3">
                <button className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
                  <FaEdit className="text-[#38384A]" />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
                  <FaTrash className="text-[#38384A]" />
                </button>
                <button className="p-2 bg-white rounded-full shadow hover:scale-105 transition">
                  <FaCar className="text-[#38384A]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
