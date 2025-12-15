"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";
import AddToCartDateModal from "./AddToCartDateModal";

export default function FoodMenu({
  items,
  limit,
  showTitle = true,
  variant = "home", // "home" | "menu"
}) {
  const visibleItems = limit ? items.slice(0, limit) : items;
  const isMenu = variant === "menu";

  const [isHover, setIsHover] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

  return (
    <section>
      <div className={isMenu ? "block less-spacing gray-bg top-padd30" : "block"}>
        <div className="container">
          {/* HOME PAGE TITLE */}
          {showTitle && !isMenu && (
            <div className="title1-wrapper text-center">
              <div className="title1-inner">
                <span>Your Favourite Food</span>
                <h2>Choose &amp; Enjoy</h2>
              </div>
            </div>
          )}

          {/* MENU PAGE */}
          {isMenu ? (
            <div className="sec-box">
              <div className="remove-ext">
                <div className="row">
                  {visibleItems.map((item, index) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      variant="menu"
                      delay={`${0.2 + index * 0.1}s`}
                    />
                  ))}
                </div>
              </div>

              {/* ✅ ADD TO CART BUTTON (BOTTOM RIGHT) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "30px",
                }}
              >
                <button
                  onClick={() => setOpenCartModal(true)}
                  className="brd-rd4"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  style={{
                    padding: "14px 30px",
                    backgroundColor: isHover ? "#ea1b25" : "#015a8e",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    borderRadius: "6px",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ) : (
            /* HOME PAGE GRID */
            <div className="row">
              {visibleItems.map((item, index) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  delay={`${0.2 + index * 0.2}s`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* DATE MODAL */}
      <AddToCartDateModal
        open={openCartModal}
        onClose={() => setOpenCartModal(false)}
      />
    </section>
  );
}
