"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import { getUserOrders } from "@/app/lib/api";
import Loader from "@/app/components/Loader";

export default function StatementsPage() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState(null);

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
  ];

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    applySort();
  }, [orders, sortOption]);

  const fetchOrders = async () => {
    try {
      const res = await getUserOrders();
      setOrders(res?.data || []);
    } catch (error) {
      console.error("Order fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const applySort = () => {
    if (!sortOption) {
      setFilteredOrders([...orders]);
    } else {
      const sorted = [...orders].sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();

        if (sortOption.value === "newest") return dateB - dateA;
        if (sortOption.value === "oldest") return dateA - dateB;

        return 0;
      });
      setFilteredOrders(sorted);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="tabs-wrp brd-rd5">
      {/* ===== Heading + Dropdown ===== */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 itemProp="headline" className="mb-0">
          STATEMENTS
        </h4>
        <div style={{ width: "200px" }}>
          <Select
            options={sortOptions}
            value={sortOption}
            onChange={setSortOption}
            placeholder="Sort by"
            isClearable
          />
        </div>
      </div>

      {/* Statement Table */}
      <div className="statement-table">
        <table>
          <thead>
            <tr>
              <th>TRANSACTION ID</th>
              <th>ORDER ID</th>
              <th>DATE</th>
              <th>DETAIL</th>
              <th>AMOUNT</th>
              <th>VIEW</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  No statements found
                </td>
              </tr>
            )}

            {filteredOrders.map((order) => (
              <tr key={order._id}>
                <td>{order.payment_id || "—"}</td>
                <td>{order.order_number}</td>
                <td>
                  {new Date(order.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                {/* <td>
                  {order.items.map((item) => item.subscription_type).join(", ")}
                </td> */}
                <td>
                  {Array.isArray(order.items)
                    ? order.items
                        .map((item) => {
                          // 1️⃣ Additional item (no subscription_type)
                          if (item.item_type === "additional_item") {
                            return "Additional Item";
                          }

                          // 2️⃣ Subscription item
                          if (
                            item.item_type === "subscription" &&
                            item.subscription_type
                          ) {
                            let text = item.subscription_type.replace(
                              /_/g,
                              " "
                            );

                            if (text.toLowerCase() === "non veg") {
                              return "Non-veg";
                            }

                            return text.charAt(0).toUpperCase() + text.slice(1);
                          }

                          // 3️⃣ Fallback (summary or malformed item)
                          return null;
                        })
                        .filter(Boolean)
                        .join(", ")
                    : "—"}
                </td>

                <td>
                  <span className="red-clr">${order.total_price}</span>
                </td>
                <td>
                  <Link
                    href={`/order-details/${order._id}`}
                    className="view-order-btn"
                    title="View Order Details"
                  >
                    <i className="fa fa-eye" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
