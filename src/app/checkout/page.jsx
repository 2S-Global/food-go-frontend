"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import Loader from "../components/Loader";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  // === ALL HOOKS AT THE TOP - UNCONDITIONAL ===
  const context = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // === EARLY RETURNS AFTER HOOKS ===
  if (!context) {
    return (
      <section>
        <PageBanner
          title="Checkout"
          subtitle="Complete your order"
          background="/assets/images/topbg.jpg"
          showSearchForm={false}
        />
        <div className="container text-center py-5">
          <h3>Cart system unavailable. Please try again.</h3>
          <button onClick={() => router.push("/cart")} className="btn btn-danger mt-3">
            Back to Cart
          </button>
        </div>
      </section>
    );
  }

  const { cart, initialized, loading } = context;

  if (!initialized || loading) {
    return (
      <section>
        <PageBanner
          title="Checkout"
          subtitle="Complete your order"
          background="/assets/images/topbg.jpg"
          showSearchForm={false}
        />
        <div className="container text-center py-5" style={{ minHeight: "500px" }}>
          <Loader />
          <h4 className="mt-4 text-muted">Loading checkout...</h4>
        </div>
      </section>
    );
  }

  const cartItems = cart?.items || [];
  const subtotal = Number(cart?.total_cart_amount || 0);

  if (cartItems.length === 0) {
    return (
      <section>
        <PageBanner
          title="Checkout"
          subtitle="Complete your order"
          background="/assets/images/topbg.jpg"
          showSearchForm={false}
        />
        <BreadCrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Cart", href: "/cart" },
            { label: "Checkout" },
          ]}
        />
        <div className="container text-center py-5">
          <h3>Your cart is empty</h3>
          <p className="text-muted">Add some meals to continue.</p>
          <a href="/menu" className="btn btn-danger mt-3">
            Browse Menu
          </a>
        </div>
      </section>
    );
  }

  // === HELPER FUNCTIONS ===
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const deliveryCharge = 40;
  const total = subtotal + deliveryCharge;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const required = [
      "firstName", "lastName", "email", "phone",
      "address", "city", "state", "zipCode",
      "cardName", "cardNumber", "cardExpiry", "cardCVV"
    ];

    for (const field of required) {
      if (!formData[field]?.trim()) {
        alert("Please fill in all required fields.");
        setIsSubmitting(false);
        return;
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Order placed:", { formData, cart, total });
      alert(`Order placed successfully! 🎉\nOrder ID: #${Date.now()}`);

      localStorage.removeItem("foodAppCart"); // adjust key if different
      router.push("/");
    } catch (error) {
      alert("Order failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // === MAIN RENDER ===
  return (
    <section>
      <PageBanner
        title="Checkout"
        subtitle="Complete your order"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout" },
        ]}
      />

      <div className="container" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
        <div className="row">
          {/* Checkout Form */}
          <div className="col-md-8">
            <div className="checkout-form">
              <h3 style={{ marginBottom: "30px" }}>Delivery Information</h3>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name *</label>
                    <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name *</label>
                    <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                </div>

                {/* Contact */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number *</label>
                    <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label className="form-label">Delivery Address *</label>
                  <input type="text" className="form-control" name="address" value={formData.address} onChange={handleInputChange} required />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City *</label>
                    <input type="text" className="form-control" name="city" value={formData.city} onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">State *</label>
                    <input type="text" className="form-control" name="state" value={formData.state} onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">ZIP Code *</label>
                    <input type="text" className="form-control" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                  </div>
                </div>

                {/* Payment */}
                <h3 style={{ marginTop: "50px", marginBottom: "30px" }}>Payment Information</h3>

                <div className="mb-3">
                  <label className="form-label">Cardholder Name *</label>
                  <input type="text" className="form-control" name="cardName" value={formData.cardName} onChange={handleInputChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Card Number *</label>
                  <input type="text" className="form-control" name="cardNumber" placeholder="1234 5678 9012 3456" value={formData.cardNumber} onChange={handleInputChange} required />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry Date (MM/YY) *</label>
                    <input type="text" className="form-control" name="cardExpiry" placeholder="MM/YY" value={formData.cardExpiry} onChange={handleInputChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV *</label>
                    <input type="text" className="form-control" name="cardCVV" maxLength="4" placeholder="123" value={formData.cardCVV} onChange={handleInputChange} required />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger btn-lg w-100 mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing Order..." : `Place Order - £${total}`}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-md-4">
            <div className="order-summary">
              <h4>Order Summary</h4>

              <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "20px" }}>
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "12px 0",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <div>
                      <strong>
                        {item.subscription_type
                          ? `${item.subscription_type === "veg" ? "Veg" : "Non-Veg"} Subscription`
                          : "Meal Plan"}
                      </strong>
                      <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#666" }}>
                        {item.weeks} Weeks • {item.meal_count} Meals
                      </p>
                    </div>
                    <strong>£{item.item_total_price}</strong>
                  </div>
                ))}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0" }}>
                <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span>Subtotal</span>
                  <span>£{subtotal}</span>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span>Delivery</span>
                  <span>£{deliveryCharge}</span>
                </li>
                <li style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "15px",
                  borderTop: "2px solid #eee",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}>
                  <span>Total</span>
                  <span style={{ color: "#d32f2f" }}>£{total}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .checkout-form,
        .order-summary {
          background: #fff;
          padding: 35px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .order-summary {
          position: sticky;
          top: 100px;
        }

        .form-label {
          font-weight: 600;
          color: #333;
        }

        .form-control {
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }

        .form-control:focus {
          border-color: #d32f2f;
          box-shadow: 0 0 0 0.2rem rgba(211, 47, 47, 0.2);
        }

        @media (max-width: 768px) {
          .order-summary {
            position: static;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}