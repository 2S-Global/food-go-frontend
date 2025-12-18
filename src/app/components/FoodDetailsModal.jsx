"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";

// const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "");
const stripHtml = (html = "") =>
  html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();


export default function FoodDetailsModal({ item, open, onClose }) {
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (item?.images?.length) {
      setActiveImage(item.images[0]);
    }
  }, [item]);

  if (!item) return null;

  // Collect item1, item2, item3... dynamically
  const mealItems = [];

  Object.keys(item).forEach((key) => {
    if (key.startsWith("item") && item[key]) {
      const index = key.replace("item", "");
      const descKey = `description${index}`;

      mealItems.push({
        name: item[key],
        description: stripHtml(item[descKey] || ""),
      });
    }
  });

  return (
    <Modal open={open} onClose={onClose}>
      {/* Title */}
      <h2 style={{ marginBottom: "12px" }}>{item.menuName}</h2>

      {/* Main Image */}
      <img
        src={
          activeImage || item.images?.[0] || "/assets/images/placeholder.jpg"
        }
        alt={item.menuName}
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "12px",
        }}
      />

      {/* Thumbnails */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        {Array.isArray(item.images) &&
          item.images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setActiveImage(img)}
              alt=""
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
                display: "none",
                border:
                  activeImage === img ? "2px solid #ea1b25" : "1px solid #ddd",
              }}
            />
          ))}
      </div>

      {/* Main Description */}
      {item.description && (
        <p
          style={{
            lineHeight: "1.6",
            marginBottom: "16px",
            textAlign: "justify",
          }}
        >
          {stripHtml(item.description)}
        </p>
      )}

      {/* Meal Includes */}
      {mealItems.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Meal Includes :</h3>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {mealItems.map((meal, index) => (
              <li
                key={index}
                style={{
                  padding: "10px",
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              >
                <strong style={{ display: "block", marginBottom: "6px" }}>
                  {meal.name}
                </strong>

                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    lineHeight: "1.5",
                  }}
                >
                  {meal.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Modal>
  );
}
