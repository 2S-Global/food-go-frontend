"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/app/components/Loader";
import MySubscription from "../components/MySubscription";

export default function DashboardHome() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="dashboard-wrapper brd-rd5">
      <div className="welcome-note  brd-rd5">
        <h4 style={{ color:"black" }}>WELCOME TO YOUR ACCOUNT</h4>
        <MySubscription />
        {/* <img src="/assets/images/welcome-note-img.png" alt="" /> */}
      </div>
    </div>
  );
}
