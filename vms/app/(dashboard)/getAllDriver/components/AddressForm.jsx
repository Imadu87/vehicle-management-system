"use client";
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

      {/* Line 1 & Line 2 same row */}
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

      {/* Row 2 */}
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

      {/* Row 3 */}
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

        <div>
          <label className="text-sm font-medium">Status</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={form.status === "Active"}
                onChange={handleChange}
              />
              Active
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={form.status === "Inactive"}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </div>
      </div>

      {/* Upload */}
      <div>
        <label className="text-sm font-medium mb-1 block">Upload Images</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="mt-2 border border-dashed rounded-md px-3 py-2 text-sm text-gray-600 bg-gray-50"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="border px-4 py-2 rounded-md"
        >
          Back
        </button>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="border px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#38384A] text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
