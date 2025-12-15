"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

export default function AddToCartDateModal({ open, onClose }) {
  const router = useRouter();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  // Auto calculate end date (+6 days)
  useEffect(() => {
    if (!startDate) return;

    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + 6); // 7days total

    setEndDate(end.toISOString().split("T")[0]);
  }, [startDate]);

  const handleSave = () => {
    if (!startDate) {
      alert("Please select start date");
      return;
    }

    if (new Date(startDate) < new Date(today)) {
      alert("Start date cannot be in the past");
      return;
    }

    localStorage.setItem(
      "cartDates",
      JSON.stringify({ startDate, endDate })
    );

    onClose();
    router.push("/cart");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 style={{ marginBottom: "16px" }}>Select Date Range</h3>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            min={today}
            onChange={(e) => setStartDate(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            disabled
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "6px",
              backgroundColor: "#f5f5f5",
            }}
          />
        </div>
      </div>

      <div style={{ textAlign: "right", marginTop: "24px" }}>
        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ea1b25",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Save & Go to Cart
        </button>
      </div>
    </Modal>
  );
}
