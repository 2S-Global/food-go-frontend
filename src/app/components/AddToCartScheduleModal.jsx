"use client";

import { useState, useContext, useEffect } from "react";
import Modal from "./Modal";
import LoginRequiredModal from "./LoginRequiredModal";
import { CartContext } from "@/app/context/CartContext";
import { useCartCountStore } from "@/app/store/cartCountStore";
import { useRouter } from "next/navigation";
const SCHEDULES = [
  { label: "Daily", value: "daily" },
  { label: "Alternative Days", value: "alternate" },
  { label: "Every 3 Days", value: "every_3_days" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

// 🔐 Login helper
const isLoggedIn = () => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("auth_token");
};

export default function AddToCartScheduleModal({ open, item, onClose }) {



  const { addToCart, loading } = useContext(CartContext);

  // local state
  const [schedule, setSchedule] = useState(SCHEDULES[0]);
  const [startDate, setStartDate] = useState("");
  const [hover, setHover] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [addiErrorMessage, setAddiErrorMessage] = useState("");
  const fetchCartCount = useCartCountStore((state) => state.fetchCartCount);

  // 🔐 login modal state
  const [showLoginModal, setShowLoginModal] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const router = useRouter();

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      setSchedule(SCHEDULES[0]);
      setStartDate("");
      setSuccessMessage("");
      setAddiErrorMessage("");
      setShowLoginModal(false);
    }
  }, [open]);

  // Guard: do not render modal if no item
  if (!open || !item) return null;

  // Add additional item to cart
  const handleSave = async () => {
    if (loading) return;

    if (!startDate) {
      alert("Please select start date");
      return;
    }

    // 🔒 LOGIN CHECK
    if (!isLoggedIn()) {
      setShowLoginModal(true);
      return;
    }

    try {
      await addToCart({
        item_type: "additional_item",
        additional_items: [
          {
            item_id: item._id,
            quantity: 1,
            addon_start_date: startDate,
            addon_schedule_type: schedule.value,
          },
        ],
      });

      // ✅ UPDATE CART COUNT (ZUSTAND)
      fetchCartCount();

      // Success message
      setSuccessMessage(
        `Your ${item.name || "item"} menu added to the cart successfully!`
      );

      setTimeout(() => {
        onClose();
        router.push("/cart");
      }, 1500);
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message || // backend error
        err?.message ||                 // thrown Error()
        err ||                           // thrown string
        "Failed to add item to cart";
      setAddiErrorMessage(errorMessage);
      // ⏳ Auto-close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setAddiErrorMessage("");
      }, 2000);
      console.error(err);
    }
  };


  return (
    <>
      <Modal open={open} onClose={onClose}>
        <h3 style={{ marginBottom: "16px" }}>Pick Schedule</h3>

        {/* Schedule options */}
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
                type="button"
                onClick={() => setSchedule(s)}
                disabled={loading}
                style={{
                  padding: "8px 14px",
                  borderRadius: "20px",
                  border: "1px solid #c8102e",
                  backgroundColor: active ? "#c8102e" : "#fff",
                  color: active ? "#fff" : "#c8102e",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.6 : 1,
                }}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Start date input */}
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

        {/* Success message */}
        {successMessage && (
          <p style={{ marginTop: "16px", color: "green", fontWeight: "bold" }}>
            {successMessage}
          </p>
        )}

        {/* Error message */}
        {addiErrorMessage && (
          <p style={{ marginTop: "16px", color: "red", fontWeight: "bold" }}>
            {addiErrorMessage}
          </p>
        )}

        {/* Action button */}
        <div style={{ textAlign: "right", marginTop: "24px" }}>
          <button
            type="button"
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
              cursor: !startDate || loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "background-color 0.3s ease",
            }}
          >
            {loading ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </Modal>

      {/* 🔐 Login Required Modal */}
      <LoginRequiredModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        redirectTo="/login?redirect=/menu/additional-items"
      />
    </>
  );
}

/* Styles */
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "6px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};
