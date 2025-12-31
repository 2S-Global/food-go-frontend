"use client";

import { useState } from "react";
import Link from "next/link";

export default function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.new_password !== formData.confirm_password) {
      setError("New password and confirm password do not match");
      return;
    }

    setLoading(true);

    try {
      // 🔐 API CALL GOES HERE
      // await changePassword({
      //   old_password: formData.old_password,
      //   new_password: formData.new_password,
      // });

      setSuccess("Password changed successfully!");
      setFormData({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });
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
          <h4>CHANGE PASSWORD</h4>
          <span style={{ display: "block", marginTop: "5px" }}>
            Update your account password
          </span>

          {/* SUCCESS */}
          {success && (
            <p style={{ color: "green", marginTop: "12px", marginBottom: 0 }}>
              {success}
            </p>
          )}

          {/* ERROR */}
          {error && (
            <p style={{ color: "red", marginTop: "12px", marginBottom: 0 }}>
              {error}
            </p>
          )}
        </div>

        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="row">
            {/* CURRENT PASSWORD */}
            <div className="col-md-12" style={{ position: "relative" }}>
              <input
                className="brd-rd3"
                type={showOldPassword ? "text" : "password"}
                name="old_password"
                placeholder="Current Password"
                value={formData.old_password}
                onChange={handleChange}
                required
              />
              <span
                onClick={() => setShowOldPassword(!showOldPassword)}
                style={{
                  position: "absolute",
                  right: "25px",
                  top: "40%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#999",
                }}
              >
                <i
                  className={`fa ${
                    showOldPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </span>
            </div>

            {/* NEW PASSWORD */}
            <div className="col-md-12" style={{ position: "relative" }}>
              <input
                className="brd-rd3"
                type={showNewPassword ? "text" : "password"}
                name="new_password"
                placeholder="New Password"
                value={formData.new_password}
                onChange={handleChange}
                required
              />
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                style={{
                  position: "absolute",
                  right: "25px",
                  top: "40%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#999",
                }}
              >
                <i
                  className={`fa ${
                    showNewPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="col-md-12" style={{ position: "relative" }}>
              <input
                className="brd-rd3"
                type={showConfirmPassword ? "text" : "password"}
                name="confirm_password"
                placeholder="Confirm New Password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: "absolute",
                  right: "25px",
                  top: "40%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#999",
                }}
              >
                <i
                  className={`fa ${
                    showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </span>
            </div>

            {/* SUBMIT */}
            <div className="col-md-12">
              <button
                className="red-bg brd-rd3"
                type="submit"
                disabled={loading}
              >
                {loading ? "Please wait..." : "UPDATE PASSWORD"}
              </button>
            </div>

            {/* FOOTER */}
            <div className="col-md-12 text-center">
              <Link className="sign-btn" href="/login">
                Back to Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
