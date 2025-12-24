"use client";

import { useState, useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import Loader from "../components/Loader";
import ConfirmModal from "../components/ConfirmModal";
import Link from "next/link";
import {
  Trash2,
  CalendarDays,
  Utensils,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

export default function CartPage() {
  const { cart, loading, initialized, removeCartItem } = useContext(CartContext);

  // ================== Confirm Modal State ==================
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteClick = (itemId) => {
    setItemToDelete(itemId);
    setModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;

    setModalOpen(false);
    await removeCartItem(itemToDelete); // context handles optimistic removal
    setItemToDelete(null);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setItemToDelete(null);
  };

  // ================== LOADING STATE ==================
  if (!initialized) {
    return (
      <section>
        <PageBanner
          title="Cart"
          subtitle="Review your order"
          background="/assets/images/group-2.jpg"
          showSearchForm={false}
        />
        <BreadCrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
        <div className="container text-center py-5">
          <Loader />
        </div>
      </section>
    );
  }

  const hasCart = cart?.items?.length > 0;

  // ================== EMPTY CART ==================
  if (!hasCart) {
    return (
      <section>
        <PageBanner
          title="Cart"
          subtitle="Review your order"
          background="/assets/images/group-2.jpg"
          showSearchForm={false}
        />
        <BreadCrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

        <div className="container text-center py-5">
          <ShoppingCart size={72} className="text-muted mb-3" />
          <h3>Your cart is empty</h3>
          <p className="text-muted" style={{ display: "inherit" }}>
            Looks like you haven’t added any meals yet.
          </p>
          <Link href="/menu" className="btn btn-danger mt-3">
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  const canCheckout = cart?.total_cart_amount && Number(cart.total_cart_amount) > 0;

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
          {/* ================= LEFT SIDE ================= */}
          <div className="col-md-8">
            {cart.items.map((item) => (
              <div key={item._id} className="card cart-item mb-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-2 text-capitalize">{item.subscription_type} Subscription</h5>

                    <div className="text-muted small d-flex gap-3">
                      <span className="d-flex align-items-center gap-1">
                        <CalendarDays size={16} /> {item.weeks} Weeks
                      </span>

                      <span className="d-flex align-items-center gap-1">
                        <Utensils size={16} /> {item.meal_count} Meals
                      </span>
                    </div>
                  </div>

                  <div className="text-end d-flex align-items-center gap-3">
                    <div className="price">£{item.item_total_price}</div>

                    <button
                      className="delete-btn"
                      disabled={loading}
                      onClick={() => handleDeleteClick(item._id)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
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
                  <span>£{cart.total_cart_amount}</span>
                </li>

                <li>
                  Delivery
                  <span className="text-success">FREE</span>
                </li>

                <li className="total">
                  Total
                  <span>£{cart.total_cart_amount}</span>
                </li>
              </ul>

              <Link
                href={canCheckout ? "/checkout" : "#"}
                className={`btn btn-danger btn-lg w-100 mt-3 ${
                  !canCheckout ? "disabled" : ""
                }`}
              >
                Proceed to Checkout
                <ArrowRight size={18} className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONFIRM MODAL ================= */}
      <ConfirmModal
        open={modalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to remove this subscription from your cart?"
      />

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
          color: #012169;
        }

        .delete-btn {
          background: transparent;
          border: none;
          color: #dc3545;
          padding: 6px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .delete-btn:hover {
          background: rgba(220, 53, 69, 0.1);
          transform: scale(1.1);
        }

        .delete-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cart-summary {
          background: #fff;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
          top: 100px;
          z-index: 1;
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
