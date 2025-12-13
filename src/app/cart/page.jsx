"use client";

import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";

export default function CartPage() {
  const context = useContext(CartContext);
  
  if (!context || !context.isHydrated) {
    return (
      <section>
        <PageBanner
          title="Cart"
          subtitle="Review your order"
          background="/assets/images/topbg.jpg"
          showSearchForm={false}
        />
        <BreadCrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
        <div className="container" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
          <div className="text-center" style={{ padding: "80px 0" }}>
            <h3>Loading cart...</h3>
          </div>
        </div>
      </section>
    );
  }

  const { cartItems, removeFromCart, increaseQty, decreaseQty, getCartTotal } = context;

  return (
    <section>
      <PageBanner
        title="Cart"
        subtitle="Review your order"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

      <div
        className="container"
        style={{ paddingTop: "40px", paddingBottom: "80px" }}
      >
        {/* If cart empty */}
        {cartItems.length === 0 ? (
          <div className="text-center" style={{ padding: "80px 0" }}>
            <h3>Your cart is empty</h3>
            <a href="/menu" className="btn btn-danger mt-3">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="row">
            {/* Cart Items */}
            <div className="col-md-8">
              <div className="cart-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="cart-item-info d-flex align-items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              style={{ width: 60, borderRadius: 6 }}
                            />
                            <span style={{ marginLeft: 10 }}>{item.name}</span>
                          </div>
                        </td>

                        <td>
                          <div className="qty-controls d-flex align-items-center">
                            <button
                              className="btn btn-sm btn-light"
                              onClick={() => decreaseQty(item.id)}
                            >
                              -
                            </button>

                            <span style={{ width: 35, textAlign: "center" }}>
                              {item.qty}
                            </span>

                            <button
                              className="btn btn-sm btn-light"
                              onClick={() => increaseQty(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td>₹{item.price}</td>

                        <td>₹{item.price * item.qty}</td>

                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => removeFromCart(item.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="col-md-4">
              <div className="cart-summary">
                <h4>Order Summary</h4>

                <ul>
                  <li>
                    Subtotal:
                    <span>₹{getCartTotal()}</span>
                  </li>

                  <li>
                    Delivery Charge:
                    <span>₹40</span>
                  </li>

                  <li className="total">
                    Grand Total:
                    <span>₹{getCartTotal() + 40}</span>
                  </li>
                </ul>

                <a href="/checkout" className="btn btn-danger btn-block mt-3">
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        )}
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
