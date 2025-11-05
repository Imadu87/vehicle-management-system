"use client";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function SmallModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className="bg-white rounded-xl shadow-xl relative p-6 w-[700px] max-w-[95vw] max-h-[90vh] overflow-y-auto"
        style={{ borderRadius: "12px" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
        >
          <X size={22} />
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
        )}

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}
