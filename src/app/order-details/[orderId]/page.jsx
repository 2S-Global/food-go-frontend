"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import Loader from "@/app/components/Loader";

import { getOrderDetails } from "@/app/lib/api";

export default function OrderDetailsPage() {
  const { orderId } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) fetchOrderDetails();
  }, [orderId]);

  const fetchOrderDetails = async () => {
    try {
      const res = await getOrderDetails(orderId);
      setOrder(res?.data);
    } catch (error) {
      console.error("Order details fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (!order) return <p className="text-center">Order not found</p>;

  return (
    <section>
      <style jsx>{`
        strong {
          color: #012169;
        }
      `}</style>

      {/* ===== Banner ===== */}
      <PageBanner
        title="Order Details"
        subtitle={`Order ID: ${order.order_number}`}
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      {/* ===== Breadcrumbs ===== */}
      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard" },
          { label: "Order Details" },
        ]}
      />

      <div className="container py-5">
        <div className="row g-4">
          {/* ================= LEFT SIDE ================= */}
          <div className="col-lg-8">
            {/* Order Info */}
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="mb-0">Order Information</h4>
                  <span className="badge bg-success px-3 py-2">
                    {order.payment_status}
                  </span>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex gap-2">
                      <span className="text-muted">Order ID:</span>
                      <strong>{order.order_number}</strong>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="d-flex gap-2">
                      <span className="text-muted">Payment Method:</span>
                      <strong className="text-capitalize">
                        {order.payment_method}
                      </strong>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="d-flex gap-2">
                      <span className="text-muted">Order Date:</span>
                      <strong>
                        {new Date(order.createdAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="mb-3">Ordered Items</h4>

                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Item</th>
                        <th>Weeks</th>
                        <th>Meals</th>
                        <th className="text-end">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item) => (
                        <tr key={item._id}>
                          <td>
                            <strong>
                              {item.subscription_type
                                .replace("_", " ")
                                .replace(/^./, (c) => c.toUpperCase())
                                .replace(/\bNon veg\b/i, "Non-veg")}
                            </strong>
                          </td>
                          <td>{item.weeks}</td>
                          <td>{item.meal_count}</td>
                          <td className="text-end">£{item.total_price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="col-lg-4">
            {/* Customer Info */}
            <div className="card mb-4 shadow-sm border-0">
              <div className="card-body">
                <h4 className="mb-4">Customer Details</h4>

                {/* Full Name */}
                <div className="d-flex mb-2">
                  <span className="text-muted me-2">Full Name:</span>
                  <strong>
                    {order.shipping_address.firstName}{" "}
                    {order.shipping_address.lastName}
                  </strong>
                </div>

                {/* Email */}
                <div className="d-flex mb-2">
                  <span className="text-muted me-2">Email:</span>
                  <span>{order.shipping_address.email}</span>
                </div>

                {/* Phone */}
                <div className="d-flex mb-3">
                  <span className="text-muted me-2">Phone:</span>
                  <span>{order.shipping_address.phone}</span>
                </div>

                {/* Address (multi-line is better UX) */}
                <div className="d-flex">
                  <span className="text-muted me-2">Address:</span>
                  <span className="lh-base">
                    {order.shipping_address.address},{" "}
                    {order.shipping_address.city},{" "}
                    {order.shipping_address.state} –{" "}
                    {order.shipping_address.zipCode}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="mb-3">Payment Summary</h4>

                <ul className="list-unstyled mb-3">
                  <li className="d-flex justify-content-between mb-2">
                    <span>Total</span>
                    <span>£{order.total_price}</span>
                  </li>
                </ul>

                <Link
                  href="/dashboard/statements"
                  className="btn btn-danger w-100"
                >
                  Back to Statements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
