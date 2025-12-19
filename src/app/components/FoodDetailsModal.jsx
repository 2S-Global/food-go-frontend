"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function FoodDetailsModal({ item, open, onClose }) {
  const [activeImage, setActiveImage] = useState("");

  const isAdditionalItem = Boolean(item?.itemPrice);

  useEffect(() => {
    if (item?.images?.length) {
      setActiveImage(item.images[0]);
    }
  }, [item]);

  if (!item) return null;

  /* Collect item1, item2... ONLY FOR MEALS */
  const mealItems = [];

  if (!isAdditionalItem) {
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
  }

  return (
    <Modal open={open} onClose={onClose}>
      {/* TITLE */}
      <h2 style={{ marginBottom: "12px" }}>
        {isAdditionalItem ? item.itemName : item.menuName}
      </h2>

      {/* IMAGE */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={
              activeImage ||
              item.images?.[0] ||
              "/assets/images/placeholder.jpg"
            }
            alt={item.menuName || item.itemName}
            style={{
              width: "100%",
              // height: "450px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "10px",
            }}
          />
        </div>

        {/* PRICE — ONLY ADDITIONAL ITEMS */}
        <div className="col-md-6">
          {isAdditionalItem && (
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#c8102e",
                marginBottom: "16px",
              }}
            >
              £{item.itemPrice}
            </p>
          )}

          {/* DESCRIPTION */}
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
        </div>
      </div>

      {/* MEAL INCLUDES — ONLY VEG & NON-VEG */}
      {!isAdditionalItem && mealItems.length > 0 && (
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
