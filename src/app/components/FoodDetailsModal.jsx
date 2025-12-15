"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";

export default function FoodDetailsModal({ item, open, onClose }) {
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (item?.images?.length) {
      setActiveImage(item.images[0]);
    }
  }, [item]);

  if (!item) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <h2 style={{ marginBottom: "12px" }}>{item.title}</h2>

      {/* Main Image */}
      <img
        src={activeImage}
        alt={item.title}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "12px",
        }}
      />

      {/* Thumbnails */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        {item.images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setActiveImage(img)}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              border:
                activeImage === img
                  ? "2px solid #ea1b25"
                  : "1px solid #ddd",
            }}
          />
        ))}
      </div>

      {/* Description */}
      <p style={{ lineHeight: "1.6", marginBottom: "10px", textAlign: "justify" }}>
        {item.description}
      </p>

      {/* <h4>Price: ${item.price}</h4> */}
    </Modal>
  );
}
