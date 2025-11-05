"use client";

import { useState } from "react";

export default function Status() {
  const [status, setStatus] = useState("active");
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Status</label>

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
            <span>Active</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={status === "inactive"}
              onChange={(e) => setStatus(e.target.value)}
              className="w-4 h-4"
            />
            <span>Inactive</span>
          </label>
        </div>
      </div>
    </>
  );
}
