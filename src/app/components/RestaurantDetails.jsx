"use client";

import React from "react";

export default function RestaurantDetails() {
  return (
    <>
      <section>
        <div className="block gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="sec-box">
                  <div className="sec-wrapper">
                    <div className="row">
                      <div className="col-md-8 col-sm-12 col-lg-8">
                        <div className="restaurant-detail-wrapper">
                          <div className="restaurant-detail-info">
                            <div className="restaurant-detail-thumb">
                              <ul className="restaurant-detail-img-carousel">
                                <li>
                                  <img
                                    className="brd-rd3"
                                    src="/assets/images/restaurant-detail-big-img1-1.jpg"
                                    alt="restaurant-detail-big-img1-1.jpg"
                                    itemProp="image"
                                  />
                                </li>
                                <li>
                                  <img
                                    className="brd-rd3"
                                    src="/assets/images/restaurant-detail-big-img1-2.jpg"
                                    alt="restaurant-detail-big-img1-2.jpg"
                                    itemProp="image"
                                  />
                                </li>
                                <li>
                                  <img
                                    className="brd-rd3"
                                    src="/assets/images/restaurant-detail-big-img1-3.jpg"
                                    alt="restaurant-detail-big-img1-3.jpg"
                                    itemProp="image"
                                  />
                                </li>
                                <li>
                                  <img
                                    className="brd-rd3"
                                    src="/assets/images/restaurant-detail-big-img1-4.jpg"
                                    alt="restaurant-detail-big-img1-4.jpg"
                                    itemProp="image"
                                  />
                                </li>
                              </ul>
                              <ul className="restaurant-detail-thumb-carousel">
                                <li>
                                  <img
                                    className="brd-rd3"
                                    src="/assets/images/restaurant-detail-small-img1-1.jpg"
                                    alt="restaurant-detail-small-img1-1.jpg"
                                    itemProp="image"
                                  />
                                </li>
                                <li>
                                  <img
                                    className="brd-rd3"
                                    src="/assets/images/restaurant-detail-small-img1-2.jpg"
                                    alt="restaurant-detail-small-img1-2.jpg"
                                    itemProp="image"
                                  />
                                </li>
                                <li>
                                  <img
                                    className="brd-rd3"
                                    src="/assets/images/restaurant-detail-small-img1-3.jpg"
                                    alt="restaurant-detail-small-img1-3.jpg"
                                    itemProp="image"
                                  />
                                </li>
                                <li>
                                  <img
                                    className="brd-rd3"
                                    src="/assets/images/restaurant-detail-small-img1-4.jpg"
                                    alt="restaurant-detail-small-img1-4.jpg"
                                    itemProp="image"
                                  />
                                </li>
                              </ul>
                            </div>
                            <div className="restaurant-detail-title">
                              <h1 itemProp="headline">Nik Baker's</h1>
                              <div className="info-meta">
                                <span>Greater Kailash (GK) 2</span>
                                <span>
                                  <a href="#" title="" itemProp="url">
                                    Bakery
                                  </a>
                                  ,{" "}
                                  <a href="#" title="" itemProp="url">
                                    Cafe
                                  </a>
                                </span>
                              </div>
                              <div className="rating-wrapper">
                                <a
                                  className="gradient-brd brd-rd2"
                                  href="#"
                                  title=""
                                  itemProp="url"
                                >
                                  <i className="fa fa-star" /> Rate <i>4.0</i>
                                </a>
                                <div className="rate-share brd-rd5">
                                  <div className="rating-box-wrapper">
                                    <span>Rate</span>
                                    <div className="rating-box">
                                      <span className="brd-rd2 clr1 on" />
                                      <span className="brd-rd2 clr2 on" />
                                      <span className="brd-rd2 clr3 on" />
                                      <span className="brd-rd2 clr4 on" />
                                      <span className="brd-rd2 clr5 on" />
                                      <span className="brd-rd2 clr6 on" />
                                      <span className="brd-rd2 clr7 off" />
                                      <span className="brd-rd2 clr8 off" />
                                      <i>4.0</i>
                                    </div>
                                  </div>
                                  <div className="share-wrapper">
                                    <div className="fb-share">
                                      <label className="switch">
                                        <input type="checkbox" />
                                        <span className="switch-slider brd-rd30" />
                                      </label>
                                      <a
                                        className="facebook brd-rd2"
                                        href="#"
                                        title=""
                                        itemProp="url"
                                      >
                                        <i className="fa fa-facebook-square" />{" "}
                                        Share on Facebook
                                      </a>
                                    </div>
                                    <div className="fb-share">
                                      <label className="switch">
                                        <input type="checkbox" />
                                        <span className="switch-slider brd-rd30" />
                                      </label>
                                      <a
                                        className="twitter brd-rd2"
                                        href="#"
                                        title=""
                                        itemProp="url"
                                      >
                                        <i className="fa fa-twitter" /> Share on
                                        Twitter
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="restaurant-detail-tabs">
                              <div
                                className="nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                              >
                                <button
                                  className="nav-link active"
                                  id="nav-home-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-home"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-home"
                                  aria-selected="true"
                                >
                                  <a href="#tab1-1" data-toggle="tab">
                                    <i className="fa fa-cutlery" /> Menu
                                  </a>
                                </button>
                                <button
                                  className="nav-link"
                                  id="nav-profile-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-profile"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-profile"
                                  aria-selected="false"
                                >
                                  <a href="#tab1-2" data-toggle="tab">
                                    <i className="fa fa-picture-o" /> Gallery
                                  </a>
                                </button>
                                <button
                                  className="nav-link"
                                  id="nav-contact-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-contact"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-contact"
                                  aria-selected="false"
                                >
                                  <a href="#tab1-3" data-toggle="tab">
                                    <i className="fa fa-star" /> Reviews
                                  </a>
                                </button>
                                <button
                                  className="nav-link"
                                  id="nav-tab5-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-tab5"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-tab5"
                                  aria-selected="false"
                                >
                                  <a href="#tab1-3" data-toggle="tab">
                                    <i className="fa fa-star" />{" "}
                                  </a>
                                  <a href="#tab1-4" data-toggle="tab">
                                    <i className="fa fa-book" /> Book A Table
                                  </a>
                                </button>
                                <button
                                  className="nav-link"
                                  id="nav-tab6-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-tab6"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-tab6"
                                  aria-selected="false"
                                >
                                  <a href="#tab1-3" data-toggle="tab">
                                    <i className="fa fa-star" />{" "}
                                  </a>
                                  <a href="#tab1-4" data-toggle="tab">
                                    <i className="fa fa-book" />
                                  </a>
                                  <a href="#tab1-5" data-toggle="tab">
                                    <i className="fa fa-info" /> Restaurant Info
                                  </a>
                                </button>
                              </div>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-home"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                >
                                  <form className="search-dish">
                                    <input
                                      type="text"
                                      placeholder="Search here"
                                    />
                                    <button type="submit">
                                      <i className="fa fa-search" />
                                    </button>
                                  </form>
                                  <div className="dishes-list-wrapper">
                                    <h4 className="title3" itemProp="headline">
                                      <span className="sudo-bottom sudo-bg-red">
                                        Pizza
                                      </span>
                                    </h4>
                                    <span className="post-rate red-bg brd-rd2">
                                      <i className="fa fa-star-o" /> 4.25
                                    </span>
                                    <ul className="dishes-list">
                                      <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.1s"
                                      >
                                        <div className="featured-restaurant-box">
                                          <div className="featured-restaurant-thumb">
                                            <a href="#" title="" itemProp="url">
                                              <img
                                                src="/assets/images/dish-img1-1.jpg"
                                                alt="dish-img1-1.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                          <div className="featured-restaurant-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                Pizza Takeaway
                                              </a>
                                            </h4>
                                            <span className="price">
                                              $85.00
                                            </span>
                                            <p itemProp="description">
                                              Lorem Ipsum is simply dummy text
                                              of the printing industry
                                            </p>
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
                                          <div className="ord-btn">
                                            <a
                                              className="brd-rd2"
                                              href="#"
                                              title="Order Now"
                                              itemProp="url"
                                            >
                                              Order Now
                                            </a>
                                          </div>
                                        </div>
                                      </li>
                                      <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.2s"
                                      >
                                        <div className="featured-restaurant-box">
                                          <div className="featured-restaurant-thumb">
                                            <a href="#" title="" itemProp="url">
                                              <img
                                                src="/assets/images/dish-img1-2.jpg"
                                                alt="dish-img1-2.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                          <div className="featured-restaurant-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                Extra Cheese Pizza
                                              </a>
                                            </h4>
                                            <span className="price">
                                              $85.00
                                            </span>
                                            <p itemProp="description">
                                              Lorem Ipsum is simply dummy text
                                              of the printing industry
                                            </p>
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
                                          <div className="ord-btn">
                                            <a
                                              className="brd-rd2"
                                              href="#"
                                              title="Order Now"
                                              itemProp="url"
                                            >
                                              Order Now
                                            </a>
                                          </div>
                                        </div>
                                      </li>
                                      <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.3s"
                                      >
                                        <div className="featured-restaurant-box">
                                          <div className="featured-restaurant-thumb">
                                            <a href="#" title="" itemProp="url">
                                              <img
                                                src="/assets/images/dish-img1-3.jpg"
                                                alt="dish-img1-3.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                          <div className="featured-restaurant-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                Pizza Oven Testing Pronto
                                              </a>
                                            </h4>
                                            <span className="price">
                                              $85.00
                                            </span>
                                            <p itemProp="description">
                                              Lorem Ipsum is simply dummy text
                                              of the printing industry
                                            </p>
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
                                          <div className="ord-btn">
                                            <a
                                              className="brd-rd2"
                                              href="#"
                                              title="Order Now"
                                              itemProp="url"
                                            >
                                              Order Now
                                            </a>
                                          </div>
                                        </div>
                                      </li>
                                      <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.4s"
                                      >
                                        <div className="featured-restaurant-box">
                                          <div className="featured-restaurant-thumb">
                                            <a href="#" title="" itemProp="url">
                                              <img
                                                src="/assets/images/dish-img1-4.jpg"
                                                alt="dish-img1-4.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                          <div className="featured-restaurant-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                Chicken Bacon Ranch
                                              </a>
                                            </h4>
                                            <span className="price">
                                              $85.00
                                            </span>
                                            <p itemProp="description">
                                              Lorem Ipsum is simply dummy text
                                              of the printing industry
                                            </p>
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
                                          <div className="ord-btn">
                                            <a
                                              className="brd-rd2"
                                              href="#"
                                              title="Order Now"
                                              itemProp="url"
                                            >
                                              Order Now
                                            </a>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="dishes-list-wrapper">
                                    <h4 className="title3" itemProp="headline">
                                      <span className="sudo-bottom sudo-bg-red">
                                        Burgers
                                      </span>
                                    </h4>
                                    <span className="post-rate red-bg brd-rd2">
                                      <i className="fa fa-star-o" /> 4.25
                                    </span>
                                    <ul className="dishes-list">
                                      <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.2s"
                                      >
                                        <div className="featured-restaurant-box">
                                          <div className="featured-restaurant-thumb">
                                            <a href="#" title="" itemProp="url">
                                              <img
                                                src="/assets/images/dish-img2-1.jpg"
                                                alt="dish-img2-1.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                          <div className="featured-restaurant-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                Bacon Gouda Burger
                                              </a>
                                            </h4>
                                            <span className="price">
                                              $85.00
                                            </span>
                                            <p itemProp="description">
                                              Lorem Ipsum is simply dummy text
                                              of the printing industry
                                            </p>
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
                                          <div className="ord-btn">
                                            <a
                                              className="brd-rd2"
                                              href="#"
                                              title="Order Now"
                                              itemProp="url"
                                            >
                                              Order Now
                                            </a>
                                          </div>
                                        </div>
                                      </li>
                                      <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.3s"
                                      >
                                        <div className="featured-restaurant-box">
                                          <div className="featured-restaurant-thumb">
                                            <a href="#" title="" itemProp="url">
                                              <img
                                                src="/assets/images/dish-img2-2.jpg"
                                                alt="dish-img2-2.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                          <div className="featured-restaurant-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                Tribeca Chicken Burger
                                              </a>
                                            </h4>
                                            <span className="price">
                                              $85.00
                                            </span>
                                            <p itemProp="description">
                                              Lorem Ipsum is simply dummy text
                                              of the printing industry
                                            </p>
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
                                          <div className="ord-btn">
                                            <a
                                              className="brd-rd2"
                                              href="#"
                                              title="Order Now"
                                              itemProp="url"
                                            >
                                              Order Now
                                            </a>
                                          </div>
                                        </div>
                                      </li>
                                      <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.4s"
                                      >
                                        <div className="featured-restaurant-box">
                                          <div className="featured-restaurant-thumb">
                                            <a href="#" title="" itemProp="url">
                                              <img
                                                src="/assets/images/dish-img2-3.jpg"
                                                alt="dish-img2-3.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                          <div className="featured-restaurant-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                Charburger
                                              </a>
                                            </h4>
                                            <span className="price">
                                              $85.00
                                            </span>
                                            <p itemProp="description">
                                              Lorem Ipsum is simply dummy text
                                              of the printing industry
                                            </p>
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
                                          <div className="ord-btn">
                                            <a
                                              className="brd-rd2"
                                              href="#"
                                              title="Order Now"
                                              itemProp="url"
                                            >
                                              Order Now
                                            </a>
                                          </div>
                                        </div>
                                      </li>
                                      <li
                                        className="wow fadeInUp"
                                        data-wow-delay="0.5s"
                                      >
                                        <div className="featured-restaurant-box">
                                          <div className="featured-restaurant-thumb">
                                            <a href="#" title="" itemProp="url">
                                              <img
                                                src="/assets/images/dish-img2-4.jpg"
                                                alt="dish-img2-4.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                          <div className="featured-restaurant-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                Salads &amp; Veggies Burger
                                              </a>
                                            </h4>
                                            <span className="price">
                                              $85.00
                                            </span>
                                            <p itemProp="description">
                                              Lorem Ipsum is simply dummy text
                                              of the printing industry
                                            </p>
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
                                          <div className="ord-btn">
                                            <a
                                              className="brd-rd2"
                                              href="#"
                                              title="Order Now"
                                              itemProp="url"
                                            >
                                              Order Now
                                            </a>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-profile"
                                  role="tabpanel"
                                  aria-labelledby="nav-profile-tab"
                                >
                                  <div className="restaurant-gallery">
                                    <h4 className="title3" itemProp="headline">
                                      <span className="sudo-bottom sudo-bg-red">
                                        Nik B
                                      </span>
                                      aker's Gallery
                                    </h4>
                                    <div className="remove-ext">
                                      <div className="row">
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="restaurant-gallery-img">
                                            <a
                                              href="assets/images/resource/restaurant-gallery-img1.jpg"
                                              data-fancybox="gallery"
                                              title=""
                                              itemProp="url"
                                            >
                                              <img
                                                src="/assets/images/restaurant-gallery-img1.jpg"
                                                alt="restaurant-gallery-img1.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="restaurant-gallery-img">
                                            <a
                                              href="assets/images/resource/restaurant-gallery-img2.jpg"
                                              data-fancybox="gallery"
                                              title=""
                                              itemProp="url"
                                            >
                                              <img
                                                src="/assets/images/restaurant-gallery-img2.jpg"
                                                alt="restaurant-gallery-img2.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12">
                                          <div className="restaurant-gallery-img">
                                            <a
                                              href="assets/images/resource/restaurant-gallery-img3.jpg"
                                              data-fancybox="gallery"
                                              title=""
                                              itemProp="url"
                                            >
                                              <img
                                                src="/assets/images/restaurant-gallery-img3.jpg"
                                                alt="restaurant-gallery-img3.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="restaurant-gallery-img">
                                            <a
                                              href="assets/images/resource/restaurant-gallery-img4.jpg"
                                              data-fancybox="gallery"
                                              title=""
                                              itemProp="url"
                                            >
                                              <img
                                                src="/assets/images/restaurant-gallery-img4.jpg"
                                                alt="restaurant-gallery-img4.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="restaurant-gallery-img">
                                            <a
                                              href="assets/images/resource/restaurant-gallery-img5.jpg"
                                              data-fancybox="gallery"
                                              title=""
                                              itemProp="url"
                                            >
                                              <img
                                                src="/assets/images/restaurant-gallery-img5.jpg"
                                                alt="restaurant-gallery-img5.jpg"
                                                itemProp="image"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-contact"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                >
                                  <div className="customer-review-wrapper">
                                    <h4 className="title3" itemProp="headline">
                                      <span className="sudo-bottom sudo-bg-red">
                                        Custo
                                      </span>
                                      mer Reviews
                                    </h4>
                                    <ul className="comments-thread customer-reviews">
                                      <li>
                                        <div className="comment">
                                          <img
                                            className="brd-rd50"
                                            src="/assets/images/review-img1.jpg"
                                            alt="review-img1.jpg"
                                            itemProp="image"
                                          />
                                          <div className="comment-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                John Mathur
                                              </a>
                                            </h4>
                                            <p itemProp="description">
                                              Lorem ipsum dolor sit amet, pri
                                              nusquam petentium at. In mutat
                                              omnes homero mea, pro delenit
                                              accusam eu
                                            </p>
                                            <span className="customer-rating">
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star" />
                                              <span>(4)</span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="comment">
                                          <img
                                            className="brd-rd50"
                                            src="/assets/images/review-img2.jpg"
                                            alt="review-img2.jpg"
                                            itemProp="image"
                                          />
                                          <div className="comment-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                John Mathur
                                              </a>
                                            </h4>
                                            <p itemProp="description">
                                              Lorem ipsum dolor sit amet, pri
                                              nusquam petentium at. In mutat
                                              omnes homero mea, pro delenit
                                              accusam eu
                                            </p>
                                            <span className="customer-rating">
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star" />
                                              <span>(4)</span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="comment">
                                          <img
                                            className="brd-rd50"
                                            src="/assets/images/review-img3.jpg"
                                            alt="review-img3.jpg"
                                            itemProp="image"
                                          />
                                          <div className="comment-info">
                                            <h4 itemProp="headline">
                                              <a
                                                href="#"
                                                title=""
                                                itemProp="url"
                                              >
                                                John Mathur
                                              </a>
                                            </h4>
                                            <p itemProp="description">
                                              Lorem ipsum dolor sit amet, pri
                                              nusquam petentium at. In mutat
                                              omnes homero mea, pro delenit
                                              accusam eu
                                            </p>
                                            <span className="customer-rating">
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star-o" />
                                              <i className="fa fa-star" />
                                              <span>(4)</span>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                    <div className="your-review">
                                      <h4
                                        className="title3"
                                        itemProp="headline"
                                      >
                                        <span className="sudo-bottom sudo-bg-red">
                                          Write
                                        </span>{" "}
                                        Review Here
                                      </h4>
                                      <form className="review-form">
                                        <textarea
                                          className="brd-rd5"
                                          defaultValue={
                                            "Lorem ipsum dolor sit amet, pri nusquam petentium at. In mutatomnes homero mea, pro delenit accusam eu"
                                          }
                                        />
                                        <button
                                          className="brd-rd2 red-bg"
                                          type="submit"
                                        >
                                          POST REVIEW
                                        </button>
                                        <div className="rate-box">
                                          <span>RATE US</span>
                                          <div className="rating-box">
                                            <span className="brd-rd2 clr1 on" />
                                            <span className="brd-rd2 clr2 on" />
                                            <span className="brd-rd2 clr3 on" />
                                            <span className="brd-rd2 clr4 on" />
                                            <span className="brd-rd2 clr5 on" />
                                            <span className="brd-rd2 clr6 on" />
                                            <span className="brd-rd2 clr7 off" />
                                            <span className="brd-rd2 clr8 off" />
                                            <i>4.0</i>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-tab5"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                >
                                  <div className="book-table">
                                    <h4 className="title3" itemProp="headline">
                                      <span className="sudo-bottom sudo-bg-red">
                                        Book
                                      </span>{" "}
                                      This Restaurant Table
                                    </h4>
                                    <form>
                                      <div className="row">
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="input-field brd-rd2">
                                            <i className="fa fa-user" />{" "}
                                            <input
                                              type="text"
                                              placeholder="NAME"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="input-field brd-rd2">
                                            <i className="fa fa-phone" />{" "}
                                            <input
                                              type="text"
                                              placeholder="PHONE"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="select-wrp2">
                                            <select>
                                              <option>Questions</option>
                                              <option>Questions No 1</option>
                                              <option>Questions No 2</option>
                                              <option>Questions No 3</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="input-field brd-rd2">
                                            <i className="fa fa-envelope" />{" "}
                                            <input
                                              type="email"
                                              placeholder="EMAIL"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="input-field brd-rd2">
                                            <i className="fa fa-calendar" />{" "}
                                            <input
                                              className="datepicker"
                                              type="text"
                                              placeholder="SELECT DATE"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-lg-6">
                                          <div className="input-field brd-rd2">
                                            <i className="fa fa-clock-o" />{" "}
                                            <input
                                              className="timepicker"
                                              type="text"
                                              placeholder="SELECT Time"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12">
                                          <div className="textarea-field brd-rd2">
                                            <i className="fa fa-pencil" />{" "}
                                            <textarea
                                              placeholder="Your Instruction"
                                              defaultValue={""}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-lg-12">
                                          <button
                                            className="brd-rd2 red-bg"
                                            type="submit"
                                          >
                                            POST PREVIEW
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-tab6"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                >
                                  <div className="restaurant-info-wrapper">
                                    <h3 className="title3" itemProp="headline">
                                      <span className="sudo-bottom sudo-bg-red">
                                        Book
                                      </span>{" "}
                                      This Restaurant Table
                                    </h3>
                                    <div className="loc-map" id="loc-map" />
                                    <ul className="restaurant-info-list">
                                      <li>
                                        <i className="fa fa-map-marker red-clr" />
                                        <strong>Address :</strong>
                                        <span>
                                          2nd Street, East-West Mansion Flat A2
                                          231 Newyork NY 10003
                                        </span>
                                      </li>
                                      <li>
                                        <i className="fa fa-phone red-clr" />
                                        <strong>Call us &amp; Hire us</strong>
                                        <span>+32 (0) 598 65 8968</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-envelope-o red-clr" />
                                        <strong>Have any questions?</strong>
                                        <span>Support@webinane.com</span>
                                      </li>
                                      <li>
                                        <i className="fa fa-fax red-clr" />
                                        <strong>Fax</strong>
                                        <span>+652 235 89658965</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 col-lg-4">
                        <div
                          className="order-wrapper right wow fadeIn"
                          data-wow-delay="0.2s"
                        >
                          <div className="order-inner gradient-brd">
                            <h4 itemProp="headline">Your Order</h4>
                            <div className="order-list-wrapper">
                              <ul className="order-list-inner">
                                <li>
                                  <div className="dish-name">
                                    <i>.1</i>{" "}
                                    <h6 itemProp="headline">
                                      Chicken Tandoori Special
                                    </h6>{" "}
                                    <span className="price">$85.00</span>
                                  </div>
                                  <div className="dish-ingredients">
                                    <span className="check-box">
                                      <input type="checkbox" id="checkbox1-1" />
                                      <label htmlFor="checkbox1-1">
                                        <span>Drink</span> <i>$12</i>
                                      </label>
                                    </span>
                                    <span className="check-box">
                                      <input type="checkbox" id="checkbox1-2" />
                                      <label htmlFor="checkbox1-2">
                                        <span>Butter</span> <i>$12</i>
                                      </label>
                                    </span>
                                  </div>
                                  <div className="mor-ingredients">
                                    <a
                                      className="red-clr"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      Edit
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="dish-name">
                                    <i>.2</i>{" "}
                                    <h6 itemProp="headline">
                                      Chicken Tandoori Special
                                    </h6>{" "}
                                    <span className="price">$90.00</span>
                                  </div>
                                  <div className="dish-ingredients">
                                    <span className="check-box">
                                      <input type="checkbox" id="checkbox2-1" />
                                      <label htmlFor="checkbox2-1">
                                        <span>Drink</span> <i>$10</i>
                                      </label>
                                    </span>
                                    <span className="check-box">
                                      <input type="checkbox" id="checkbox2-2" />
                                      <label htmlFor="checkbox2-2">
                                        <span>Butter</span> <i>$20</i>
                                      </label>
                                    </span>
                                  </div>
                                  <div className="mor-ingredients">
                                    <a
                                      className="red-clr"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      Edit
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="dish-name">
                                    <i>.3</i>{" "}
                                    <h6 itemProp="headline">
                                      Chicken Tandoori Special
                                    </h6>{" "}
                                    <span className="price">$100.00</span>
                                  </div>
                                  <div className="dish-ingredients">
                                    <span className="check-box">
                                      <input type="checkbox" id="checkbox3-1" />
                                      <label htmlFor="checkbox3-1">
                                        <span>Drink</span> <i>$30</i>
                                      </label>
                                    </span>
                                  </div>
                                  <div className="mor-ingredients">
                                    <a
                                      className="red-clr"
                                      href="#"
                                      title=""
                                      itemProp="url"
                                    >
                                      Edit
                                    </a>
                                    <div className="ingradient-list yellow-bg">
                                      <span className="check-box">
                                        <input
                                          type="checkbox"
                                          id="checkbox4-1"
                                        />
                                        <label htmlFor="checkbox4-1">
                                          <span>Extra Drink</span>
                                        </label>
                                      </span>
                                      <span className="check-box">
                                        <input
                                          type="checkbox"
                                          id="checkbox4-2"
                                        />
                                        <label htmlFor="checkbox4-2">
                                          <span>Extra Drink</span>
                                        </label>
                                      </span>
                                      <span className="check-box">
                                        <input
                                          type="checkbox"
                                          id="checkbox4-3"
                                        />
                                        <label htmlFor="checkbox4-3">
                                          <span>Extra Drink</span>
                                        </label>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              <ul className="order-total">
                                <li>
                                  <span>SubTotal</span> <i>$158</i>
                                </li>
                                <li>
                                  <span>Delivery fee</span> <i>$70</i>
                                </li>
                                <li>
                                  <span>Tax</span> <i>$12</i>
                                </li>
                              </ul>
                              <ul className="order-method brd-rd2 red-bg">
                                <li>
                                  <span>Total</span>{" "}
                                  <span className="price">$340</span>
                                </li>
                                <li>
                                  <span className="radio-box cash-popup-btn">
                                    <input
                                      type="radio"
                                      name="method"
                                      id="pay1-1"
                                    />
                                    <label htmlFor="pay1-1">
                                      <i className="fa fa-money" /> Cash
                                    </label>
                                  </span>{" "}
                                  <span className="radio-box card-popup-btn">
                                    <input
                                      type="radio"
                                      name="method"
                                      id="pay1-2"
                                    />
                                    <label htmlFor="pay1-2">
                                      <i className="fa fa-credit-card-alt" />{" "}
                                      Card
                                    </label>
                                  </span>
                                </li>
                                <li>
                                  <a
                                    className="brd-rd2"
                                    href="#"
                                    title=""
                                    itemProp="url"
                                  >
                                    CONFIRM ORDER
                                  </a>
                                </li>
                              </ul>
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
      </section>
    </>
  );
}
