"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";

export default function MenuCard({ item, delay = 0, variant = "home" }) {
  const { addToCart } = useContext(CartContext);
  const [isHover, setIsHover] = useState(false);

  const cardClass =
    variant === "menu"
      ? "popular-dish-box style2 wow fadeIn"
      : "popular-dish-box wow fadeIn";

  const orderBtnClass = variant === "menu" ? "brd-rd4" : "brd-rd2";

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
    });
    alert(`${item.title} added to cart!`);
  };

  return (
    <div className="col-md-4 col-sm-6 col-lg-4">
      <div className={cardClass} data-wow-delay={`${delay}s`}>
        <div className="popular-dish-thumb">
          <Link href="/food-detail">
            <img src={item.image} alt={item.title} />
          </Link>

          <span className="post-rate yellow-bg brd-rd2">
            <i className="fa fa-star-o" /> {item.rating}
          </span>
        </div>

        <div className="popular-dish-info">
          <h4>
            <Link href="/food-detail">{item.title}</Link>
          </h4>

          <p>{item.description}</p>
          <span className="price">${item.price}</span>

          <div className="button-group" style={{ display: "flex", gap: "8px", marginBottom: "12px", float: "right" }}>
            {/* <Link href="/food-detail" className={orderBtnClass} style={{ flex: 1 }}>
              Order Now
            </Link> */}
            <button
              onClick={handleAddToCart}
              className={`${orderBtnClass}`}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={{
                flex: 1,
                padding: "10px 15px",
                backgroundColor: isHover ? "#ea1b25" : "black",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "20px",
                transition: "background-color 160ms ease",
              }}
            >
              Add to Cart
            </button>
          </div>

          <div className="restaurant-info">
            <img src={item.restaurantLogo} alt={item.restaurant} />
            <div className="restaurant-info-inner">
              <h6>
                <Link href="/restaurant-detail">
                  {item.restaurant}
                </Link>
              </h6>
              <span className="red-clr">{item.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
