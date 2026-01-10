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
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const computeAddonMealCount = (addon) => {
    if (!addon) return 0;

    // Prefer explicit delivery_count if available
    if (typeof addon.delivery_count === "number" && addon.delivery_count >= 0) {
      return (addon.quantity ?? 1) * addon.delivery_count;
    }

    // Prefer delivery_dates array if present
    if (Array.isArray(addon.delivery_dates) && addon.delivery_dates.length > 0) {
      return (addon.quantity ?? 1) * addon.delivery_dates.length;
    }

    // Fallback: compute from start/end and schedule type
    const start = addon.addon_start_date ? new Date(addon.addon_start_date) : null;
    const end = addon.addon_end_date ? new Date(addon.addon_end_date) : null;
    const qty = addon.quantity ?? 1;
    if (!start || !end || isNaN(start) || isNaN(end) || start > end) return 0;

    const countByStep = (stepDays) => {
      let count = 0;
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + stepDays)) {
        count += 1;
        // safety: prevent infinite loops
        if (count > 10000) break;
      }
      return count;
    };

    let occurrences = 0;
    switch (addon.addon_schedule_type) {
      case "daily":
        occurrences = countByStep(1);
        break;
      case "alternate":
        occurrences = countByStep(2);
        break;
      case "every_3_days":
        occurrences = countByStep(3);
        break;
      case "weekly":
        occurrences = countByStep(7);
        break;
      case "monthly": {
        let count = 0;
        for (let d = new Date(start); d <= end; d.setMonth(d.getMonth() + 1)) {
          count += 1;
          if (count > 10000) break;
        }
        occurrences = count;
        break;
      }
      case "once":
        occurrences = 1;
        break;
      default:
        occurrences = 0;
    }

    return occurrences * qty;
  };


  return (
    <>
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

      <section
        className="block less-spacing gray-bg"
        style={{ paddingTop: "0px" }}
      >
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
                          {new Date(order.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
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

                          <th>Meals</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th className="text-end">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items
                          .map((item) => {
                            if (!item.item_type) return null;

                            /* ================= ADDITIONAL ITEMS ================= */
                            if (item.item_type === "additional_item") {
                              return item.additional_items.map((addon) => (
                                <tr key={addon._id}>
                                  <td>
                                    <strong>{addon.item_id?.itemName}</strong>
                                  </td>
                              
                                  <td>{computeAddonMealCount(addon) ?? 0}</td>

                                  <td>{formatDate(addon.addon_start_date)}</td>

                                  <td>{formatDate(addon.addon_end_date)}</td>

                                  <td className="text-end">
                                    £{item.total_price}
                                  </td>
                                </tr>
                              ));
                            }

                            /* ================= SUBSCRIPTIONS ================= */
                            if (
                              item.item_type === "subscription" &&
                              item.subscription_type
                            ) {
                              const label = item.subscription_type
                                .replace(/_/g, " ")
                                .replace(/\bnon veg\b/i, "Non-veg")
                                .replace(/^./, (c) => c.toUpperCase());

                              return (
                                <tr key={item._id}>
                                  <td>
                                    <strong>{label}</strong>
                                  </td>
                        
                                  <td>{item.meal_count ?? "—"}</td>
                                  <td>{formatDate(item.start_date)}</td>
                                  <td>{formatDate(item.end_date)}</td>

                                  <td className="text-end">
                                    £{item.total_price}
                                  </td>
                                </tr>
                              );
                            }

                            return null;
                          })
                          .flat()
                          .filter(Boolean)}
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
    </>
  );
}
