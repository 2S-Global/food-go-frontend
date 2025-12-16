"use client";

import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

const SCHEDULES = [
  "Daily",
  "Alternative Days",
  "Every 3 Days",
  "Weekly",
  "Monthly",
];

export default function AddToCartScheduleModal({
  open,
  item,
  onClose,
  onConfirm,
}) {
    const router = useRouter();
  const [schedule, setSchedule] = useState("Daily");
  const [startDate, setStartDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const [hover, setHover] = useState(false);

  const handleSave = () => {
    if (!startDate) {
      alert("Please select start date");
      return;
    }

    onConfirm({
      item,
      schedule,
      startDate,
    });

    onClose();
    router.push("/cart");
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
          const active = schedule === s;

          return (
            <button
              key={s}
              onClick={() => setSchedule(s)}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                border: "1px solid #c8102e",
                backgroundColor: active ? "#c8102e" : "#fff",
                color: active ? "#fff" : "#c8102e",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {s}
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
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "6px",
          }}
        />
      </div>

      {/* ACTION BUTTON */}
      <div style={{ textAlign: "right", marginTop: "24px" }}>
        <button
          onClick={handleSave}
          disabled={!startDate}
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
            cursor: startDate ? "pointer" : "not-allowed",
            transition: "background-color 0.3s ease",
          }}
        >
          Add to Cart
        </button>
      </div>
    </Modal>
  );
}
