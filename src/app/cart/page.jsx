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

  // const hasSubscription = !!cart?.subscription;
  // const hasAddons = cart?.additional_items?.length > 0;
  // const hasCart = hasSubscription || hasAddons;

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

  // const canCheckout =
  //   cart?.totals?.grand_total &&
  //   Number(cart.totals.grand_total) > 0;


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

      <BreadCrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

      <div className="container py-5">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-md-8">
            {cart.items.map((item) => (
              <div key={item._id} className="card mb-3">
                <div className="card-body">
                  <h5 className="text-capitalize">
                    {item.subscription_type} Subscription
                  </h5>

                  <p className="mb-1">
                    <strong>Weeks:</strong> {item.weeks}
                  </p>

                  <p className="mb-1">
                    <strong>Meals:</strong> {item.meal_count}
                  </p>

                  <p className="mb-1">
                    <strong>Price:</strong> ₹{item.item_total_price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-4">
            <div className="cart-summary">
              <h4>Order Summary</h4>

              <ul>
                <li className="total">
                  Total Amount
                  <span>₹{cart.total_cart_amount}</span>
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
