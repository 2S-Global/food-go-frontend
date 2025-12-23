"use client";

import React, { useEffect, useState } from 'react';
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import MyOrder from "../components/MyOrder";
import { getUserDetails } from "../lib/api";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 👇 Fetch user details on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserDetails();
        setUser(data?.data || null); // assuming API returns { data: { ...user } }
      } catch (error) {
        console.error("Failed to load user info:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <PageBanner
        title="Dashboard"
        subtitle="A Greate Restaurant Website"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          //   { label: "Cart", href: "/cart" },
          { label: "Dashboard" },
        ]}
      />

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="sec-box">
                  <div className="dashboard-tabs-wrapper">
                    <div className="row">
                      <div className="col-md-4 col-sm-12 col-lg-4">
                        <div
                          className="profile-sidebar brd-rd5 wow fadeIn"
                          data-wow-delay="0.2s"
                        >
                          <div className="profile-sidebar-inner brd-rd5">
                            <div className="user-info red-bg">
                              <img
                                className="brd-rd50"
                                src={
                                  user?.avatar ||
                                  "/assets/images/user-avatar.jpg"
                                }
                                alt="User Avatar"
                              />
                              <div className="user-info-inner">
                                <h5>
                                  <a href="#" title="">
                                    {loading
                                      ? "Loading..."
                                      : user?.name || "Guest User"}
                                  </a>
                                </h5>
                                <span>
                                  <a href="#" title="">
                                    {user?.email || "email@example.com"}
                                  </a>
                                </span>
                                <a
                                  className="brd-rd3 sign-out-btn yellow-bg"
                                  href="#"
                                >
                                  <i className="fa fa-sign-out"></i> SIGN OUT
                                </a>
                              </div>
                            </div>
                            <div
                              className="dashboard-tabs nav flex-column nav-pills me-3"
                              id="v-pills-tab"
                              role="tablist"
                              aria-orientation="vertical"
                            >
                              <button
                                className="nav-link active"
                                id="v-pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-home"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-home"
                                aria-selected="true"
                              >
                                <a href="#dashboard">
                                  <i className="fa fa-dashboard" /> DASHBOARD
                                </a>
                              </button>
                              <button
                                className="nav-link"
                                id="v-pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-profile"
                                aria-selected="false"
                              >
                                <a href="#my-bookings">
                                  <i className="fa fa-file-text" /> MY
                                  SUBSCRIPTIONS
                                </a>
                              </button>
                              <button
                                className="nav-link"
                                id="v-pills-messages-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-messages"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-messages"
                                aria-selected="false"
                              >
                                <a href="#my-reviews">
                                  <i className="fa fa-comments" /> MY REVIEWS
                                </a>
                              </button>
                              <button
                                className="nav-link"
                                id="v-pills-order-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-order"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-order"
                                aria-selected="false"
                              >
                                <a href="#my-orders">
                                  <i className="fa fa-shopping-basket" /> MY
                                  ORDERS
                                </a>
                              </button>
                              <button
                                className="nav-link"
                                id="v-pills-shortlist-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-shortlist"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-shortlist"
                                aria-selected="false"
                              >
                                <a href="#shortlists">
                                  <i className="fa fa-heart" /> SHORTLISTS
                                </a>
                              </button>
                              <button
                                className="nav-link"
                                id="v-pills-statement-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-statement"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-statement"
                                aria-selected="false"
                              >
                                <a href="#statement">
                                  <i className="fa fa-wpforms" /> STATEMENT
                                </a>
                              </button>
                              <button
                                className="nav-link"
                                id="v-pills-account-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-account"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-account"
                                aria-selected="false"
                              >
                                <a href="#account-settings">
                                  <i className="fa fa-cog" /> ACCOUNT SETTINGS
                                </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-12 col-lg-8">
                        <div className="tab-content" id="v-pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                          >
                            <div className="dashboard-wrapper brd-rd5">
                              <div className="welcome-note yellow-bg brd-rd5">
                                <h4 itemProp="headline">
                                  WELCOME TO YOUR ACCOUNT
                                </h4>
                                <p itemProp="description">
                                  Things that get tricky are things like burgers
                                  and fries, or things that are deep-fried. We
                                  do have a couple of burger restaurants that
                                  are capable of doing a good
                                </p>
                                <img
                                  src="/assets/images/welcome-note-img.png"
                                  alt="welcome-note-img.png"
                                  itemProp="image"
                                />
                                <a
                                  className="remove-noti"
                                  href="#"
                                  title=""
                                  itemProp="url"
                                >
                                  <img
                                    src="/assets/images/close-icon.png"
                                    alt="close-icon.png"
                                    itemProp="image"
                                  />
                                </a>
                              </div>
                              <div className="dashboard-title">
                                <h4 itemProp="headline">
                                  SUGGESTED RESTAURANTS
                                </h4>
                                <span>
                                  Define{" "}
                                  <a
                                    className="red-clr"
                                    href="#"
                                    title=""
                                    itemProp="url"
                                  >
                                    Search criteria
                                  </a>{" "}
                                  to search for specific
                                </span>
                              </div>
                              <div className="restaurants-list">
                                <div
                                  className="featured-restaurant-box style3 brd-rd5 wow fadeInUp"
                                  data-wow-delay="0.2s"
                                >
                                  <div className="featured-restaurant-thumb">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/restaurant-logo1-1.png"
                                        alt="restaurant-logo1-1.png"
                                        itemProp="image"
                                      />
                                    </a>
                                  </div>
                                  <div className="featured-restaurant-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Domino's Pizza
                                      </a>
                                    </h4>
                                    <ul className="post-meta">
                                      <li>
                                        <i className="fa fa-check-circle-o" />{" "}
                                        Min order $50
                                      </li>
                                      <li>
                                        <i className="flaticon-transport" />{" "}
                                        30min
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="view-menu-liks">
                                    <span className="red-bg brd-rd4 post-likes">
                                      <i className="fa fa-heart-o" /> 12
                                    </span>
                                    <a
                                      className="brd-rd3"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      View Menu
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="featured-restaurant-box style3 brd-rd5 wow fadeInUp"
                                  data-wow-delay="0.3s"
                                >
                                  <div className="featured-restaurant-thumb">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/restaurant-logo1-2.png"
                                        alt="restaurant-logo1-2.png"
                                        itemProp="image"
                                      />
                                    </a>
                                  </div>
                                  <div className="featured-restaurant-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Pizza Hut
                                      </a>
                                    </h4>
                                    <ul className="post-meta">
                                      <li>
                                        <i className="fa fa-check-circle-o" />{" "}
                                        Min order $40
                                      </li>
                                      <li>
                                        <i className="flaticon-transport" />{" "}
                                        30min
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="view-menu-liks">
                                    <span className="red-bg brd-rd4 post-likes">
                                      <i className="fa fa-heart-o" /> 20
                                    </span>
                                    <a
                                      className="brd-rd3"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      View Menu
                                    </a>
                                  </div>
                                </div>
                                <div
                                  className="featured-restaurant-box style3 brd-rd5 wow fadeInUp"
                                  data-wow-delay="0.4s"
                                >
                                  <div className="featured-restaurant-thumb">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/restaurant-logo1-1.png"
                                        alt="restaurant-logo1-1.png"
                                        itemProp="image"
                                      />
                                    </a>
                                  </div>
                                  <div className="featured-restaurant-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Burger King
                                      </a>
                                    </h4>
                                    <ul className="post-meta">
                                      <li>
                                        <i className="fa fa-check-circle-o" />{" "}
                                        Min order $100
                                      </li>
                                      <li>
                                        <i className="flaticon-transport" />{" "}
                                        30min
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="view-menu-liks">
                                    <span className="red-bg brd-rd4 post-likes">
                                      <i className="fa fa-heart-o" /> 15
                                    </span>
                                    <a
                                      className="brd-rd3"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      View Menu
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                          >
                            <div className="tabs-wrp brd-rd5">
                              {/* 👇 NEW COMPONENT GOES HERE */}
                              <MyOrder />
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                          >
                            <div className="tabs-wrp brd-rd5">
                              <h4 itemProp="headline">MY REVIEWS</h4>
                              <div className="select-wrap-inner">
                                <div className="select-wrp2">
                                  <select>
                                    <option>Newest Reviews</option>
                                    <option>Newest Reviews</option>
                                    <option>Newest Reviews</option>
                                  </select>
                                </div>
                                <div className="select-wrp2">
                                  <select>
                                    <option>Select Date Range</option>
                                    <option>Select Date Range</option>
                                    <option>Select Date Range</option>
                                  </select>
                                </div>
                              </div>
                              <div className="review-list">
                                <div className="review-box brd-rd5">
                                  <h4 itemProp="headline">
                                    <a href="#" title="" itemProp="url">
                                      RESTAURANT DEMO
                                    </a>
                                  </h4>
                                  <div className="ratings">
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star off" />
                                    <i className="fa fa-star off" />
                                  </div>
                                  <p itemProp="description">
                                    FoodBakery order today. So great to be able
                                    to order food and not have to talk to
                                    anyone.
                                  </p>
                                  <div className="review-info">
                                    <img
                                      className="brd-rd50"
                                      src="/assets/images/reviewr-img1.jpg"
                                      alt="reviewr-img1.jpg"
                                      itemProp="image"
                                    />
                                    <div className="review-info-inner">
                                      <h5 itemProp="headline">QLARK JAKSON</h5>
                                      <i className="red-clr">2 months Ago</i>
                                    </div>
                                  </div>
                                </div>
                                <div className="review-box brd-rd5">
                                  <h4 itemProp="headline">
                                    <a href="#" title="" itemProp="url">
                                      RESTAURANT DEMO
                                    </a>
                                  </h4>
                                  <div className="ratings">
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star off" />
                                  </div>
                                  <p itemProp="description">
                                    FoodBakery order today. So great to be able
                                    to order food and not have to talk to
                                    anyone.
                                  </p>
                                  <div className="review-info">
                                    <img
                                      className="brd-rd50"
                                      src="/assets/images/reviewr-img2.jpg"
                                      alt="reviewr-img2.jpg"
                                      itemProp="image"
                                    />
                                    <div className="review-info-inner">
                                      <h5 itemProp="headline">QLARK JAKSON</h5>
                                      <i className="red-clr">2 months Ago</i>
                                    </div>
                                  </div>
                                </div>
                                <div className="review-box brd-rd5">
                                  <h4 itemProp="headline">
                                    <a href="#" title="" itemProp="url">
                                      RESTAURANT DEMO
                                    </a>
                                  </h4>
                                  <div className="ratings">
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star on" />
                                    <i className="fa fa-star on" />
                                  </div>
                                  <p itemProp="description">
                                    FoodBakery order today. So great to be able
                                    to order food and not have to talk to
                                    anyone.
                                  </p>
                                  <div className="review-info">
                                    <img
                                      className="brd-rd50"
                                      src="/assets/images/reviewr-img3.jpg"
                                      alt="reviewr-img3.jpg"
                                      itemProp="image"
                                    />
                                    <div className="review-info-inner">
                                      <h5 itemProp="headline">QLARK JAKSON</h5>
                                      <i className="red-clr">2 months Ago</i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Review List */}
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-order"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                          >
                            <div className="tabs-wrp brd-rd5">
                              <h4 itemProp="headline">MY ORDERS</h4>
                              <div className="select-wrap-inner">
                                <div className="select-wrp2">
                                  <select>
                                    <option>Select Orders Status</option>
                                    <option>Select Orders Status</option>
                                    <option>Select Orders Status</option>
                                  </select>
                                </div>
                                <div className="select-wrp2">
                                  <select>
                                    <option>Select Date Range</option>
                                    <option>Select Date Range</option>
                                    <option>Select Date Range</option>
                                  </select>
                                </div>
                              </div>
                              <div className="order-list">
                                <div className="order-item brd-rd5">
                                  <div className="order-thumb brd-rd5">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/order-img1.jpg"
                                        alt="order-img1.jpg"
                                        itemProp="image"
                                      />
                                    </a>
                                    <span className="post-rate yellow-bg brd-rd2">
                                      <i className="fa fa-star-o" /> 4.25
                                    </span>
                                  </div>
                                  <div className="order-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Maenaam Thai Restaurant
                                      </a>
                                    </h4>
                                    <span className="price">$85.00</span>
                                    <span className="processing brd-rd3">
                                      PROCESSING
                                    </span>
                                    <a
                                      className="brd-rd2"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      Order Detail
                                    </a>
                                  </div>
                                </div>
                                <div className="order-item brd-rd5">
                                  <div className="order-thumb brd-rd5">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/order-img2.jpg"
                                        alt="order-img2.jpg"
                                        itemProp="image"
                                      />
                                    </a>
                                    <span className="post-rate yellow-bg brd-rd2">
                                      <i className="fa fa-star-o" /> 3.0
                                    </span>
                                  </div>
                                  <div className="order-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Maenaam Thai Restaurant
                                      </a>
                                    </h4>
                                    <span className="price">$85.00</span>
                                    <span className="completed brd-rd3">
                                      COMPLETED
                                    </span>
                                    <a
                                      className="brd-rd2"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      Order Detail
                                    </a>
                                  </div>
                                </div>
                                <div className="order-item brd-rd5">
                                  <div className="order-thumb brd-rd5">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/order-img3.jpg"
                                        alt="order-img3.jpg"
                                        itemProp="image"
                                      />
                                    </a>
                                    <span className="post-rate yellow-bg brd-rd2">
                                      <i className="fa fa-star-o" /> 5.00
                                    </span>
                                  </div>
                                  <div className="order-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Maenaam Thai Restaurant
                                      </a>
                                    </h4>
                                    <span className="price">$85.00</span>
                                    <span className="completed brd-rd3">
                                      COMPLETED
                                    </span>
                                    <a
                                      className="brd-rd2"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      Order Detail
                                    </a>
                                  </div>
                                </div>
                                <div className="order-item brd-rd5">
                                  <div className="order-thumb brd-rd5">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/order-img4.jpg"
                                        alt="order-img4.jpg"
                                        itemProp="image"
                                      />
                                    </a>
                                    <span className="post-rate yellow-bg brd-rd2">
                                      <i className="fa fa-star-o" /> 5.30
                                    </span>
                                  </div>
                                  <div className="order-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Maenaam Thai Restaurant
                                      </a>
                                    </h4>
                                    <span className="price">$85.00</span>
                                    <span className="completed brd-rd3">
                                      COMPLETED
                                    </span>
                                    <a
                                      className="brd-rd2"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      Order Detail
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pagination-wrapper text-center style2">
                                <ul className="pagination justify-content-center">
                                  <li className="page-item prev">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      PREV
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      2
                                    </a>
                                  </li>
                                  <li className="page-item active">
                                    <span className="page-link brd-rd2">3</span>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      4
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      5
                                    </a>
                                  </li>
                                  <li className="page-item">........</li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      18
                                    </a>
                                  </li>
                                  <li className="page-item next">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      NEXT
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* Pagination Wrapper */}
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-shortlist"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                          >
                            {" "}
                            <div className="tabs-wrp brd-rd5">
                              <h4 itemProp="headline">SHORTLISTS</h4>
                              <div className="restaurants-list">
                                <div className="featured-restaurant-box style3 brd-rd5">
                                  <div className="featured-restaurant-thumb">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/restaurant-logo1-1.png"
                                        alt="restaurant-logo1-1.png"
                                        itemProp="image"
                                      />
                                    </a>
                                  </div>
                                  <div className="featured-restaurant-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Domino's Pizza
                                      </a>
                                    </h4>
                                    <ul className="post-meta">
                                      <li>
                                        <i className="fa fa-check-circle-o" />{" "}
                                        Min order $50
                                      </li>
                                      <li>
                                        <i className="flaticon-transport" />{" "}
                                        30min
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="view-menu-liks">
                                    <a
                                      className="brd-rd3"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      View Menu
                                    </a>
                                  </div>
                                </div>
                                <div className="featured-restaurant-box style3 brd-rd5">
                                  <div className="featured-restaurant-thumb">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/restaurant-logo1-2.png"
                                        alt="restaurant-logo1-2.png"
                                        itemProp="image"
                                      />
                                    </a>
                                  </div>
                                  <div className="featured-restaurant-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Pizza Hut
                                      </a>
                                    </h4>
                                    <ul className="post-meta">
                                      <li>
                                        <i className="fa fa-check-circle-o" />{" "}
                                        Min order $40
                                      </li>
                                      <li>
                                        <i className="flaticon-transport" />{" "}
                                        30min
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="view-menu-liks">
                                    <a
                                      className="brd-rd3"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      View Menu
                                    </a>
                                  </div>
                                </div>
                                <div className="featured-restaurant-box style3 brd-rd5">
                                  <div className="featured-restaurant-thumb">
                                    <a href="#" title="" itemProp="url">
                                      <img
                                        src="/assets/images/restaurant-logo1-3.png"
                                        alt="restaurant-logo1-3.png"
                                        itemProp="image"
                                      />
                                    </a>
                                  </div>
                                  <div className="featured-restaurant-info">
                                    <span className="red-clr">
                                      5th Avenue New York 68
                                    </span>
                                    <h4 itemProp="headline">
                                      <a href="#" title="" itemProp="url">
                                        Burger King
                                      </a>
                                    </h4>
                                    <ul className="post-meta">
                                      <li>
                                        <i className="fa fa-check-circle-o" />{" "}
                                        Min order $100
                                      </li>
                                      <li>
                                        <i className="flaticon-transport" />{" "}
                                        30min
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="view-menu-liks">
                                    <a
                                      className="brd-rd3"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      View Menu
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pagination-wrapper text-center style2">
                                <ul className="pagination justify-content-center">
                                  <li className="page-item prev">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      PREV
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      2
                                    </a>
                                  </li>
                                  <li className="page-item active">
                                    <span className="page-link brd-rd2">3</span>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      4
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      5
                                    </a>
                                  </li>
                                  <li className="page-item">........</li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      18
                                    </a>
                                  </li>
                                  <li className="page-item next">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      NEXT
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* Pagination Wrapper */}
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-statement"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                          >
                            <div className="tabs-wrp brd-rd5">
                              <h4 itemProp="headline">STATEMENTS</h4>
                              <div className="select-wrap-inner">
                                <div className="select-wrp2" />
                                <div className="select-wrp2">
                                  <select>
                                    <option>Select Date Range</option>
                                    <option>Select Date Range</option>
                                    <option>Select Date Range</option>
                                  </select>
                                </div>
                              </div>
                              <div className="statement-table">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>TRANSACTION ID</th>
                                      <th>ORDER ID</th>
                                      <th>DATE</th>
                                      <th>DETAIL</th>
                                      <th>AMOUNT</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>#30737723</td>
                                      <td>8720</td>
                                      <td>Aug 17,2017</td>
                                      <td>Order - Misumisu Thai</td>
                                      <td>
                                        <span className="red-clr">$35.97</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>#30737723</td>
                                      <td>8720</td>
                                      <td>Aug 17,2017</td>
                                      <td>Order - Jet's Kitchen</td>
                                      <td>
                                        <span className="red-clr">$35.97</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>#30737723</td>
                                      <td>8720</td>
                                      <td>Aug 17,2017</td>
                                      <td>Order - Misumisu Thai</td>
                                      <td>
                                        <span className="red-clr">$35.97</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>#30737723</td>
                                      <td>8720</td>
                                      <td>Aug 17,2017</td>
                                      <td>Order - Misumisu Thai</td>
                                      <td>
                                        <span className="red-clr">$35.97</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>#30737723</td>
                                      <td>8720</td>
                                      <td>Aug 17,2017</td>
                                      <td>Order - Misumisu Thai</td>
                                      <td>
                                        <span className="red-clr">$35.97</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* Statement Table */}
                              <div className="pagination-wrapper text-center style2">
                                <ul className="pagination justify-content-center">
                                  <li className="page-item prev">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      PREV
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      2
                                    </a>
                                  </li>
                                  <li className="page-item active">
                                    <span className="page-link brd-rd2">3</span>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      4
                                    </a>
                                  </li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      5
                                    </a>
                                  </li>
                                  <li className="page-item">........</li>
                                  <li className="page-item">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      18
                                    </a>
                                  </li>
                                  <li className="page-item next">
                                    <a
                                      className="page-link brd-rd2"
                                      href="#"
                                      itemProp="url"
                                    >
                                      NEXT
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* Pagination Wrapper */}
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-account"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                          >
                            <div className="tabs-wrp account-settings brd-rd5">
                              <h4 itemProp="headline">ACCOUNT SETTINGS</h4>
                              <div className="account-settings-inner">
                                <div className="row">
                                  <div className="col-md-4 col-sm-4 col-lg-4">
                                    <div className="profile-info text-center">
                                      <div className="profile-thumb brd-rd50">
                                        <img
                                          id="profile-display"
                                          src="/assets/images/profile-img1.jpg"
                                          alt="profile-img1.jpg"
                                          itemProp="image"
                                        />
                                      </div>
                                      <a
                                        className="red-clr change-password"
                                        href="#"
                                        title=""
                                        itemProp="url"
                                      >
                                        Change Password
                                      </a>
                                      <div className="profile-img-upload-btn">
                                        <label className="fileContainer brd-rd5 yellow-bg">
                                          UPLOAD PICTURE
                                          <input
                                            id="profile-upload"
                                            type="file"
                                          />
                                        </label>
                                      </div>
                                      <p itemProp="description">
                                        Upload a profile picture or choose one
                                        of the following
                                      </p>
                                      <div className="default-img-lst">
                                        <img
                                          className="brd-rd50"
                                          src="/assets/images/profile-thumb1.jpg"
                                          alt="profile-thumb1.jpg"
                                          itemProp="image"
                                        />
                                        <img
                                          className="brd-rd50"
                                          src="/assets/images/profile-thumb2.jpg"
                                          alt="profile-thumb2.jpg"
                                          itemProp="image"
                                        />
                                        <img
                                          className="brd-rd50"
                                          src="/assets/images/profile-thumb3.jpg"
                                          alt="profile-thumb3.jpg"
                                          itemProp="image"
                                        />
                                        <img
                                          className="brd-rd50"
                                          src="/assets/images/profile-thumb4.jpg"
                                          alt="profile-thumb4.jpg"
                                          itemProp="image"
                                        />
                                        <img
                                          className="brd-rd50"
                                          src="/assets/images/profile-thumb5.jpg"
                                          alt="profile-thumb5.jpg"
                                          itemProp="image"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-8 col-sm-8 col-lg-8">
                                    <div className="profile-info-form-wrap">
                                      <form className="profile-info-form">
                                        <div className="row mrg20">
                                          <div className="col-md-12 col-sm-12 col-lg-12">
                                            <label>
                                              Complete Name <sup>*</sup>
                                            </label>
                                            <input
                                              className="brd-rd3"
                                              type="text"
                                              placeholder="Enter Your Name"
                                            />
                                          </div>
                                          <div className="col-md-12 col-sm-12 col-lg-12">
                                            <label>
                                              Email Address <sup>*</sup>
                                            </label>
                                            <input
                                              className="brd-rd3"
                                              type="email"
                                              placeholder="Enter Your Email Address"
                                            />
                                          </div>
                                          <div className="col-md-12 col-sm-12 col-lg-12">
                                            <label>
                                              Phone No <sup>*</sup>
                                            </label>
                                            <input
                                              className="brd-rd3"
                                              type="text"
                                              placeholder="Enter Your Phone No"
                                            />
                                          </div>
                                          <div className="col-md-12 col-sm-12 col-lg-12">
                                            <label>
                                              Country <sup>*</sup>
                                            </label>
                                            <div className="select-wrp">
                                              <select>
                                                <option>Pakistan</option>
                                                <option>India</option>
                                                <option>USA</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div className="col-md-6 col-sm-6 col-lg-6">
                                            <label>
                                              State <sup>*</sup>
                                            </label>
                                            <input
                                              className="brd-rd3"
                                              type="text"
                                            />
                                          </div>
                                          <div className="col-md-6 col-sm-6 col-lg-6">
                                            <label>
                                              City <sup>*</sup>
                                            </label>
                                            <div className="select-wrp">
                                              <select>
                                                <option>Karachi</option>
                                                <option>Multan</option>
                                                <option>Lahore</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div className="col-md-6 col-sm-6 col-lg-6">
                                            <label>
                                              Latitude <sup>*</sup>
                                            </label>
                                            <input
                                              className="brd-rd3"
                                              type="text"
                                            />
                                          </div>
                                          <div className="col-md-6 col-sm-6 col-lg-6">
                                            <label>
                                              Longitude <sup>*</sup>
                                            </label>
                                            <input
                                              className="brd-rd3"
                                              type="text"
                                            />
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                  <div className="col-md-12 col-sm-12 col-lg-12">
                                    <div className="loc-map2">
                                      <div
                                        className="loc-map brd-rd3"
                                        id="loc-map"
                                      />
                                      <div className="loc-srch">
                                        <input
                                          className="brd-rd3"
                                          type="text"
                                          placeholder="Type Your Address"
                                        />
                                        <button
                                          className="brd-rd3 red-bg"
                                          type="submit"
                                        >
                                          Search Now
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section Box */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
