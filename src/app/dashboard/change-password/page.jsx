"use client";

import React, { useState, useEffect } from "react";
import ChangePasswordForm from "@/app/components/ChangePasswordForm";
import Loader from "@/app/components/Loader";


export default function ChangePasswordPage() {
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
      <section style={{ marginBottom: "70px" }}>
        <div className="container">
          <div style={{ maxWidth: "750px", margin: "0 auto" }}>
            <ChangePasswordForm />
          </div>
        </div>
      </section>
  );
}
