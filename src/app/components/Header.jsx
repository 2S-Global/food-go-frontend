"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useScrollUpBar from "./useScrollUpBar";
import { useCartCountStore } from "@/app/store/cartCountStore";

const Header = () => {
  useScrollUpBar();
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);
const { count, fetchCartCount, resetCount } = useCartCountStore();


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

      <div className="responsive-header">
        <div className="responsive-topbar">
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
        </div>
        <div className="responsive-logomenu">
          <div className="logo">
            <h1 itemProp="headline">
              <a href="index.html" title="Home" itemProp="url">
                <img src="/assets/images/logo.png" alt="logo.png" itemProp="image" />
              </a>
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
              <li className="menu-item-has-children">
                <a href="#" title="HOMEPAGES" itemProp="url">
                  <span className="yellow-clr">FOOD ORDERING</span>HOMEPAGES
                </a>
                <ul className="sub-dropdown">
                  <li>
                    <a href="index.html" title="HOMEPAGE 1" itemProp="url">
                      HOMEPAGE 1
                    </a>
                  </li>
                  <li>
                    <a href="index2.html" title="HOMEPAGE 2" itemProp="url">
                      HOMEPAGE 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="RESTAURANTS" itemProp="url">
                  <span className="yellow-clr">REAL FOOD</span>RESTAURANTS
                </a>
                <ul className="sub-dropdown">
                  <li>
                    <a
                      href="restaurant-found.html"
                      title="RESTAURANT 1"
                      itemProp="url"
                    >
                      RESTAURANT 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="restaurant-found2.html"
                      title="RESTAURANT 2"
                      itemProp="url"
                    >
                      RESTAURANT 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="restaurant-detail.html"
                      title="RESTAURANT DETAILS"
                      itemProp="url"
                    >
                      RESTAURANT DETAILS
                    </a>
                  </li>
                  <li>
                    <a
                      href="restaurant-detail.html"
                      title="RESTAURANT DETAILS"
                      itemProp="url"
                    >
                      RESTAURANT DETAILS
                    </a>
                  </li>
                  <li>
                    <a
                      href="food-recipes.html"
                      title="RESTAURANT DETAILS"
                      itemProp="url"
                    >
                      FOOD RECIPES
                    </a>
                  </li>
                  <li>
                    <a
                      href="our-articles.html"
                      title="RESTAURANT DETAILS"
                      itemProp="url"
                    >
                      OUR ARTICLES
                    </a>
                  </li>
                  <li>
                    <a
                      href="our-menu.html"
                      title="RESTAURANT DETAILS"
                      itemProp="url"
                    >
                      OUR MENU
                    </a>
                  </li>
                  <li>
                    <a
                      href="our-services.html"
                      title="RESTAURANT DETAILS"
                      itemProp="url"
                    >
                      OUR SERVICES
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" title="PAGES" itemProp="url">
                  <span className="yellow-clr">REAL FOOD</span>PAGES
                </a>
                <ul className="sub-dropdown">
                  <li className="menu-item-has-children">
                    <a href="#" title="BLOG" itemProp="url">
                      BLOG
                    </a>
                    <ul className="sub-dropdown">
                      <li className="menu-item-has-children">
                        <a href="#" title="BLOG LAYOUTS" itemProp="url">
                          BLOG LAYOUTS
                        </a>
                        <ul className="sub-dropdown">
                          <li>
                            <a
                              href="blog-right-sidebar.html"
                              title="BLOG WITH RIGHT SIDEBAR"
                              itemProp="url"
                            >
                              BLOG (W.R.S)
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-left-sidebar.html"
                              title="BLOG WITH LEFT SIDEBAR"
                              itemProp="url"
                            >
                              BLOG (W.L.S)
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog.html"
                              title="BLOG WITH NO SIDEBAR"
                              itemProp="url"
                            >
                              BLOG
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#" title="BLOG DETAIL" itemProp="url">
                          BLOG DETAIL
                        </a>
                        <ul className="sub-dropdown">
                          <li>
                            <a
                              href="blog-detail-right-sidebar.html"
                              title="BLOG DETAIL WITH RIGHT SIDEBAR"
                              itemProp="url"
                            >
                              BLOG DETAIL (W.R.S)
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-detail-left-sidebar.html"
                              title="BLOG DETAIL WITH LEFT SIDEBAR"
                              itemProp="url"
                            >
                              BLOG DETAIL (W.L.S)
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-detail.html"
                              title="BLOG DETAIL WITH NO SIDEBAR"
                              itemProp="url"
                            >
                              BLOG DETAIL
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#" title="BLOG FORMATES" itemProp="url">
                          BLOG FORMATES
                        </a>
                        <ul className="sub-dropdown">
                          <li>
                            <a
                              href="blog-detail-video.html"
                              title="BLOG DETAIL WITH VIDEO"
                              itemProp="url"
                            >
                              BLOG DETAIL (VIDEO)
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-detail-audio.html"
                              title="BLOG DETAIL WITH AUDIO"
                              itemProp="url"
                            >
                              BLOG DETAIL (AUDIO)
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-detail-carousel.html"
                              title="BLOG DETAIL WITH CAROUSEL"
                              itemProp="url"
                            >
                              BLOG DETAIL (CAROUSEL)
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#" title="SPECIAL PAGES" itemProp="url">
                      SPECIAL PAGES
                    </a>
                    <ul className="sub-dropdown">
                      <li>
                        <a href="404.html" title="404 ERROR" itemProp="url">
                          404 ERROR
                        </a>
                      </li>
                      <li>
                        <a
                          href="search-found.html"
                          title="SEARCH FOUND"
                          itemProp="url"
                        >
                          SEARCH FOUND
                        </a>
                      </li>
                      <li>
                        <a
                          href="search-not-found.html"
                          title="SEARCH NOT FOUND"
                          itemProp="url"
                        >
                          SEARCH NOT FOUND
                        </a>
                      </li>
                      <li>
                        <a
                          href="coming-soon.html"
                          title="COMING SOON"
                          itemProp="url"
                        >
                          COMING SOON
                        </a>
                      </li>
                      <li>
                        <a
                          href="login-register.html"
                          title="LOGIN & REGISTER"
                          itemProp="url"
                        >
                          LOGIN &amp; REGISTER
                        </a>
                      </li>
                      <li>
                        <a
                          href="price-table.html"
                          title="PRICE TABLE"
                          itemProp="url"
                        >
                          PRICE TABLE
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#" title="GALLERY" itemProp="url">
                      GALLERY
                    </a>
                    <ul className="sub-dropdown">
                      <li>
                        <a
                          href="gallery.html"
                          title="FOOD GALLERY"
                          itemProp="url"
                        >
                          FOOD GALLERY
                        </a>
                      </li>
                      <li>
                        <a
                          href="gallery-detail.html"
                          title="GALLERY DETAIL"
                          itemProp="url"
                        >
                          GALLERY DETAIL
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="register-reservation.html"
                      title="REGISTER RESERVATION"
                      itemProp="url"
                    >
                      REGISTER RESERVATION
                    </a>
                  </li>
                  <li>
                    <a
                      href="how-it-works.html"
                      title="HOW IT WORKS"
                      itemProp="url"
                    >
                      HOW IT WORKS
                    </a>
                  </li>
                  <li>
                    <a
                      href="dashboard.html"
                      title="USER PROFILE"
                      itemProp="url"
                    >
                      USER PROFILE
                    </a>
                  </li>
                  <li>
                    <a href="about-us.html" title="ABOUT US" itemProp="url">
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a
                      href="food-detail.html"
                      title="FOOD DETAIL"
                      itemProp="url"
                    >
                      FOOD DETAIL
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html" title="CONTACT US" itemProp="url">
                  <span className="yellow-clr">REAL FOOD</span>CONTACT US
                </a>
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
