"use client";

import MenuCard from "./MenuCard";

export default function FoodMenu({
  items,
  limit,
  showTitle = true,
  variant = "home", // home | menu | additional
  subscriptionType,
  onAddToCart, // ✅ controlled by page
}) {
  const visibleItems = limit ? items.slice(0, limit) : items;
  const isMenu = variant === "menu";
  const isAdditional = variant === "additional";

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
          {showTitle && !isMenu && !isAdditional && (
            <div className="title1-wrapper text-center">
              <div className="title1-inner">
                <span>Your Favourite Food</span>
                <h2>Choose &amp; Enjoy</h2>
              </div>
            </div>
          )}

          {isMenu || isAdditional ? (
            <div className="sec-box">
              <div className="remove-ext">
                <div className="row gy-4">
                  {visibleItems.map((item, index) => (
                    <MenuCard
                      // key={item.id}
                      key={item.id ?? item._id ?? index}
                      item={item}
                      variant={variant}
                      subscriptionType={subscriptionType}
                      delay={`${0.2 + index * 0.1}s`}
                      onAddToCart={onAddToCart} // ✅ delegate
                    />
                  ))}
                </div>
              </div>

              {/* MENU PAGE BUTTON */}
              {isMenu && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 30,
                  }}
                >
                  <button
                    onClick={() => onAddToCart?.(null)}
                    className="brd-rd4"
                    style={{
                      padding: "14px 30px",
                      backgroundColor: "#c8102e",
                      color: "#fff",
                      border: "none",
                      borderRadius: 6,
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="row">
              {visibleItems.map((item, index) => (
                <MenuCard
                  key={item._id}
                  item={item}
                  delay={`${0.2 + index * 0.2}s`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
