"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Inline validation
    if (!email.trim()) {
      setEmailError("* Email is required");
      return;
    }

    setEmailError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/userdata/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("New password has been sent to your email");
      setEmail("");
    } catch (error) {
      toast.error(error.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="sign-popup-wrapper brd-rd5">
        <div className="sign-popup-inner brd-rd5">
          <div className="sign-popup-title text-center">
            <h4>FORGOT PASSWORD</h4>
            <span style={{ display: "block", marginTop: "5px" }}>
              Enter your registered email to reset your password.
            </span>
          </div>

          <form className="sign-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <input
                  className="brd-rd3"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                />
                {emailError && (
                  <small
                    style={{ color: "red", display: "block", marginTop: "4px" }}
                  >
                    {emailError}
                  </small>
                )}
              </div>

              <div className="col-md-12">
                <button
                  className="red-bg brd-rd3"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Please wait..." : "SEND RESET LINK"}
                </button>
              </div>

              <div className="col-md-12 text-center">
                <Link className="sign-btn" href="/login">
                  Back to <strong>Sign In</strong>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
