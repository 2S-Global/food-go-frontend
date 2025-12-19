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
    setLoading(true);

    try {
      if (isLogin) {
        // 🔐 LOGIN
        const data = await customerLogin({
          email: formData.email,
          password: formData.password,
        });

        // ✅ save token if backend sends it
        if (data.token) {
          localStorage.setItem("auth_token", data.token);
        }

        // redirect after login
        router.push("/");
      } else {
        // 📝 REGISTER
        await customerRegister(formData);

        // redirect after register
        router.push("/login");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-popup-wrapper brd-rd5">
      <div className="sign-popup-inner brd-rd5">
        <div className="sign-popup-title text-center">
          <h4>{isLogin ? "SIGN IN" : "SIGN UP"}</h4>
          <span>
            {isLogin
              ? "Please enter your credentials to log in."
              : "Please fill in all fields to create your account."}
          </span>
        </div>

        <form className="sign-form" onSubmit={handleSubmit}>
          <div className="row">
            {/* NAME (REGISTER ONLY) */}
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

            {/* PHONE (REGISTER ONLY) */}
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

              {/* EYE ICON */}
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

            {/* ERROR */}
            {error && (
              <div className="col-md-12">
                <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
              </div>
            )}

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

            {/* FOOTER LINKS */}
            <div className="col-md-12">
              {isLogin ? (
                <>
                  <Link className="sign-btn" href="/register">
                    Not a member? Sign up
                  </Link>
                  <a className="recover-btn" href="#">
                    {" "}
                    Forgot your password?{" "}
                  </a>
                </>
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
