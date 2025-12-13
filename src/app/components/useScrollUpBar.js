"use client";
import { useEffect } from "react";

export default function useScrollUpBar() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        typeof window !== "undefined" &&
        typeof window.$ === "function" &&
        $("#header").length &&
        typeof $.fn.scrollupbar === "function"
      ) {
        $("#header").scrollupbar();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
}