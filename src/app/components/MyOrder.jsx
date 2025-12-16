"use client";

import React from "react";
import styles from "@/app/components/MyOrder.module.css";

export default function MyOrder() {
  return (
    <>
      <h4 className={styles.heading}>Today’s Order</h4>

      {/* Date Row */}
      <div className={styles.dateRow}>
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, i) => (
          <div
            key={day}
            className={`${styles.dateBox} ${
              day === "THU" ? styles.active : ""
            }`}
          >
            <span className={styles.day}>{day}</span>
            <span className={styles.date}>{17 + i}</span>
          </div>
        ))}
      </div>

      {/* Orders */}
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

/* Order Card */
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

      <i className={`fa fa-calendar ${styles.calendarIcon}`} />
    </div>
  );
}
