"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import flag from "@/public/images/Pakistan.png";

export default function AddDriverForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    nic: "",
    license: "",
    email: "",
    password: "",
    phone: "",
    driverNo: "",
    badgeType: "",
    insurance: "",
    expiry: "",
  });

  const [showBadgeMenu, setShowBadgeMenu] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectBadge = (value) => {
    setFormData({ ...formData, badgeType: value });
    setShowBadgeMenu(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>

        {/* NIC Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            NIC Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nic"
            required
            placeholder="e.g. 35202-1234567-8"
            value={formData.nic}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>

        {/* License Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            License Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="license"
            required
            placeholder="e.g. DL-12345"
            value={formData.license}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="e.g. driver@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="flex items-center border rounded-md px-2">
            <div className="flex items-center gap-1 border-r pr-2">
              <Image src={flag} width={20} height={14} alt="PK" />
              <span className="text-gray-600 text-sm">+92</span>
            </div>
            <input
              type="text"
              name="phone"
              placeholder="3001234567"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-2 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Driver Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Driver Number
          </label>
          <input
            type="text"
            name="driverNo"
            placeholder="Enter driver ID"
            value={formData.driverNo}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>

        {/* Badge Type */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Badge Type
          </label>
          <button
            type="button"
            onClick={() => setShowBadgeMenu(!showBadgeMenu)}
            className="w-full flex items-center justify-between border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          >
            {formData.badgeType || "Select type"}
            <ChevronDown size={16} />
          </button>

          {showBadgeMenu && (
            <div className="absolute z-10 bg-white border rounded-md shadow-lg mt-1 w-full">
              {["Permanent", "Temporary", "Contract"].map((item) => (
                <div
                  key={item}
                  onClick={() => handleSelectBadge(item)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Insurance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Insurance
          </label>
          <input
            type="text"
            name="insurance"
            placeholder="Insurance details"
            value={formData.insurance}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>

        {/* License Expiry Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            License Expiry Date
          </label>
          <input
            type="date"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="border border-gray-400 text-gray-700 px-5 py-2 rounded-md text-sm hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#38384A] text-white px-5 py-2 rounded-md text-sm hover:bg-[#2f2f40]"
        >
          Next
        </button>
      </div>
    </form>
  );
}
