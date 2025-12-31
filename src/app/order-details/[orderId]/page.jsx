"use client";

import { useParams } from "next/navigation";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import Link from "next/link";

export default function OrderDetailsPage() {
  const { orderId } = useParams();

  // 🔹 TEMP: Mock order data
  const order = {
    orderId,
    transactionId: "#30737723",
    date: "Aug 17, 2017",
    customerName: "John Doe",
    email: "john@example.com",
    phone: "+44 123 456 789",
    address: "221B Baker Street, London",
    items: [
      {
        name: "Veg Subscription",
        weeks: 4,
        meals: 20,
        price: 70,
      },
    ],
    subtotal: 70,
    delivery: 0,
    total: 70,
    status: "Completed",
  };

  return (
    <section>
      {/* ===== Banner ===== */}
      <PageBanner
        title="Order Details"
        subtitle={`Order ID: ${order.orderId}`}
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
                    {order.status}
                  </span>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <p className="mb-1 text-muted">Order ID</p>
                    <strong>{order.orderId}</strong>
                  </div>
                  <div className="col-md-6 mb-2">
                    <p className="mb-1 text-muted">Transaction ID</p>
                    <strong>{order.transactionId}</strong>
                  </div>
                  <div className="col-md-6 mb-2">
                    <p className="mb-1 text-muted">Order Date</p>
                    <strong>{order.date}</strong>
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
                      {order.items.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <strong>{item.name}</strong>
                          </td>
                          <td>{item.weeks}</td>
                          <td>{item.meals}</td>
                          <td className="text-end">£{item.price}</td>
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
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h4 className="mb-3">Customer Details</h4>

                <p className="mb-1">
                  <strong>{order.customerName}</strong>
                </p>
                <p className="mb-1 text-muted">{order.email}</p>
                <p className="mb-1 text-muted">{order.phone}</p>
                <p className="mb-0 text-muted">{order.address}</p>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="mb-3">Payment Summary</h4>

                <ul className="list-unstyled mb-3">
                  <li className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>£{order.subtotal}</span>
                  </li>
                  <li className="d-flex justify-content-between mb-2">
                    <span>Delivery</span>
                    <span>£{order.delivery}</span>
                  </li>
                  <li className="d-flex justify-content-between border-top pt-2 fw-bold">
                    <span>Total</span>
                    <span>£{order.total}</span>
                  </li>
                </ul>

                <Link href="/dashboard" className="btn btn-danger w-100">
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
