"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { customerRegister, customerLogin } from "@/app/lib/api";

export default function AuthForm({ type }) {
  const isLogin = type === "login";
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    setLoading(true);

    try {
      if (isLogin) {
        const data = await customerLogin({
          email: formData.email,
          password: formData.password,
        });

        // Save auth data
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("auth_user", JSON.stringify(data.data));

        // notify header instantly
        window.dispatchEvent(new Event("authChange"));

        // Show success message
        setSuccess("Login successfully! Redirecting...");

        // ⏳ Redirect after delay
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        await customerRegister(formData);

        setSuccess("Registration successful! Redirecting to login...");

        setTimeout(() => {
          router.push("/login");
        }, 1500);
      }
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
          <h4>{isLogin ? "SIGN IN" : "SIGN UP"}</h4>
          <span
            style={{
              display: "block",
              marginTop: "5px",
            }}
          >
            {isLogin
              ? "Please enter your credentials to log in."
              : "Please fill in all fields to create your account."}
          </span>

          {/* ✅ SUCCESS MESSAGE */}
          {success && (
            <p style={{ color: "green", marginTop: "12px", marginBottom:"0", fontWeight: 500 }}>
              {success}
            </p>
          )}

          {/* ❌ ERROR MESSAGE */}
          {error && (
            <p style={{ color: "red", marginTop: "12px", marginBottom:"0", fontWeight: 500 }}>
              {error}
            </p>
          )}
        </div>

        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="row">
            {/* NAME */}
            {!isLogin && (
              <div className="col-md-12">
                <input
                  className="brd-rd3"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* EMAIL */}
            <div className="col-md-12">
              <input
                className="brd-rd3"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE */}
            {!isLogin && (
              <div className="col-md-12">
                <input
                  className="brd-rd3"
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* PASSWORD */}
            <div className="col-md-12" style={{ position: "relative" }}>
              <input
                className="brd-rd3"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
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
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
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
                {loading
                  ? "Please wait..."
                  : isLogin
                  ? "SIGN IN"
                  : "REGISTER NOW"}
              </button>
            </div>

            {/* FOOTER */}
            <div className="col-md-12">
              {isLogin ? (
                <Link className="sign-btn" href="/register">
                  Not a member? Sign up
                </Link>
              ) : (
                <Link className="sign-btn" href="/login">
                  Already Registered? Sign in
                </Link>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
