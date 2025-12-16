"use client";

import Link from "next/link";
import { useState } from "react";
import FoodDetailsModal from "./FoodDetailsModal";

export default function MenuCard({ item, delay = 0, variant = "home" }) {
  const [isHover, setIsHover] = useState(false);
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
          {/* THUMBNAIL */}
          <div className="popular-dish-thumb">
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
          <div className="popular-dish-info">
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

            {/* <p>{item.description}</p> */}
            
            {/* DESCRIPTION (2 lines only) */}
            <p
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textAlign: "justify",
              }}
            >
              {item.description}
            </p>

            

            {/* BUTTON – SAME STYLE & HOVER */}
            <div
              className="button-group"
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "12px",
                float: "right",
              }}
            >
              <button
                onClick={() => setOpen(true)}
                className={orderBtnClass}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={{
                  flex: 1,
                  padding: "10px 15px",
                  backgroundColor: isHover ? "#c8102e" : "#012169",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "6px",
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
