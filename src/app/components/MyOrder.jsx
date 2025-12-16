"use client";

import React, { useState } from "react";
import styles from "@/app/components/MyOrder.module.css";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MyOrder() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [weekStart, setWeekStart] = useState(getWeekStart(today));
  const [selectedDate, setSelectedDate] = useState(today.toDateString());

  /* Generate 7 days */
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  function prevWeek() {
    const d = new Date(weekStart);
    d.setDate(d.getDate() - 7);
    setWeekStart(d);
  }

  function nextWeek() {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + 7);
    setWeekStart(d);
  }

  function onMonthChange(e) {
    const monthIndex = Number(e.target.value);
    setCurrentMonth(monthIndex);

    const newDate = new Date(today.getFullYear(), monthIndex, 1);
    setWeekStart(getWeekStart(newDate));
  }

  return (
    <>
      {/* Header */}
      {/* Month Dropdown */}
      <div className={styles.monthRow}>
        <select
          className={styles.monthDropdown}
          value={currentMonth}
          onChange={onMonthChange}
        >
          {MONTHS.map((m, i) => (
            <option key={m} value={i}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Date Slider */}
      <div className={styles.dateSlider}>
        <button onClick={prevWeek} className={styles.arrow}>
          ‹
        </button>

        <div className={styles.dateRow}>
          {weekDates.map((date) => (
            <div
              key={date.toDateString()}
              className={`${styles.dateBox} ${
                selectedDate === date.toDateString() ? styles.active : ""
              }`}
              onClick={() => setSelectedDate(date.toDateString())}
            >
              <span className={styles.day}>
                {date
                  .toLocaleDateString("en-US", { weekday: "short" })
                  .toUpperCase()}
              </span>
              <span className={styles.date}>{date.getDate()}</span>
            </div>
          ))}
        </div>

        <button onClick={nextWeek} className={styles.arrow}>
          ›
        </button>
      </div>

      {/* Title */}
      <h4 className={styles.heading}>Today’s Order</h4>

      {/* Orders (static for now) */}
      <OrderCard
        title="Lunch Menu"
        desc="Steamed Rice, Masoor Dal, Palak Paneer (Spinach & Cottage Cheese) and Mughlai Chicken"
        badge="SUBSCRIPTION"
      />

      <OrderCard
        title="Dinner Menu"
        desc="Jeera Rice, Dal Fry (Toor/Arhar Dal), Aloo Gobi (Potato & Cauliflower) and Chicken Curry"
        badge="SUBSCRIPTION"
      />

      <OrderCard
        title="Additional Menu"
        desc="Chicken Soup"
        qty="Qty : 1"
        badge="ADDITIONAL ITEM"
        type="additional"
      />
    </>
  );
}

/* Utils */
function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay() || 7; // Monday first
  d.setDate(d.getDate() - day + 1);
  return d;
}

/* Card */
function OrderCard({ title, desc, badge, type, qty }) {
  return (
    <div className={styles.orderCard}>
      <img
        src="/assets/images/popular-dish-img1.jpg"
        alt={title}
        className={styles.orderImg}
      />

      <div className={styles.orderContent}>
        <div className={styles.orderTitle}>{title}</div>
        <div className={styles.orderDesc}>{desc}</div>
        {qty && <div className={styles.qty}>{qty}</div>}

        <span
          className={`${styles.badge} ${
            type === "additional"
              ? styles.badgeAdditional
              : styles.badgeSubscription
          }`}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}
