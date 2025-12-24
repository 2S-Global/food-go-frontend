"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function LoginRequiredModal({ open, onClose }) {
  // 🔒 Lock background scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ⌨️ Close on ESC
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 150ms ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          padding: 28,
          borderRadius: 10,
          width: "100%",
          maxWidth: 380,
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          animation: "scaleIn 150ms ease",
        }}
      >
        <h3 style={{ marginBottom: 8 }}>Login Required</h3>

        <p style={{ color: "#555", marginBottom: 24 }}>
          Please log in to add items to your cart.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "10px 16px",
              background: "#eee",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          <Link href="/login">
            <button
              style={{
                padding: "10px 16px",
                background: "#c8102e",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Inline animations (safe for Next.js client components) */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
