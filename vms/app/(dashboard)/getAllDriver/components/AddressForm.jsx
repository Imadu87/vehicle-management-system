"use client";
import Buttons from "@/components/Buttons";
import Status from "@/components/Status";
import UploadFiles from "@/components/UploadFile";
import { useState } from "react";

export default function AddressForm({ onSubmit, onBack, onCancel }) {
  const [form, setForm] = useState({
    line1: "",
    line2: "",
    city: "",
    country: "",
    postal: "",
    status: "Active",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Address</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">
            Building and Street (Line 1 of 2)
          </label>
          <input
            type="text"
            name="line1"
            required
            value={form.line1}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            Building and Street (Line 2 of 2)
          </label>
          <input
            type="text"
            name="line2"
            value={form.line2}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Town / City</label>
          <input
            type="text"
            name="city"
            required
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Country</label>
          <input
            type="text"
            name="country"
            required
            value={form.country}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Post Code</label>
          <input
            type="text"
            name="postal"
            value={form.postal}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm"
          />
        </div>
        {/* Status  */}
        <Status />
      </div>

      {/* Upload */}
      <UploadFiles />

      {/* Buttons */}
      <Buttons onBack={onBack} onCancel={onCancel} onSubmit={onSubmit} />
    </form>
  );
}
