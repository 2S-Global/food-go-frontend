"use client";

import MenuCard from "./MenuCard";

export default function FoodMenu({
  items = [], // ✅ default
  limit,
  showTitle = true,
  variant = "home",
  subscriptionType,
  onAddToCart,
  topContent,
  topHeadline,
}) {
  // ✅ SAFETY: ensure array
  const safeItems = Array.isArray(items) ? items : [];

  const visibleItems = limit ? safeItems.slice(0, limit) : safeItems;

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
              {/* ✅ TOP CONTENT INSIDE SAME WHITE AREA */}
              {topContent && (
                <div
                  style={{
                    maxWidth: "900px",
                    margin: "0 auto 40px",
                    paddingBottom: "20px",
                  }}
                >
                  {/* ✅ HEADLINE */}
                  <h2
                    style={{
                      textAlign: "center",
                      marginBottom: "15px",
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#c8102e",
                    }}
                  >
                    {topHeadline ||
                      (variant === "additional"
                        ? "Additional Items"
                        : "Our Delicious Menu")}
                  </h2>

                  {/* ✅ DESCRIPTION CONTENT */}
                  <div
                    style={{
                      textAlign: "justify",
                      fontSize: "15px",
                      color: "#555",
                      lineHeight: "1.7",
                    }}
                  >
                    {topContent}
                  </div>
                </div>
              )}

              <div className="remove-ext">
                <div className="row gy-4">
                  {visibleItems.map((item, index) => (
                    <MenuCard
                      key={item.id ?? item._id ?? index}
                      item={item}
                      variant={variant}
                      subscriptionType={subscriptionType}
                      delay={`${0.2 + index * 0.1}s`}
                      onAddToCart={onAddToCart}
                    />
                  ))}
                </div>
              </div>

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
                  key={item._id ?? index}
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
