"use client";

import { useParams } from "next/navigation";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import Link from "next/link";

export default function OrderDetailsPage() {
  const { orderId } = useParams();

  // 🔹 TEMP: Mock order data (replace with API later)
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
        {/* ===== Order Summary ===== */}
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="mb-3">Order Summary</h4>

            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Order ID:</strong> {order.orderId}
                </p>
                <p>
                  <strong>Transaction ID:</strong> {order.transactionId}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="text-success">{order.status}</span>
                </p>
              </div>

              <div className="col-md-6">
                <p>
                  <strong>Name:</strong> {order.customerName}
                </p>
                <p>
                  <strong>Email:</strong> {order.email}
                </p>
                <p>
                  <strong>Phone:</strong> {order.phone}
                </p>
                <p>
                  <strong>Address:</strong> {order.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Items Table ===== */}
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="mb-3">Ordered Items</h4>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Weeks</th>
                    <th>Meals</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.weeks}</td>
                      <td>{item.meals}</td>
                      <td>£{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ===== Price Summary ===== */}
        <div className="card">
          <div className="card-body">
            <h4 className="mb-3">Payment Summary</h4>

            <ul className="list-unstyled">
              <li className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>£{order.subtotal}</span>
              </li>
              <li className="d-flex justify-content-between mb-2">
                <span>Delivery</span>
                <span>£{order.delivery}</span>
              </li>
              <li className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>£{order.total}</span>
              </li>
            </ul>

            <Link href="/dashboard" className="btn btn-danger mt-3">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
