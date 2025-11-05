"use client";

import Buttons from "@/components/Buttons";
import Status from "@/components/Status";
import UploadFiles from "@/components/UploadFile";
import { useState } from "react";

export default function LetterConfigurationForm({
  onSubmit,
  onBack,
  onCancel,
}) {
  const [signature, setSignature] = useState("select");

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
       <Status />
      </div>

      {/* Buttons */}
      <Buttons onBack={onBack} onCancel={onCancel} onSubmit={onSubmit} />
    </div>
  );
}
