"use client";

import { useState, useContext, useEffect } from "react";
import Modal from "./Modal";
import { CartContext } from "@/app/context/CartContext";

const SCHEDULES = [
  { label: "Daily", value: "daily" },
  { label: "Alternative Days", value: "alternate" },
  { label: "Every 3 Days", value: "every_3_days" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

export default function AddToCartScheduleModal({
  open,
  item,
  onClose,
}) {
  const { addToCart, loading } = useContext(CartContext);

  const [schedule, setSchedule] = useState(SCHEDULES[0]);
  const [startDate, setStartDate] = useState("");
  const [hover, setHover] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  /* ==========================
     RESET STATE ON CLOSE
  ========================== */
  useEffect(() => {
    if (!open) {
      setSchedule(SCHEDULES[0]);
      setStartDate("");
    }
  }, [open]);

  /* ==========================
     SUBMIT ADDON TO CART
  ========================== */
  const handleSave = async () => {
    if (loading) return;

    if (!startDate) {
      alert("Please select start date");
      return;
    }

    try {
      await addToCart({
        additional_items: [
          {
            item_id: item._id,
            quantity: 1,
            addon_start_date: startDate,
            addon_schedule_type: schedule.value,
          },
        ],
      });

      onClose(); // ✅ close only on success
    } catch (err) {
      // handled inside addToCart
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      {/* TITLE */}
      <h3 style={{ marginBottom: "16px" }}>Pick Schedule</h3>

      {/* SCHEDULE OPTIONS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {SCHEDULES.map((s) => {
          const active = schedule.value === s.value;

          return (
            <button
              key={s.value}
              onClick={() => setSchedule(s)}
              disabled={loading}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                border: "1px solid #c8102e",
                backgroundColor: active ? "#c8102e" : "#fff",
                color: active ? "#fff" : "#c8102e",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "14px",
                opacity: loading ? 0.6 : 1,
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* START DATE */}
      <div>
        <label>Subscription Start Date</label>
        <input
          type="date"
          min={today}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={inputStyle}
        />
      </div>

      {/* ACTION BUTTON */}
      <div style={{ textAlign: "right", marginTop: "24px" }}>
        <button
          onClick={handleSave}
          disabled={!startDate || loading}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: "10px 20px",
            backgroundColor: !startDate
              ? "#ccc"
              : hover
              ? "#c8102e"
              : "#012169",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor:
              !startDate || loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
            transition: "background-color 0.3s ease",
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
