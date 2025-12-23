"use client";

import React from "react";

export default function ConfirmModal({ open, onClose, onConfirm, message }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-96"
        onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
      >
        <h4 className="text-lg font-semibold mb-4">{message}</h4>
        <div className="flex justify-end gap-3">
          <button
            className="btn btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
