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

  const hasSubscription = !!cart?.subscription;
  const hasAddons = cart?.additional_items?.length > 0;
  const hasCart = hasSubscription || hasAddons;

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
          <h3>Your cart is empty</h3>
          <Link href="/menu" className="btn btn-danger mt-3">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  /* ==========================
     HELPERS
  ========================== */
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const canCheckout =
    cart?.totals?.grand_total &&
    Number(cart.totals.grand_total) > 0;

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
          {/* LEFT SIDE */}
          <div className="col-md-8">
            {/* SUBSCRIPTION */}
            {hasSubscription && (
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="mb-2 text-capitalize">
                    {cart.subscription.subscription_type} Subscription
                  </h5>
                  <p className="mb-1">
                    <strong>Start:</strong>{" "}
                    {formatDate(cart.subscription.start_date)}
                  </p>
                  <p className="mb-1">
                    <strong>End:</strong>{" "}
                    {formatDate(cart.subscription.end_date)}
                  </p>
                </div>
              </div>
            )}

            {/* ADDITIONAL ITEMS */}
            {hasAddons && (
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Additional Items</h5>

                  {cart.additional_items.map((item) => (
                    <div
                      key={item._id}
                      className="d-flex justify-content-between align-items-center border-bottom py-2"
                    >
                      <div>
                        <p className="mb-1">{item.item_name}</p>
                        <small className="text-muted">
                          {item.addon_schedule_type
                            .replaceAll("_", " ")}{" "}
                          • Starts{" "}
                          {formatDate(item.addon_start_date)}
                        </small>
                      </div>

                      <div>Qty: {item.quantity}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-4">
            <div className="cart-summary">
              <h4>Order Summary</h4>

              <ul>
                <li>
                  Subtotal
                  <span>
                    ₹{cart?.totals?.subtotal ?? "-"}
                  </span>
                </li>
                <li>
                  Delivery Charge
                  <span>
                    ₹{cart?.totals?.delivery_charge ?? "-"}
                  </span>
                </li>
                <li className="total">
                  Grand Total
                  <span>
                    ₹{cart?.totals?.grand_total ?? "-"}
                  </span>
                </li>
              </ul>

              <Link
                href={canCheckout ? "/checkout" : "#"}
                className={`btn btn-danger w-100 mt-3 ${
                  !canCheckout ? "disabled" : ""
                }`}
              >
                Proceed to Checkout
              </Link>

              <button
                className="btn btn-outline-danger w-100 mt-2"
                disabled={loading}
                onClick={clearCart}
              >
                {loading ? "Clearing..." : "Clear Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cart-summary {
          background: #fff;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        .cart-summary ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .cart-summary ul li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .cart-summary ul li.total {
          font-weight: bold;
          font-size: 18px;
        }
      `}</style>
    </section>
  );
}
