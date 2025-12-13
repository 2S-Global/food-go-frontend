"use client";

import React from "react";

const FoodCategoryFilter = () => {
  return (
    <section>
      <div className="block grayish low-opacity">
        <div
          className="fixed-bg"
          style={{ backgroundImage: "url(/assets/images/pattern.png)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="filters-wrapper">
                <div className="title1-wrapper text-center">
                  <div className="title1-inner">
                    <span>Your Favourite Food</span>
                    <h2 itemProp="headline">choose your food</h2>
                  </div>
                </div>
                <ul className="filter-buttons center ext-btm20">
                  <li className="active">
                    <a
                      className="brd-rd30"
                      data-filter="*"
                      href="#"
                      itemProp="url"
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      className="brd-rd30"
                      data-filter=".filter-item1"
                      href="#"
                      itemProp="url"
                    >
                      Beverages
                    </a>
                  </li>
                  <li>
                    <a
                      className="brd-rd30"
                      data-filter=".filter-item2"
                      href="#"
                      itemProp="url"
                    >
                      Burgers
                    </a>
                  </li>
                  <li>
                    <a
                      className="brd-rd30"
                      data-filter=".filter-item3"
                      href="#"
                      itemProp="url"
                    >
                      Pasta
                    </a>
                  </li>
                </ul>
                {/* Filter Buttons */}
                <div className="filters-inner">
                  <div className="row masonry">
                    <div className="col-md-6 col-sm-6 col-lg-6 filter-item filter-item1">
                      <div
                        className="featured-restaurant-box style2 brd-rd12 wow fadeIn"
                        data-wow-delay="0.1s"
                      >
                        <div className="featured-restaurant-thumb">
                          <a
                            href="restaurant-detail.html"
                            title=""
                            itemProp="url"
                          >
                            <img
                              src="/assets/images/most-popular-img1-1.png"
                              alt="most-popular-img1-1.png"
                              itemProp="image"
                            />
                          </a>
                        </div>
                        <div className="featured-restaurant-info">
                          <span className="red-clr">
                            5th Avenue New York 68
                          </span>
                          <h4 itemProp="headline">
                            <a
                              href="restaurant-detail.html"
                              title=""
                              itemProp="url"
                            >
                              Domino's Pizza
                            </a>
                          </h4>
                          <span className="food-types">
                            Type of food:
                            <a href="#" title="" itemProp="url">
                              Apple Juice
                            </a>
                            ,{" "}
                            <a href="#" title="" itemProp="url">
                              BB.Q
                            </a>
                            ,
                            <a href="#" title="" itemProp="url">
                              Beef Roast
                            </a>
                          </span>
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-check-circle-o" /> Min order
                              $50
                            </li>
                            <li>
                              <i className="flaticon-transport" /> 30min
                            </li>
                            <li>
                              <i className="flaticon-money" /> Accepts cash
                              &amp; online payments
                            </li>
                          </ul>
                          <span className="post-rate yellow-bg brd-rd2">
                            <i className="fa fa-star-o" /> 4.25
                          </span>
                          <span className="post-likes style2 red-clr">
                            <i className="fa fa-heart-o" /> 12
                          </span>
                          <a
                            className="brd-rd5"
                            href="restaurant-detail.html"
                            title="Order Online"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 filter-item filter-item2">
                      <div
                        className="featured-restaurant-box style2 brd-rd12 wow fadeIn"
                        data-wow-delay="0.2s"
                      >
                        <div className="featured-restaurant-thumb">
                          <a
                            href="restaurant-detail.html"
                            title=""
                            itemProp="url"
                          >
                            <img
                              src="/assets/images/most-popular-img1-2.png"
                              alt="most-popular-img1-2.png"
                              itemProp="image"
                            />
                          </a>
                        </div>
                        <div className="featured-restaurant-info">
                          <span className="red-clr">
                            5th Avenue New York 68
                          </span>
                          <h4 itemProp="headline">
                            <a
                              href="restaurant-detail.html"
                              title=""
                              itemProp="url"
                            >
                              Burger King
                            </a>
                          </h4>
                          <span className="food-types">
                            Type of food:
                            <a href="#" title="" itemProp="url">
                              Apple Juice
                            </a>
                            ,{" "}
                            <a href="#" title="" itemProp="url">
                              BB.Q
                            </a>
                            ,
                            <a href="#" title="" itemProp="url">
                              Beef Roast
                            </a>
                          </span>
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-check-circle-o" /> Min order
                              $50
                            </li>
                            <li>
                              <i className="flaticon-transport" /> 30min
                            </li>
                            <li>
                              <i className="flaticon-money" /> Accepts cash
                              &amp; online payments
                            </li>
                          </ul>
                          <span className="post-rate yellow-bg brd-rd2">
                            <i className="fa fa-star-o" /> 4.25
                          </span>
                          <span className="post-likes style2 red-clr">
                            <i className="fa fa-heart-o" /> 12
                          </span>
                          <a
                            className="brd-rd5"
                            href="restaurant-detail.html"
                            title="Order Online"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 filter-item filter-item3">
                      <div
                        className="featured-restaurant-box style2 brd-rd12 wow fadeIn"
                        data-wow-delay="0.3s"
                      >
                        <div className="featured-restaurant-thumb">
                          <a
                            href="restaurant-detail.html"
                            title=""
                            itemProp="url"
                          >
                            <img
                              src="/assets/images/most-popular-img1-3.png"
                              alt="most-popular-img1-3.png"
                              itemProp="image"
                            />
                          </a>
                        </div>
                        <div className="featured-restaurant-info">
                          <span className="red-clr">
                            5th Avenue New York 68
                          </span>
                          <h4 itemProp="headline">
                            <a
                              href="restaurant-detail.html"
                              title=""
                              itemProp="url"
                            >
                              Wendy's Cafe
                            </a>
                          </h4>
                          <span className="food-types">
                            Type of food:
                            <a href="#" title="" itemProp="url">
                              Apple Juice
                            </a>
                            ,{" "}
                            <a href="#" title="" itemProp="url">
                              BB.Q
                            </a>
                            ,
                            <a href="#" title="" itemProp="url">
                              Beef Roast
                            </a>
                          </span>
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-check-circle-o" /> Min order
                              $50
                            </li>
                            <li>
                              <i className="flaticon-transport" /> 30min
                            </li>
                            <li>
                              <i className="flaticon-money" /> Accepts cash
                              &amp; online payments
                            </li>
                          </ul>
                          <span className="post-rate yellow-bg brd-rd2">
                            <i className="fa fa-star-o" /> 4.25
                          </span>
                          <span className="post-likes style2 red-clr">
                            <i className="fa fa-heart-o" /> 12
                          </span>
                          <a
                            className="brd-rd5"
                            href="restaurant-detail.html"
                            title="Order Online"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 filter-item filter-item1 filter-item2 filter-item3">
                      <div
                        className="featured-restaurant-box style2 brd-rd12 wow fadeIn"
                        data-wow-delay="0.4s"
                      >
                        <div className="featured-restaurant-thumb">
                          <a
                            href="restaurant-detail.html"
                            title=""
                            itemProp="url"
                          >
                            <img
                              src="/assets/images/most-popular-img1-4.png"
                              alt="most-popular-img1-4.png"
                              itemProp="image"
                            />
                          </a>
                        </div>
                        <div className="featured-restaurant-info">
                          <span className="red-clr">
                            5th Avenue New York 68
                          </span>
                          <h4 itemProp="headline">
                            <a
                              href="restaurant-detail.html"
                              title=""
                              itemProp="url"
                            >
                              Restaurant
                            </a>
                          </h4>
                          <span className="food-types">
                            Type of food:
                            <a href="#" title="" itemProp="url">
                              Apple Juice
                            </a>
                            ,{" "}
                            <a href="#" title="" itemProp="url">
                              BB.Q
                            </a>
                            ,
                            <a href="#" title="" itemProp="url">
                              Beef Roast
                            </a>
                          </span>
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-check-circle-o" /> Min order
                              $50
                            </li>
                            <li>
                              <i className="flaticon-transport" /> 30min
                            </li>
                            <li>
                              <i className="flaticon-money" /> Accepts cash
                              &amp; online payments
                            </li>
                          </ul>
                          <span className="post-rate yellow-bg brd-rd2">
                            <i className="fa fa-star-o" /> 4.25
                          </span>
                          <span className="post-likes style2 red-clr">
                            <i className="fa fa-heart-o" /> 12
                          </span>
                          <a
                            className="brd-rd5"
                            href="restaurant-detail.html"
                            title="Order Online"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Filters Wrapper */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategoryFilter;
