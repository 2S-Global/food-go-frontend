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

/* ======================
   MAIN COMPONENT
====================== */
export default function MySubscription() {
  const today = new Date();

  const [weekStart, setWeekStart] = useState(getWeekStart(today));
  const [selectedDate, setSelectedDate] = useState(formatDate(today));
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* Generate week */
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  /* Fetch menu */
  useEffect(() => {
    if (!selectedDate) return;

    const fetchMenu = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_URL}/api/weeklymenu/get-menu-by-date?date=${selectedDate}`,
          {
            method: "GET",
            headers: getAuthHeaders(),
          }
        );

        if (!res.ok) {
          if (res.status === 401) {
            localStorage.removeItem("auth_token");
            window.location.href = "/login";
          }
          throw new Error("Failed to fetch menu");
        }

        const json = await res.json();
        setMenus(json?.menus || []);
      } catch (error) {
        console.error("Menu fetch failed:", error);
        setMenus([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [selectedDate, API_URL]);

  return (
    <div className={styles.wrapper}>
      {/* ✅ Month + Year (ONLY ADDITION, NO STRUCTURE CHANGE) */}
      <div className={styles.monthYear}>{formatMonthYear(weekStart)}</div>

      {/* Date Slider */}
      <div className={styles.dateSlider}>
        <button
          onClick={() => !loading && shiftWeek(-7)}
          className={styles.arrow}
          disabled={loading}
        >
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
                } ${loading ? styles.disabled : ""}`}
                onClick={() => !loading && setSelectedDate(formatted)}
              >
                <span className={styles.day}>
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span className={styles.date}>{date.getDate()}</span>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => !loading && shiftWeek(7)}
          className={styles.arrow}
          disabled={loading}
        >
          ›
        </button>
      </div>

      <h4 className={styles.heading}>Your Meals</h4>

      {/* Loader */}
      {loading && <Loader />}

      {/* Empty */}
      {!loading && menus.length === 0 && (
        <div className={styles.emptyState}>
          🍽️ No meals planned for this day
        </div>
      )}

      {/* Orders */}
      {!loading &&
        menus.map((order) => (
          <div key={order.orderNumber} className={styles.orderBlock}>
            {order.lunch && <OrderCard meal="Lunch" data={order.lunch} />}
            {order.dinner && <OrderCard meal="Dinner" data={order.dinner} />}
          </div>
        ))}
    </div>
  );

  function shiftWeek(days) {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + days);
    setWeekStart(d);
  }
}

/* ======================
   ORDER CARD
====================== */
function OrderCard({ meal, data }) {
  return (
    <div className={styles.orderCard}>
      <img
        src={data.images?.[0] || "/assets/images/popular-dish-img1.jpg"}
        alt={data.menuName}
        className={styles.orderImg}
      />

      <div className={styles.orderContent}>
        <h5>
          {meal} – {data.menuName}
        </h5>

        <div
          className={styles.orderDesc}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        <ul className={styles.items}>
          {data.item1 && <li>{data.item1}</li>}
          {data.item2 && <li>{data.item2}</li>}
          {data.item3 && <li>{data.item3}</li>}
          {data.item4 && <li>{data.item4}</li>}
        </ul>

        <span className={styles.badge}>SUBSCRIPTION</span>
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
