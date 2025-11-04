"use client";

export default function Buttons({ onBack, onCancel, onSubmit, next }) {
  return (
    <div className="flex justify-between mt-4">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="px-3 py-2 border rounded text-sm hover:bg-gray-100"
        >
          Back
        </button>
      )}

      <div className="flex gap-2">
        <button
          onClick={onCancel}
          className="px-3 py-2 border rounded text-sm hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-[#38384A] text-white rounded text-sm hover:bg-black"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
