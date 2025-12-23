"use client";

import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import Loader from "../components/Loader";
import Link from "next/link";

export default function CartPage() {
  const { cart, loading, initialized, clearCart } =
    useContext(CartContext);

  /* ==========================
     LOADING STATE
  ========================== */
  if (!initialized) {
    return (
      <section>
        <PageBanner
          title="Cart"
          subtitle="Review your order"
          background="/assets/images/group-2.jpg"
          showSearchForm={false}
        />
        <BreadCrumbs
          items={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        />
        <div className="container text-center py-5">
          <Loader />
        </div>
      </section>
    );
  }

  const hasCart = cart?.items?.length > 0;

  /* ==========================
     EMPTY CART
  ========================== */
  if (!hasCart) {
    return (
      <section>
        <PageBanner
          title="Cart"
          subtitle="Review your order"
          background="/assets/images/group-2.jpg"
          showSearchForm={false}
        />
        <BreadCrumbs
          items={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        />

        <div className="container text-center py-5">
          <img
            src="/assets/images/empty-cart.svg"
            alt="Empty Cart"
            className="empty-cart-img"
          />
          <h3 className="mt-4">Your cart is empty</h3>
          <p className="text-muted">
            Looks like you haven’t added any meals yet.
          </p>
          <Link href="/menu" className="btn btn-danger mt-3">
            Browse Menu
          </Link>
        </div>

        <style jsx>{`
          .empty-cart-img {
            max-width: 220px;
            opacity: 0.9;
          }
        `}</style>
      </section>
    );
  }

  const canCheckout =
    cart?.total_cart_amount && Number(cart.total_cart_amount) > 0;

  return (
    <section>
      <PageBanner
        title="Cart"
        subtitle="Review your order"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[{ label: "Home", href: "/" }, { label: "Cart" }]}
      />

      <div className="container py-5">
        <div className="row">
          {/* ================= LEFT SIDE ================= */}
          <div className="col-md-8">
            {cart.items.map((item) => (
              <div key={item._id} className="card cart-item mb-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-2 text-capitalize">
                       {item.subscription_type} Subscription
                    </h5>

                    <div className="text-muted small">
                      <span className="me-3">
                        📅 {item.weeks} Weeks
                      </span>
                      <span>🍽 {item.meal_count} Meals</span>
                    </div>
                  </div>

                  <div className="text-end">
                    <div className="price">
                      ₹{item.item_total_price}
                    </div>
                    {/* <span className="badge bg-success mt-2">
                      Active
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="col-md-4">
            <div className="cart-summary sticky-top">
              <h4 className="mb-4">Order Summary</h4>

              <ul className="summary-list">
                <li>
                  Subtotal
                  <span>₹{cart.total_cart_amount}</span>
                </li>

                <li>
                  Delivery
                  <span className="text-success">FREE</span>
                </li>

                <li className="total">
                  Total
                  <span>₹{cart.total_cart_amount}</span>
                </li>
              </ul>

              <Link
                href={canCheckout ? "/checkout" : "#"}
                className={`btn btn-danger btn-lg w-100 mt-3 ${
                  !canCheckout ? "disabled" : ""
                }`}
              >
                Proceed to Checkout →
              </Link>

              <button
                className="btn btn-outline-secondary w-100 mt-2"
                disabled={loading}
                onClick={() => {
                  if (
                    confirm(
                      "Are you sure you want to clear your cart?"
                    )
                  ) {
                    clearCart();
                  }
                }}
              >
                {loading ? "Clearing..." : "Clear Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .cart-item {
          border-radius: 14px;
          transition: all 0.2s ease;
          border: 1px solid #eee;
        }

        .cart-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
        }

        .price {
          font-size: 22px;
          font-weight: 700;
          color: #dc3545;
        }

        .cart-summary {
          background: #fff;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
          top: 100px;
        }

        .summary-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .summary-list li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
          font-size: 15px;
        }

        .summary-list li.total {
          font-size: 20px;
          font-weight: bold;
          border-top: 1px solid #eee;
          padding-top: 14px;
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}
