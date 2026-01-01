"use client";
import Link from "next/link";
import MenuCard from "./MenuCard";

export default function FoodMenuStatic({
  items = [],
  limit,
  showTitle = true,
  variant = "home",
  subscriptionType,
  onAddToCart,
}) {
  const safeItems = Array.isArray(items) ? items : [];

  const visibleItems = limit ? safeItems.slice(0, limit) : safeItems;

  return (
    <section>
      <div className="block">
        <div className="container">
          {showTitle && (
            <div className="title1-wrapper text-center">
              <div className="title1-inner">
                <span>Your Favourite Food</span>
                <h2>Choose &amp; Enjoy</h2>
              </div>
            </div>
          )}

          <div className="row">
            {/* CARD 1 */}
            <div className="col-md-4 col-sm-6 col-lg-4">
              <div className="popular-dish-box wow fadeIn" data-wow-delay="0.2s">
                <div className="popular-dish-thumb">
                  <a href="/menu/veg">
                    <img
                      src="/assets/images/veg-menu.png"
                      alt="North Indian Veg Platter"
                      loading="lazy"
                    />
                  </a>

                  <span className="post-rate brd-rd2">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <rect
                        x="1"
                        y="1"
                        width="14"
                        height="14"
                        rx="2"
                        stroke="green"
                        fill="none"
                        strokeWidth="2"
                      />
                      <circle cx="8" cy="8" r="3" fill="green" />
                    </svg>
                  </span>
                </div>

                <div className="popular-dish-info card-content" style={{ padding: "10px" }}>
                  <h4>
                    <Link href="/menu/veg">Veg Menu Platter</Link>
                  </h4>

                  <p
                    style={{
                      overflow: "hidden",
                      textAlign: "justify",
                      marginBottom: "5px",
                    }}
                  >
                    A wholesome vegetarian meal with steamed rice, protein-rich
                    masoor dal, creamy spinach paneer, and flavorful paneer
                    bhurji.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                     <Link href="/menu/veg"><button
                      className="brd-rd2"
                      style={{
                        padding: "12px 26px",
                        backgroundColor: "#012169",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      View All
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-4 col-sm-6 col-lg-4">
              <div className="popular-dish-box wow fadeIn" data-wow-delay="0.4s">
                <div className="popular-dish-thumb">
                  <a href="/menu/non-veg">
                    <img
                      src="/assets/images/non-veg-img.png"
                      alt="Mughlai Meal Box"
                      loading="lazy"
                    />
                  </a>

                  <span className="post-rate brd-rd2">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <rect
                        x="1"
                        y="1"
                        width="14"
                        height="14"
                        rx="2"
                        stroke="red"
                        fill="none"
                        strokeWidth="2"
                      />
                      <circle cx="8" cy="8" r="3" fill="red" />
                    </svg>
                  </span>
                </div>

                <div className="popular-dish-info card-content" style={{ padding: "10px" }}>
                  <h4>
                    <Link href="/menu/non-veg">Non-Veg Menu Platter</Link>
                  </h4>

                  <p
                    style={{
                      overflow: "hidden",
                      textAlign: "justify",
                      marginBottom: "5px",
                    }}
                  >
                    A wholesome North Indian meal with steamed rice,
                    protein-rich masoor dal, creamy spinach and cottage cheese,
                    and flavorful Mughlai chicken.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Link href="/menu/non-veg"><button
                      className="brd-rd2"
                      style={{
                        padding: "12px 26px",
                        backgroundColor: "#012169",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      View All
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-md-4 col-sm-6 col-lg-4">
              <div className="popular-dish-box wow fadeIn" data-wow-delay="0.6s">
                <div className="popular-dish-thumb">
                  <a href="/menu/non-veg">
                    <img
                      src="/assets/images/additional_items.png"
                      alt="Coke"
                      loading="lazy"
                    />
                  </a>
                </div>

                <div className="popular-dish-info card-content" style={{ padding: "10px" }}>
                  <h4>
                    <Link href="/menu/non-veg">Additional Items</Link>
                  </h4>

                  <p
                    style={{
                      overflow: "hidden",
                      textAlign: "justify",
                      marginBottom: "5px",
                    }}
                  >
                    Chilled Coca-Cola delivers refreshing fizz, bold sweetness,
                    instant energy, and classic happiness.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Link href="/menu/non-veg"><button
                      className="brd-rd2"
                      style={{
                        padding: "12px 26px",
                        backgroundColor: "#012169",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      View All
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
