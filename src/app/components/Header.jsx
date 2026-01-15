"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useScrollUpBar from "./useScrollUpBar";
import { useCartCountStore } from "@/app/store/cartCountStore";
import useAuthStore from "@/app/store/useAuthStore";


const Header = () => {
  useScrollUpBar();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);
const { count, fetchCartCount, resetCount } = useCartCountStore();

const { user: zustandUser, hydrateUser } = useAuthStore();


useEffect(() => {
  const storedUser = localStorage.getItem("auth_user");
  if (storedUser) {
    hydrateUser(JSON.parse(storedUser));
  }
}, []);

useEffect(() => {
  if (user) {
    fetchCartCount();
  } else {
    resetCount();
  }
}, [user]);
  // Load user + listen for auth changes
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

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");

    // notify header immediately
    window.dispatchEvent(new Event("authChange"));

    router.push("/login");
  };

const avatarSrc =
  zustandUser?.profilePicture && zustandUser.profilePicture.trim() !== ""
    ? zustandUser.profilePicture
    : "/assets/images/default-user.jpg";


  return (
    <>
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
                <img
                  src="/assets/images/logo2.png"
                  alt="logo"
                  itemProp="image"
                  style={{ height: "58px", width: "auto" }}
                />
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
                  <li className="menu-item-has-children">
                    <a href="/menu" title="MENU" itemProp="url">
                      MENU
                    </a>
                    <ul>
                      <li>
                        <a href="/menu/veg" title="FOOD MENU" itemProp="url">
                          VEG MENU
                        </a>
                      </li>
                      <li>
                        <a
                          href="/menu/non-veg"
                          title="FOOD MENU"
                          itemProp="url"
                        >
                          NON-VEG MENU
                        </a>
                      </li>
                      <li>
                        <a
                          href="/menu/additional-items"
                          title="FOOD MENU"
                          itemProp="url"
                        >
                          ADDITIONAL ITEMS
                        </a>
                      </li>
                    </ul>
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
                      {count > 0 && <span className="cart-count">{count}</span>}
                    </Link>
                  </div>

                  {/* USER DROPDOWN */}
                  {user && (
                    <div className="user-profile menu-item-has-children">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <img
                          src={avatarSrc}
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

      <div className="responsive-header">
        <div className="responsive-logomenu">
          <div className="logo">
            <h1 itemProp="headline">
              <Link href="/">
                <img
                  src="/assets/images/logo2.png"
                  alt="logo.png"
                  itemProp="image"
                />
              </Link>
            </h1>
          </div>
          <span className="menu-btn yellow-bg brd-rd4">
            <i className="fa fa-align-justify" />
          </span>
        </div>
        <div className="responsive-menu">
          <span className="menu-close red-bg brd-rd3">
            <i className="fa fa-close" />
          </span>
          <div className="menu-lst">
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/about-us">ABOUT US</Link>
              </li>
              <li className="menu-item-has-children">
                <a href="/menu" title="MENU" itemProp="url">
                  MENU
                </a>
                <ul>
                  <li>
                    <a href="/menu/veg" title="FOOD MENU" itemProp="url">
                      VEG MENU
                    </a>
                  </li>
                  <li>
                    <a href="/menu/non-veg" title="FOOD MENU" itemProp="url">
                      NON-VEG MENU
                    </a>
                  </li>
                  <li>
                    <a
                      href="/menu/additional-items"
                      title="FOOD MENU"
                      itemProp="url"
                    >
                      ADDITIONAL ITEMS
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/blog">BLOG</Link>
              </li>
              <li>
                <Link href="/contact-us">CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div className="topbar-register">
            <a className="log-popup-btn" href="#" title="Login" itemProp="url">
              LOGIN
            </a>{" "}
            /{" "}
            <a
              className="sign-popup-btn"
              href="#"
              title="Register"
              itemProp="url"
            >
              REGISTER
            </a>
          </div>
          <div className="social1">
            <a href="#" title="Facebook" itemProp="url" target="_blank">
              <i className="fa fa-facebook-square" />
            </a>
            <a href="#" title="Twitter" itemProp="url" target="_blank">
              <i className="fa fa-twitter" />
            </a>
            <a href="#" title="Google Plus" itemProp="url" target="_blank">
              <i className="fa fa-google-plus" />
            </a>
          </div>
          <div className="register-btn">
            <a
              className="yellow-bg brd-rd4"
              href="register-reservation.html"
              title="Register"
              itemProp="url"
            >
              REGISTER RESTAURANT
            </a>
          </div>
        </div>
        {/* Responsive Menu */}
      </div>
    </>
  );
};

export default Header;
