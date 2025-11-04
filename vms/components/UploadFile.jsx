"use client";

import { useState } from "react";

export default function UploadFiles() {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName("No file chosen");
      return;
    }
    setFileName(file.name);
  };
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">Image File</label>

      <div className="flex items-center gap-3 p-2 rounded border-2 border-dashed border-gray-300 bg-white/60 w-fit">
        <label
          htmlFor="file-input"
          className="px-2 py-1 rounded bg-[#38384A] text-white text-xs cursor-pointer hover:opacity-90"
        >
          Choose File
        </label>

        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="sr-only"
        />

        <span className="text-xs text-gray-600 max-w-[120px] truncate">
          {fileName}
        </span>
      </div>
    </div>
  );
}
