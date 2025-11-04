"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import flag from "@/public/images/Pakistan.png";

export default function AddCompanyForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    vat: "",
    ipn: "",
    website: "",
    password: "",
    phone: "",
    line1: "",
    line2: "",
    selectCountry: "",
    postCode: "",
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
    <div>
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
              // required
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              name="desc"
              placeholder="Description"
              value={formData.desc}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              VAT Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="vat"
              // required
              placeholder="VAT number"
              value={formData.vat}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Insurance Policy Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ipn"
              // required
              placeholder="e.g. DL-12345"
              value={formData.ipn}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <input
              type="email"
              name="website"
              placeholder="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email<span className="text-red-500">*</span>
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
        </div>

        {/* Address */}
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Address</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">
              Building and Street (Line 1 of 2)
            </label>
            <input
              type="text"
              name="line1"
              placeholder="Building and Street"
              value={formData.line1}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Town/City</label>
            <input
              type="text"
              name="line2"
              placeholder="Town/City"
              value={formData.line2}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Select Country</label>
            <select
              name="selectCountry"
              value={formData.selectCountry}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm"
            >
              <option>Pakistan</option>
              <option>India</option>
              <option>Afghanistan</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Post Code</label>
            <input
              type="text"
              name="postCode"
              placeholder="Postcode"
              value={formData.postCode}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm"
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
    </div>
  );
}
