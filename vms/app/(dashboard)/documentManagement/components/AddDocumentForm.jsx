import Buttons from "@/components/Buttons";
import { useState } from "react";

export default function AddDocumentForm({ onBack, onCancel, onSubmit }) {
    const [status, setStatus] = useState()
  return (
    <form>
      <div className="flex flex-col gap-2">
        <label>Entity Type</label>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <label>Vehicle</label>
          <input type="checkbox" className="w-4 h-4" />
          <label>Driver</label>
          <input type="checkbox" className="w-4 h-4" />
          <label>Admin</label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            // required
            placeholder="Enter Document Type Name"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#38384A] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-6 mt-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="status"
              value="active"
              checked={status === "active"}
              onChange={(e) => setStatus(e.target.value)}
              className="w-4 h-4"
            />
            <span>Document verification required.</span>
          </label>
        </div>

        <Buttons onBack={onBack} onCancel={onCancel} onSubmit={onSubmit} />
      </div>
    </form>
  );
}
