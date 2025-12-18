"use client";

import Link from "next/link";
import { useState } from "react";
import FoodDetailsModal from "./FoodDetailsModal";

export default function MenuCard({
  item,
  delay = 0,
  variant = "home", // home | menu | additional
  onAddToCart,
}) {
  const [isHover, setIsHover] = useState(false);
  const [isAddHover, setIsAddHover] = useState(false);
  const [open, setOpen] = useState(false);

  const cardClass =
    variant === "menu" || variant === "additional"
      ? "popular-dish-box style2 wow fadeIn"
      : "popular-dish-box wow fadeIn";

  const btnClass =
    variant === "menu" || variant === "additional" ? "brd-rd4" : "brd-rd2";

  return (
    <>
      <div className="col-md-4 col-sm-6 col-lg-4">
        <div className={cardClass} data-wow-delay={delay}>
          {/* IMAGE */}
          <div className="popular-dish-thumb fixed-thumb">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              <img src={item.image} alt={item.title} />
            </Link>

            <span className="post-rate yellow-bg brd-rd2">
              <i className="fa fa-star-o" /> {item.rating}
            </span>
          </div>

          {/* INFO */}
          <div className="popular-dish-info card-content">
            <h4>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                {item.title}
              </Link>
            </h4>

            <p
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textAlign: "justify",
                marginBottom: "5px",
              }}
            >
              {item.description}
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                justifyContent:
                  variant === "additional" ? "space-between" : "flex-end",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              {/* ADD TO CART — LEFT (ONLY ADDITIONAL ITEMS) */}
              {variant === "additional" && (
                <button
                  onClick={() => onAddToCart(item)}
                  className={btnClass}
                  onMouseEnter={() => setIsAddHover(true)}
                  onMouseLeave={() => setIsAddHover(false)}
                  style={{
                    padding: "10px 14px",
                    backgroundColor: isAddHover ? "#012169" : "#c8102e",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "background-color 160ms ease",
                  }}
                >
                  Add to Cart
                </button>
              )}

              {/* VIEW DETAILS — RIGHT */}
              <button
                onClick={() => setOpen(true)}
                className={btnClass}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={{
                  padding: "10px 14px",
                  backgroundColor: isHover ? "#c8102e" : "#012169",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background-color 160ms ease",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <FoodDetailsModal
        item={item}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
