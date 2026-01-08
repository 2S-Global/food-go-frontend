"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import Loader from "../components/Loader";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCartCountStore } from "@/app/store/cartCountStore";
export const getAuthHeaders = () => {
  if (typeof window === "undefined") return {};

  const token = localStorage.getItem("auth_token");

  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export default function CheckoutPage() {
  const router = useRouter();
  const [orderCompleted, setOrderCompleted] = useState(false);

    const { fetchCartCount } = useCartCountStore();

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

  const fieldRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    address: useRef(null),
    city: useRef(null),
    state: useRef(null),
    zipCode: useRef(null),
    cardName: useRef(null),
    cardNumber: useRef(null),
    cardExpiry: useRef(null),
    cardCVV: useRef(null),
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // === EARLY RETURNS AFTER HOOKS ===
  if (!context) {
    return (
      <section>
        <PageBanner
          title="Checkout"
          subtitle="Complete your order"
          background="/assets/images/group-2.jpg"
          showSearchForm={false}
        />
        <div className="container text-center py-5">
          <h3>Cart system unavailable. Please try again.</h3>
          <button
            onClick={() => router.push("/cart")}
            className="btn btn-danger mt-3"
          >
            Back to Cart
          </button>
        </div>
      </section>
    );
  }

  const { cart, initialized, loading, refreshCart } = context;

  if (!initialized || loading) {
    return (
      <section>
        <PageBanner
          title="Checkout"
          subtitle="Complete your order"
          background="/assets/images/group-2.jpg"
          showSearchForm={false}
        />
        <div
          className="container text-center py-5"
          style={{ minHeight: "500px" }}
        >
          <Loader />
          <h4 className="mt-4 text-muted">Loading checkout...</h4>
        </div>
      </section>
    );
  }

  const cartItems = cart?.items || [];
  const subtotal = Number(cart?.total_cart_amount || 0);

if (cartItems.length === 0 && !orderCompleted) {
  return (
    <section>
      <PageBanner
        title="Checkout"
        subtitle="Complete your order"
        background="/assets/images/group-2.jpg"
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

    let updatedValue = value;

    if (name === "firstName" || name === "lastName" || name === "cardName") {
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }
    // ✅ Phone: allow only numbers + max 10 digits
    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }
    if (name === "zipCode") {
      updatedValue = value.replace(/\D/g, "").slice(0, 6);
    }
    if (name === "cardNumber") {
      updatedValue = value.replace(/\D/g, "").slice(0, 16);
    }
    // ✅ CARD EXPIRY (MM/YY)
    if (name === "cardExpiry") {
      // Remove non-digits
      let digits = value.replace(/\D/g, "");

      // Limit to 4 digits (MMYY)
      digits = digits.slice(0, 4);

      // Auto add slash
      if (digits.length > 2) {
        updatedValue = `${digits.slice(0, 2)}/${digits.slice(2)}`;
      } else {
        updatedValue = digits;
      }
    }
    if (name === "cardCVV") {
      // Only numbers, max 4 digits
      updatedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const deliveryCharge = 0;
  const total = subtotal + deliveryCharge;

  const validateForm = () => {
    const orderedFields = [
      ["firstName", "First name is required"],
      ["lastName", "Last name is required"],
      ["email", "Email is required"],
      ["phone", "Phone number is required"],
      ["address", "Delivery address is required"],
      ["city", "City is required"],
      ["state", "State is required"],
      ["zipCode", "ZIP code is required"],
      ["cardName", "Cardholder name is required"],
      ["cardNumber", "Card number is required"],
      ["cardExpiry", "Expiry date is required"],
      ["cardCVV", "CVV is required"],
    ];

    for (const [field, message] of orderedFields) {
      if (!formData[field]?.trim()) {
        setErrors({ [field]: message });

        fieldRefs[field]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        fieldRefs[field]?.current?.focus();
        return false;
      }
    }

    // Extra format checks (after required checks)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors({ email: "Enter a valid email address" });
      fieldRefs.email.current.focus();
      return false;
    }

    if (formData.phone.length < 10) {
      setErrors({ phone: "Phone number must be at least 10 digits" });
      fieldRefs.phone.current.focus();
      return false;
    }

    if (formData.cardNumber.replace(/\s/g, "").length < 16) {
      setErrors({ cardNumber: "Card number must be at least 16 digits" });
      fieldRefs.cardNumber.current.focus();
      return false;
    }

    if (formData.cardCVV.length < 3) {
      setErrors({ cardCVV: "CVV must be 3 or 4 digits" });
      fieldRefs.cardCVV.current.focus();
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      ...formData,
      amount: total,
      payment_method: "online",
    };

    // console.log("FLAT PAYLOAD 👉", payload);

    const toastId = toast.loading("Processing your order...");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/verify/paynow`,
        {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Order failed");
      }

      toast.success("🎉 Order placed successfully!", { id: toastId });
      setOrderCompleted(true); // ✅ block empty-cart UI

      await refreshCart();
      fetchCartCount();
      setTimeout(() => {
        router.push("/dashboard#statement");
      }, 2000);
    } catch (error) {
      console.error("ORDER ERROR ❌", error);

      toast.error(error.message || "Order failed. Please try again.", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // === MAIN RENDER ===
  return (
    <section>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <PageBanner
        title="Checkout"
        subtitle="Complete your order"
        background="/assets/images/group-2.jpg"
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
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      ref={fieldRefs.firstName}
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && (
                      <small className="text-danger">{errors.firstName}</small>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      ref={fieldRefs.lastName}
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <small className="text-danger">{errors.lastName}</small>
                    )}
                  </div>
                </div>

                {/* Contact */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      ref={fieldRefs.email}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      ref={fieldRefs.phone}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && (
                      <small className="text-danger">{errors.phone}</small>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label className="form-label">Delivery Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    ref={fieldRefs.address}
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  {errors.address && (
                    <small className="text-danger">{errors.address}</small>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      ref={fieldRefs.city}
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    {errors.city && (
                      <small className="text-danger">{errors.city}</small>
                    )}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">State *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      ref={fieldRefs.state}
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                    {errors.state && (
                      <small className="text-danger">{errors.state}</small>
                    )}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">ZIP Code *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipCode"
                      ref={fieldRefs.zipCode}
                      value={formData.zipCode}
                      onChange={handleInputChange}
                    />
                    {errors.zipCode && (
                      <small className="text-danger">{errors.zipCode}</small>
                    )}
                  </div>
                </div>

                {/* Payment */}
                <h3 style={{ marginTop: "50px", marginBottom: "30px" }}>
                  Payment Information
                </h3>

                <div className="mb-3">
                  <label className="form-label">Cardholder Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cardName"
                    ref={fieldRefs.cardName}
                    value={formData.cardName}
                    onChange={handleInputChange}
                  />
                  {errors.cardName && (
                    <small className="text-danger">{errors.cardName}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Card Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cardNumber"
                    ref={fieldRefs.cardNumber}
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                  {errors.cardNumber && (
                    <small className="text-danger">{errors.cardNumber}</small>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry Date (MM/YY) *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cardExpiry"
                      ref={fieldRefs.cardExpiry}
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                    />
                    {errors.cardExpiry && (
                      <small className="text-danger">{errors.cardExpiry}</small>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cardCVV"
                      maxLength="4"
                      ref={fieldRefs.cardCVV}
                      placeholder="123"
                      value={formData.cardCVV}
                      onChange={handleInputChange}
                    />
                    {errors.cardCVV && (
                      <small className="text-danger">{errors.cardCVV}</small>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger btn-lg w-100 mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Processing Order..."
                    : `Place Order - £${total}`}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-md-4">
            <div className="order-summary">
              <h4>Order Summary</h4>

              <div
                style={{
                  maxHeight: "300px",
                  overflowY: "auto",
                  marginBottom: "20px",
                }}
              >
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
                          ? `${
                              item.subscription_type === "veg"
                                ? "Veg"
                                : "Non-Veg"
                            } Subscription`
                          : "Meal Plan"}
                      </strong>
                      <p
                        style={{
                          margin: "4px 0 0",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        {item.weeks} Weeks • {item.meal_count} Meals
                      </p>
                    </div>
                    <strong>£{item.item_total_price}</strong>
                  </div>
                ))}
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0" }}>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span>Subtotal</span>
                  <span>£{subtotal}</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span>Delivery</span>
                  <span>£{deliveryCharge}</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "15px",
                    borderTop: "2px solid #eee",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
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
