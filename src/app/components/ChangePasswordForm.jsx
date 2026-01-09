"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.old_password.trim())
      newErrors.old_password = "* Current password is required";

    if (!formData.new_password.trim())
      newErrors.new_password = "* New password is required";

    if (!formData.confirm_password.trim())
      newErrors.confirm_password = "* Confirm password is required";

    if (
      formData.new_password &&
      formData.confirm_password &&
      formData.new_password !== formData.confirm_password
    ) {
      newErrors.confirm_password = "* Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const token = localStorage.getItem("auth_token");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/userdata/change-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            oldPassword: formData.old_password,
            newPassword: formData.new_password,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to change password");

      toast.success("Password changed successfully");

      setFormData({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });
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
            <h4>CHANGE PASSWORD</h4>
            <span style={{ display: "block", marginBottom: "8px" }}>
              Update your account password
            </span>
          </div>

          <form className="sign-form" onSubmit={handleSubmit}>
            <div className="row">
              {/* CURRENT PASSWORD */}
              <div className="col-md-12">
                <div className="password-field">
                  <input
                    className="brd-rd3"
                    type={showOldPassword ? "text" : "password"}
                    name="old_password"
                    placeholder="Current Password"
                    value={formData.old_password}
                    onChange={handleChange}
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                  >
                    <i
                      className={`fa ${
                        showOldPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </div>
                {errors.old_password && (
                  <ErrorText text={errors.old_password} />
                )}
              </div>

              {/* NEW PASSWORD */}
              <div className="col-md-12">
                <div className="password-field">
                  <input
                    className="brd-rd3"
                    type={showNewPassword ? "text" : "password"}
                    name="new_password"
                    placeholder="New Password"
                    value={formData.new_password}
                    onChange={handleChange}
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    <i
                      className={`fa ${
                        showNewPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </div>
                {errors.new_password && (
                  <ErrorText text={errors.new_password} />
                )}
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="col-md-12">
                <div className="password-field">
                  <input
                    className="brd-rd3"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    placeholder="Confirm New Password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                  />
                  <span
                    className="eye-icon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i
                      className={`fa ${
                        showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </div>
                {errors.confirm_password && (
                  <ErrorText text={errors.confirm_password} />
                )}
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

              <div className="col-md-12 text-center">
                <Link className="sign-btn" href="/login">
                  Back to <strong>Login</strong>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Improved CSS for perfect eye icon alignment */}
      <style jsx>{`
        .password-field {
          position: relative;
          height: 48px; /* 🔒 LOCK CONTAINER HEIGHT */
        }

        .password-field input {
          width: 100%;
          height: 48px; /* 🔒 LOCK INPUT HEIGHT */
          padding-right: 44px; /* space for eye icon */
          box-sizing: border-box;
        }

        .eye-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #999;
          font-size: 18px;
          z-index: 10;
        }

        .eye-icon i {
          pointer-events: none;
        }
      `}</style>
    </>
  );
}

const ErrorText = ({ text }) => (
  <small
    style={{
      color: "red",
      display: "block",
      marginTop: "4px",
      marginBottom: "10px",
    }}
  >
    {text}
  </small>
);
