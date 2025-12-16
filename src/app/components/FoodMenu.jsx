"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";
import AddToCartDateModal from "./AddToCartDateModal";
import AddToCartScheduleModal from "./AddToCartScheduleModal";

export default function FoodMenu({
  items,
  limit,
  showTitle = true,
  variant = "home", // home | menu | additional
}) {
  const visibleItems = limit ? items.slice(0, limit) : items;
  const isMenu = variant === "menu";
  const isAdditional = variant === "additional";

  const [openCartModal, setOpenCartModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isHover, setIsHover] = useState(false);

  return (
    <section>
      <div
        className={
          isMenu || isAdditional
            ? "block less-spacing gray-bg top-padd30"
            : "block"
        }
      >
        <div className="container">
          {/* HOME TITLE */}
          {showTitle && !isMenu && !isAdditional && (
            <div className="title1-wrapper text-center">
              <div className="title1-inner">
                <span>Your Favourite Food</span>
                <h2>Choose &amp; Enjoy</h2>
              </div>
            </div>
          )}

          {/* MENU & ADDITIONAL GRID */}
          {isMenu || isAdditional ? (
            <div className="sec-box">
              <div className="remove-ext">
                <div className="row">
                  {visibleItems.map((item, index) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      variant={variant}
                      delay={`${0.2 + index * 0.1}s`}
                      onAddToCart={(food) => {
                        if (isAdditional) {
                          setSelectedItem(food);
                          setOpenCartModal(true);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* ✅ BOTTOM ADD TO CART — ONLY FOR MENU */}
              {isMenu && (
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
                      backgroundColor: isHover ? "#012169" : "#c8102e",
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
              )}
            </div>
          ) : (
            /* HOME GRID */
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
      {/* ADDITIONAL ITEMS → SCHEDULE MODAL */}
      {isAdditional && (
        <AddToCartScheduleModal
          open={openCartModal}
          item={selectedItem}
          onClose={() => {
            setOpenCartModal(false);
            setSelectedItem(null);
          }}
          onConfirm={(data) => {
            console.log("Additional item added:", data);
            // addToCart(data)
          }}
        />
      )}

      {/* MENU PAGE → DATE MODAL */}
      {isMenu && (
        <AddToCartDateModal
          open={openCartModal}
          item={selectedItem}
          onClose={() => {
            setOpenCartModal(false);
            setSelectedItem(null);
          }}
        />
      )}
    </section>
  );
}
