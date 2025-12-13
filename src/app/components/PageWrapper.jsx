"use client";
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 1.5 sec on first visit
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : children}</>;
}
