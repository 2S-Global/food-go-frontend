"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

export default function AddToCartDateModal({ open, onClose }) {
  const router = useRouter();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minEndDate, setMinEndDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const [hover, setHover] = useState(false);

  // When start date changes → calculate min end date (start + 6 days)
  useEffect(() => {
    if (!startDate) {
      setEndDate("");
      setMinEndDate("");
      return;
    }

    const start = new Date(startDate);
    const minEnd = new Date(start);
    minEnd.setDate(start.getDate() + 6);

    const formattedMinEnd = minEnd.toISOString().split("T")[0];

    setMinEndDate(formattedMinEnd);
    setEndDate(formattedMinEnd); // default selection
  }, [startDate]);

  const handleSave = () => {
    if (!startDate || !endDate) {
      alert("Please select start and end date");
      return;
    }

    if (new Date(startDate) < new Date(today)) {
      alert("Start date cannot be in the past");
      return;
    }

    if (new Date(endDate) < new Date(minEndDate)) {
      alert("End date must be at least 6 days after start date");
      return;
    }

    localStorage.setItem("cartDates", JSON.stringify({ startDate, endDate }));

    onClose();
    router.push("/cart");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 style={{ marginBottom: "16px" }}>Select Date Range</h3>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {/* START DATE */}
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

        {/* END DATE */}
        <div style={{ flex: 1 }}>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            min={minEndDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </div>
      </div>

      <div style={{ textAlign: "right", marginTop: "24px" }}>
        <button
          onClick={handleSave}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: "10px 20px",
            backgroundColor: hover ? "#c8102e" : "#012169",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Save & Go to Cart
        </button>
      </div>
    </Modal>
  );
}
