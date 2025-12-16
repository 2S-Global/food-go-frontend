"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useScrollUpBar from "./useScrollUpBar";

const Header = () => {
  useScrollUpBar();
  const router = useRouter();

  return (
    <>
      <header className="stick">
        {/* <header id="header" className="stick"> */}
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="select-wrp">
              <select data-placeholder="Feel Like Eating">
                <option>FEEL LIKE EATING</option>
                <option>Burger</option>
                <option>Pizza</option>
                <option>Fried Rice</option>
                <option>Chicken Shots</option>
              </select>
            </div>
            <div className="select-wrp">
              <select data-placeholder="Choose Location">
                <option>CHOOSE LOCATION</option>
                <option>New york</option>
                <option>Washington</option>
                <option>Chicago</option>
                <option>Los Angeles</option>
              </select>
            </div>
            <div className="topbar-register">
              <a
                className="auth-login-link"
                href="/login"
                title="Login"
                itemProp="url"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/login");
                }}
              >
                LOGIN
              </a>
              {" / "}
              <a
                className="auth-register-link"
                href="/register"
                title="Register"
                itemProp="url"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/register");
                }}
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
          </div>
        </div>
        {/* Topbar */}
        <div className="logo-menu-sec">
          <div className="container">
            <div className="logo">
              <h1 itemProp="headline">
                <a href="/" title="Home" itemProp="url">
                  <img
                    src="/assets/images/logo2.png"
                    alt="logo.png"
                    itemProp="image"
                  />
                </a>
              </h1>
            </div>
            <nav>
              <div className="menu-sec">
                <ul>
                  <li className="menu-item-has-children">
                    <a href="/" title="HOME" itemProp="url">
                      HOME
                    </a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/about-us" title="ABOUT US" itemProp="url">
                      ABOUT US
                    </a>
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
                        <a href="/menu/additional-items" title="FOOD MENU" itemProp="url">
                          ADDITIONAL ITEMS
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <a href="/services" title="SERVICES" itemProp="url">
                      SERVICES
                    </a>
                  </li> */}
 
                  {/* <li className="menu-item-has-children">
                    <a href="/how-it-works" title="HOW IT WORKS" itemProp="url">
                      HOW IT WORKS
                    </a>
                  </li> */}

                  <li className="menu-item-has-children">
                    <a href="/blog" title="BLOG" itemProp="url">
                      BLOG
                    </a>
                  </li>

                  <li>
                    <a href="contact-us" title="CONTACT US" itemProp="url">
                      CONTACT US
                    </a>
                  </li>
                </ul>
                {/* <a
                  className="red-bg brd-rd4"
                  href="register-reservation.html"
                  title="Register"
                  itemProp="url"
                >
                  REGISTER RESTAURANT
                </a> */}

                {/* Cart + User Section */}
                <div className="header-right-icons">
                  {/* Cart Icon */}
                  <div className="cart-icon">
                    <Link href="/cart">
                      <i
                        className="fa fa-shopping-cart" title="CART"
                        style={{ fontSize: "26px" }}
                      ></i>
                      <span className="cart-count">3</span>
                    </Link>
                  </div>

                  {/* User Profile Dropdown */}
                  <div className="user-profile menu-item-has-children">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/assets/images/default-user.jpg"
                        alt="user profile"
                        title="MY PROFILE"
                        className="user-avatar"
                      />
                    </a>
                    <ul>
                      <li>
                        <Link href="/dashboard">My Account</Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            router.push("/login");
                          }}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            {/* Navigation */}
          </div>
        </div>
        {/* Logo Menu Section */}
      </header>
    </>
  );
};

export default Header;
