"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/components/MySubscription.module.css";
import Loader from "@/app/components/Loader";

/* ======================
   AUTH HEADERS
====================== */
function getAuthHeaders() {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("auth_token");

  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
}

export default function MySubscription() {
  const today = new Date();

  const [weekStart, setWeekStart] = useState(getWeekStart(today));
  const [selectedDate, setSelectedDate] = useState(formatDate(today));
  const [menus, setMenus] = useState([]);
  const [additionalItems, setAdditionalItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ======================
     WEEK DATES
  ====================== */
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  /* ======================
     FETCH MENU
  ====================== */
  useEffect(() => {
    if (!selectedDate) return;

    const fetchMenu = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_URL}/api/weeklymenu/get-menu-by-date?date=${selectedDate}`,
          {
            headers: getAuthHeaders(),
          }
        );

        const json = await res.json();
        setMenus(json?.menus || []);
        setAdditionalItems(json?.additionalItems || []);
      } catch (err) {
        console.error("Menu fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [selectedDate, API_URL]);

  return (
    <div className={styles.wrapper}>
      {/* MONTH HEADER — FIXED */}
      <div className={styles.monthYear}>
        {formatMonthYear(new Date(selectedDate))}
      </div>

      {/* DATE SLIDER */}
      <div className={styles.dateSlider}>
        <button onClick={() => shiftDay(-1)} className={styles.arrow}>
          ‹
        </button>

        <div className={styles.dateRow}>
          {weekDates.map((date) => {
            const formatted = formatDate(date);
            return (
              <div
                key={formatted}
                className={`${styles.dateBox} ${
                  selectedDate === formatted ? styles.active : ""
                }`}
                onClick={() => setSelectedDate(formatted)}
              >
                <span className={styles.day}>
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span className={styles.date}>{date.getDate()}</span>
              </div>
            );
          })}
        </div>

        <button onClick={() => shiftDay(1)} className={styles.arrow}>
          ›
        </button>
      </div>

      <h4 className={styles.heading}>Your Meals</h4>

      {loading && <Loader />}

      {/* EMPTY STATE */}
      {!loading && menus.length === 0 && additionalItems.length === 0 && (
        <div
          style={{
            marginTop: "40px",
            padding: "30px 20px",
            textAlign: "center",
            color: "#6c757d",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "10px" }}>🍽️</div>
          <h5 style={{ fontWeight: 600, marginBottom: "6px", color: "#343a40" }}>
            No meals ordered
          </h5>
          <p style={{ fontSize: "14px", marginBottom: 0 }}>
            You don’t have any meals scheduled for this date.
          </p>
        </div>
      )}

      {/* SUBSCRIPTION MEALS */}
      {!loading &&
        menus.map((order, idx) => (
          <div key={idx} className={styles.orderBlock}>
            {order.lunch && <OrderCard meal="Lunch" data={order.lunch} />}
            {order.dinner && <OrderCard meal="Dinner" data={order.dinner} />}
          </div>
        ))}

      {/* ADDITIONAL ITEMS */}
      {!loading && additionalItems.length > 0 && (
        <div className={styles.orderBlock}>
          {additionalItems.map((add, i) => (
            <OrderCard
              key={i}
              meal="Additional Item"
              isAdditional
              data={{
                menuName: add.item.itemName,
                images: add.item.images,
                item1: `Price: £${add.item.itemPrice}`,
                item2: `Quantity: ${add.quantity}`,
                description: "",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );

  /* ======================
     SHIFT DAY
  ====================== */
  function shiftDay(step) {
    const newWeekStart = new Date(weekStart);
    newWeekStart.setDate(newWeekStart.getDate() + step);
    setWeekStart(newWeekStart);

    const current = new Date(selectedDate);
    current.setDate(current.getDate() + step);
    setSelectedDate(formatDate(current));
  }
}

/* ======================
   ORDER CARD
====================== */
function OrderCard({ meal, data, isAdditional }) {
  return (
    <div className={styles.orderCard}>
      <img
        src={data.images?.[0] || "/assets/images/popular-dish-img1.jpg"}
        className={styles.orderImg}
        alt={data.menuName}
      />

      <div className={styles.orderContent}>
        <h5>
          {meal} – {data.menuName}
        </h5>

        {data.description && (
          <div
            className={styles.orderDesc}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        )}

        <ul className={styles.items}>
          {data.item1 && <li>{data.item1}</li>}
          {data.item2 && <li>{data.item2}</li>}
        </ul>

        <span className={styles.badge}>
          {isAdditional ? "ADDITIONAL ITEM" : "SUBSCRIPTION"}
        </span>
      </div>
    </div>
  );
}

/* ======================
   UTILS
====================== */
function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay() || 7;
  d.setDate(d.getDate() - day + 1);
  return d;
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function formatMonthYear(date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}
