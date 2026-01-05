"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // await forgotPassword({ email });
      setSuccess(
        "If this email exists, a password reset link has been sent."
      );
      setEmail("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-popup-wrapper brd-rd5">
      <div className="sign-popup-inner brd-rd5">
        <div className="sign-popup-title text-center">
          <h4>FORGOT PASSWORD</h4>
          <span style={{ display: "block", marginTop: "5px" }}>
            Enter your registered email to reset your password.
          </span>

          {success && (
            <p style={{ color: "green", marginTop: "12px", marginBottom: 0 }}>
              {success}
            </p>
          )}

          {error && (
            <p style={{ color: "red", marginTop: "12px", marginBottom: 0 }}>
              {error}
            </p>
          )}
        </div>

        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <input
                className="brd-rd3"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
  );
}
