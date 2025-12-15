"use client";

import { useState } from "react";
import FoodDetailsModal from "./FoodDetailsModal";

export default function MenuCard({ item, delay = 0, variant = "menu" }) {
  const [open, setOpen] = useState(false);

  const cardClass =
    variant === "menu"
      ? "popular-dish-box style2 wow fadeIn"
      : "popular-dish-box wow fadeIn";

  const orderBtnClass = variant === "menu" ? "brd-rd4" : "brd-rd2";

  return (
    <>
      <div className="col-md-4 col-sm-6 col-lg-4">
        <div className={cardClass} data-wow-delay={`${delay}s`}>
          <div
            className="popular-dish-thumb"
            onClick={() => setOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.image} alt={item.title} />
            <span className="post-rate yellow-bg brd-rd2">
              <i className="fa fa-star-o" /> {item.rating}
            </span>
          </div>

          <div className="popular-dish-info">
            <h4 onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
              {item.title}
            </h4>

            <p>{item.description}</p>
            <span className="price">${item.price}</span>

            <div style={{ textAlign: "right", marginTop: "12px" }}>
              <button
                className={orderBtnClass}
                onClick={() => setOpen(true)}
                style={{
                  padding: "10px 18px",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <FoodDetailsModal
        item={item}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
