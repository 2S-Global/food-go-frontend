"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const context = useContext(CartContext);
  const router = useRouter();
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

  if (!context || !context.isHydrated) {
    return (
      <section>
        <PageBanner
          title="Checkout"
          subtitle="Complete your order"
          background="/assets/images/group-2.jpg"
          showSearchForm={false}
        />
        <div
          className="container"
          style={{ paddingTop: "40px", paddingBottom: "80px" }}
        >
          <div className="text-center" style={{ padding: "80px 0" }}>
            <h3>Loading checkout...</h3>
          </div>
        </div>
      </section>
    );
  }

  const { cartItems, getCartTotal } = context;

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
        <div
          className="container"
          style={{ paddingTop: "40px", paddingBottom: "80px" }}
        >
          <div className="text-center" style={{ padding: "80px 0" }}>
            <h3>Your cart is empty</h3>
            <a href="/menu" className="btn btn-danger mt-3">
              Continue Shopping
            </a>
          </div>
        </div>
      </section>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode ||
      !formData.cardNumber ||
      !formData.cardExpiry ||
      !formData.cardCVV
    ) {
      alert("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Validate phone
    if (formData.phone.length < 10) {
      alert("Please enter a valid phone number");
      setIsSubmitting(false);
      return;
    }

    // Validate card number
    if (formData.cardNumber.replace(/\s/g, "").length < 13) {
      alert("Please enter a valid card number");
      setIsSubmitting(false);
      return;
    }

    // Simulate order processing
    try {
      // Here you would typically send the order to your backend
      const orderData = {
        customerInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
        },
        items: cartItems,
        total: getCartTotal() + 40,
        timestamp: new Date().toISOString(),
      };

      console.log("Order placed:", orderData);
      alert("Order placed successfully! Order ID: #" + Date.now());

      // Redirect to order confirmation
      localStorage.removeItem("foodAppCart");
      router.push("/");
    } catch (error) {
      alert("Error placing order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const deliveryCharge = 40;
  const subtotal = getCartTotal();
  const total = subtotal + deliveryCharge;

  return (
    <section>
      <PageBanner
        title="Checkout"
        subtitle="Complete your order"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[{ label: "Home", href: "/" }, { label: "Checkout" }]}
      />

      <div
        className="container"
        style={{ paddingTop: "40px", paddingBottom: "80px" }}
      >
        <div className="row">
          {/* Checkout Form */}
          <div className="col-md-8">
            <div className="checkout-form">
              <h3 style={{ marginBottom: "30px" }}>Delivery Information</h3>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>First Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label>Delivery Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter delivery address"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>City *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter city"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group mb-3">
                      <label>State *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Enter state"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group mb-3">
                      <label>ZIP Code *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="ZIP Code"
                        required
                      />
                    </div>
                  </div>
                </div>

                <h3 style={{ marginTop: "40px", marginBottom: "30px" }}>
                  Payment Information
                </h3>

                <div className="form-group mb-3">
                  <label>Cardholder Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="Name on card"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Card Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>Expiry Date (MM/YY) *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label>CVV *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cardCVV"
                        value={formData.cardCVV}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength="4"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger btn-lg mt-4"
                  disabled={isSubmitting}
                  style={{ width: "100%" }}
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-md-4">
            <div className="order-summary">
              <h4>Order Summary</h4>

              <div
                className="order-items"
                style={{
                  marginBottom: "20px",
                  maxHeight: "300px",
                  overflowY: "auto",
                }}
              >
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="order-item"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "15px",
                      paddingBottom: "10px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <div>
                      <p style={{ margin: 0 }}>
                        <strong>{item.name}</strong>
                      </p>
                      <p
                        style={{
                          margin: "5px 0 0 0",
                          color: "#666",
                          fontSize: "14px",
                        }}
                      >
                        x{item.qty}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ margin: 0 }}>
                        <strong>₹{item.price * item.qty}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0" }}>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    fontSize: "16px",
                  }}
                >
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </li>

                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    fontSize: "16px",
                  }}
                >
                  <span>Delivery Charge:</span>
                  <span>₹{deliveryCharge}</span>
                </li>

                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                    paddingTop: "15px",
                    borderTop: "2px solid #eee",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  <span>Grand Total:</span>
                  <span style={{ color: "#ff6b6b" }}>₹{total}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .checkout-form {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        .order-summary {
          background: #fff;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 20px;
        }

        .form-group label {
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
        }

        .form-control {
          border-radius: 5px;
          border: 1px solid #ddd;
          padding: 10px 12px;
          font-size: 14px;
        }

        .form-control:focus {
          border-color: #ff6b6b;
          box-shadow: 0 0 0 0.2rem rgba(255, 107, 107, 0.25);
        }

        .btn {
          border-radius: 5px;
          font-weight: 600;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .order-summary {
            position: static;
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  );
}
