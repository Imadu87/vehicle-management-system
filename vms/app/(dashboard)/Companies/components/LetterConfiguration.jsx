"use client";

import Buttons from "@/components/Buttons";
import UploadFiles from "@/components/UploadFile";
import { useState } from "react";

export default function LetterConfigurationForm({
  onSubmit,
  onBack,
  onCancel,
}) {
  const [signature, setSignature] = useState("select");
  const [status, setStatus] = useState("active");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg">Letter Configuration</h2>

      {/* Letter checkboxes */}
      <div className="flex items-center gap-6">
        <label className="flex gap-2 items-center cursor-pointer">
          <input type="checkbox" className="w-4 h-4" />
          <span>Employment Letter</span>
        </label>

        <label className="flex gap-2 items-center cursor-pointer">
          <input type="checkbox" className="w-4 h-4" />
          <span>Cover Letter</span>
        </label>
      </div>

      {/* Signature select */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-sm">Signature</label>
        <select
          className="border rounded px-3 py-2"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
        >
          <option value="select" disabled>
            Select Signature
          </option>
          <option value="EB">EB Learning</option>
          <option value="Encoder">EncoderBytes</option>
          <option value="KSA">KSA</option>
        </select>
      </div>

      {/* Image section */}
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold">Image Details</h2>

        {/* Image name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Image Name</label>
          <input
            type="text"
            placeholder="Image Name"
            className="border rounded px-3 py-2"
          />
        </div>

        {/* File Upload */}
        <UploadFiles />

        {/* Status */}
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
      </div>

      {/* Buttons */}
      <Buttons onBack={onBack} onCancel={onCancel} onSubmit={onSubmit} />
    </div>
  );
}
