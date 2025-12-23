"use client";

import { useEffect, useState, useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "@/app/context/CartContext";

export default function AddToCartDateModal({
  open,
  onClose,
  subscriptionType, // "veg" | "non_veg"
}) {
  const { addToCart, loading } = useContext(CartContext);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minEndDate, setMinEndDate] = useState("");
  const [hover, setHover] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // <-- new

  const today = new Date().toISOString().split("T")[0];

  // RESET STATE ON CLOSE
  useEffect(() => {
    if (!open) {
      setStartDate("");
      setEndDate("");
      setMinEndDate("");
      setSuccessMessage(""); // <-- reset success message
    }
  }, [open]);

  // CALCULATE MIN END DATE
  useEffect(() => {
    if (!startDate) {
      setEndDate("");
      setMinEndDate("");
      return;
    }

    const start = new Date(startDate);
    const minEnd = new Date(start);
    minEnd.setDate(start.getDate() + 6); // 7 days total

    const formattedMinEnd = minEnd.toISOString().split("T")[0];

    setMinEndDate(formattedMinEnd);
    setEndDate(formattedMinEnd);
  }, [startDate]);

  // SUBMIT TO CART API
  const handleSave = async () => {
    if (loading) return;

    if (!startDate || !endDate) {
      alert("Please select start and end date");
      return;
    }

    if (new Date(startDate) < new Date(today)) {
      alert("Start date cannot be in the past");
      return;
    }

    if (new Date(endDate) < new Date(minEndDate)) {
      alert("End date must be at least 7 days");
      return;
    }

    try {
      await addToCart({
        subscription_type: subscriptionType,
        start_date: startDate,
        end_date: endDate,
      });

      setSuccessMessage(
        `Your ${subscriptionType === "veg" ? "veg" : "non-veg"} menu added to the cart successfully!`
      );

      // Optional: auto-close after 2 seconds
      // setTimeout(() => onClose(), 2000);
    } catch (err) {
      // addToCart already alerts
    }
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
            style={inputStyle}
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
            style={inputStyle}
          />
        </div>
      </div>

      {/* SUCCESS MESSAGE */}
      {successMessage && (
        <p style={{ marginTop: "16px", color: "green", fontWeight: "bold" }}>
          {successMessage}
        </p>
      )}

      <div style={{ textAlign: "right", marginTop: "24px" }}>
        <button
          onClick={handleSave}
          disabled={loading}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: "10px 20px",
            backgroundColor: hover ? "#c8102e" : "#012169",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </Modal>
  );
}

/* ==========================
   STYLES
========================== */
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "6px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};
