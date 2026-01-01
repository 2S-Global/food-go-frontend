"use client";

import React, { useState, useEffect } from "react";
import MySubscription from "../../components/MySubscription";
import Loader from "@/app/components/Loader";

export default function SubscriptionsPage() {
  const [loading, setLoading] = React.useState(false);

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
    <div className="tabs-wrp brd-rd5">
      <h4>MY SUBSCRIPTIONS</h4>
      <MySubscription />
    </div>
  );
}
