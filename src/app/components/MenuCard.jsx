"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FoodDetailsModal from "./FoodDetailsModal";

const stripHtml = (html = "") =>
  html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export default function MenuCard({
  item,
  delay = 0,
  variant = "home", // home | menu | additional
  onAddToCart,
}) {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [isAddHover, setIsAddHover] = useState(false);
  const [open, setOpen] = useState(false);

  const cardClass =
    variant === "menu" || variant === "additional"
      ? "popular-dish-box style2 wow fadeIn"
      : "popular-dish-box wow fadeIn";

  const btnClass =
    variant === "menu" || variant === "additional" ? "brd-rd4" : "brd-rd2";

  const VegNonVegIcon = ({ type }) => {
    const color = type === "Veg" ? "green" : "red";

    return (
      <svg width="16" height="16" viewBox="0 0 16 16">
        <rect
          x="1"
          y="1"
          width="14"
          height="14"
          rx="2"
          stroke={color}
          fill="none"
          strokeWidth="2"
        />
        <circle cx="8" cy="8" r="3" fill={color} />
      </svg>
    );
  };

  const handleAddToCart = () => {
    onAddToCart?.(item);
  };

  const handleViewAll = () => {
    if (item.menuType === "Veg") router.push("/menu/veg");
    else if (item.menuType === "Non-Veg") router.push("/menu/non-veg");
    else router.push("/menu/additional-items");
  };

  return (
    <div className="col-md-4 col-sm-6 col-lg-4">
      <div className={cardClass} data-wow-delay={delay}>
        {/* IMAGE */}
        {/* <div className="popular-dish-thumb fixed-thumb"> */}
        <div className="popular-dish-thumb ">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          >
            {/* <img src={item.image} alt={item.title} /> */}
            <img
              src={item.images?.[0]}
              alt={item.menuName || item.itemName}
              loading="lazy"
            />
          </Link>
          {item.menuType && (
            <span className="post-rate  brd-rd2">
              <VegNonVegIcon type={item.menuType} />
              {/*  <i className="fa fa-star-o ms-2" /> {item.rating} */}
            </span>
          )}
        </div>

        {/* INFO */}
        <div
          className="popular-dish-info card-content"
          style={{
            padding: "10px 10px",
          }}
        >
          <h4>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              {/* {item.title} */}
              {item.menuName || item.itemName}
            </Link>
          </h4>

          <p
            style={{
              // display: "-webkit-box",
              // WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textAlign: "justify",
              marginBottom: "5px",
            }}
          >
            {/* {item.description} */}
           {stripHtml(item.description)}
          </p>

          {/* PRICE — ONLY FOR ADDITIONAL ITEMS */}
          {variant === "additional" && item.itemPrice && (
            <span
              className="price"
              style={{
                display: "block",
                fontWeight: "700",
                fontSize: "20px",
                color: "#c8102e",
              }}
            >
              £{item.itemPrice}
            </span>
          )}

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

            {/* ✅ HOME PAGE → VIEW ALL */}
            {variant === "home" && (
              <button
                onClick={handleViewAll}
                className={btnClass}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={{
                  padding: "10px 14px",
                  backgroundColor: isHover ? "#c8102e" : "#012169",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                View All
              </button>
            )}

            {/* ADD TO CART — LEFT (ONLY ADDITIONAL ITEMS) */}
            {variant === "additional" && (
              <button
                type="button" // prevent default submit
                onClick={(e) => {
                  e.stopPropagation(); // prevent parent click
                  handleAddToCart(); // call handler passed from FoodMenu
                }}
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
             {variant !== "home" && (
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
          )}
          </div>
        </div>
      </div>

      {/* DETAILS MODAL */}
      {variant !== "home" && (
        <FoodDetailsModal
          item={item}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
