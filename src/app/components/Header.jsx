"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useScrollUpBar from "./useScrollUpBar";

const Header = () => {
  useScrollUpBar();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);

  // 🔄 Load user + listen for auth changes
  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("auth_user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
      setAuthLoaded(true);
    };

    loadUser();
    window.addEventListener("authChange", loadUser);

    return () => {
      window.removeEventListener("authChange", loadUser);
    };
  }, []);

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");

    // notify header immediately
    window.dispatchEvent(new Event("authChange"));

    router.push("/login");
  };

  return (
    <header className="stick">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-register">
            {!authLoaded ? (
              <span style={{ opacity: 0 }}>Loading...</span> // keeps space
            ) : user ? (
              <span style={{ color: "#fff", fontWeight: 600 }}>
                Welcome, {user.name}
              </span>
            ) : (
              <>
                <Link className="auth-login-link" href="/login">
                  LOGIN
                </Link>
                {" / "}
                <Link className="auth-register-link" href="/register">
                  REGISTER
                </Link>
              </>
            )}
          </div>

          <div className="social1">
            <a href="#" title="Facebook">
              <i className="fa fa-facebook-square" />
            </a>
            <a href="#" title="Twitter">
              <i className="fa fa-twitter" />
            </a>
            <a href="#" title="Google Plus">
              <i className="fa fa-google-plus" />
            </a>
          </div>
        </div>
      </div>

      {/* LOGO + MENU */}
      <div className="logo-menu-sec">
        <div className="container">
          <div className="logo">
            <Link href="/">
              <img src="/assets/images/logo2.png" alt="logo" itemProp="image" />
            </Link>
          </div>

          <nav>
            <div className="menu-sec">
              <ul>
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/about-us">ABOUT US</Link>
                </li>
                <li>
                  <Link href="/menu">MENU</Link>
                </li>
                <li>
                  <Link href="/blog">BLOG</Link>
                </li>
                <li>
                  <Link href="/contact-us">CONTACT US</Link>
                </li>
              </ul>

              {/* RIGHT ICONS */}
              <div className="header-right-icons">
                {/* CART */}
                <div className="cart-icon">
                  <Link href="/cart">
                    <i
                      className="fa fa-shopping-cart"
                      style={{ fontSize: "26px" }}
                    />
                    <span className="cart-count">3</span>
                  </Link>
                </div>

                {/* USER DROPDOWN */}
                {user && (
                  <div className="user-profile menu-item-has-children">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/assets/images/default-user.jpg"
                        alt="user"
                        className="user-avatar"
                      />
                    </a>
                    <ul>
                      <li>
                        <Link href="/dashboard">My Account</Link>
                      </li>
                      <li>
                        <a href="#" onClick={handleLogout}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
