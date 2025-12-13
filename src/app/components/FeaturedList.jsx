"use client";

import React from "react";

const FeaturedList = () => {
  return (
    <section>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="title1-wrapper text-center">
                <div className="title1-inner">
                  <span>Website for Restaurant and Cafe</span>
                  <h2 itemProp="headline">Featured resturents</h2>
                </div>
              </div>
              <div className="featured-restaurants-wrapper">
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="featured-restaurants-list">
                      <div
                        className="featured-restaurant-box wow fadeIn"
                        data-wow-delay="0.1s"
                      >
                        <div className="featured-restaurant-thumb">
                          <a href="food-detail.html" title="" itemProp="url">
                            <img
                              className="brd-rd2"
                              src="/assets/images/featured-restaurant-img1.jpg"
                              alt="featured-restaurant-img1.jpg"
                              itemProp="image"
                            />
                          </a>
                        </div>
                        <div className="featured-restaurant-info">
                          <span className="red-clr">
                            5th Avenue New York 68
                          </span>
                          <h4 itemProp="headline">
                            <a href="food-detail.html" title="" itemProp="url">
                              Tuna Roast Source
                            </a>
                          </h4>
                          <span className="price">$85.00</span>
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-check-circle-o" /> Min order
                              $50
                            </li>
                            <li>
                              <i className="flaticon-transport" /> 30min
                            </li>
                          </ul>
                          <span className="post-rate yellow-bg brd-rd2">
                            <i className="fa fa-star-o" /> 4.25
                          </span>
                        </div>
                      </div>
                      <div
                        className="featured-restaurant-box wow fadeIn"
                        data-wow-delay="0.2s"
                      >
                        <div className="featured-restaurant-thumb">
                          <a href="food-detail.html" title="" itemProp="url">
                            <img
                              className="brd-rd2"
                              src="/assets/images/featured-restaurant-img2.jpg"
                              alt="featured-restaurant-img2.jpg"
                              itemProp="image"
                            />
                          </a>
                        </div>
                        <div className="featured-restaurant-info">
                          <span className="red-clr">
                            5th Avenue New York 68
                          </span>
                          <h4 itemProp="headline">
                            <a href="food-detail.html" title="" itemProp="url">
                              Crab With Curry Sources
                            </a>
                          </h4>
                          <span className="price">$70.00</span>
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-check-circle-o" /> Min order
                              $40
                            </li>
                            <li>
                              <i className="flaticon-transport" /> 20min
                            </li>
                          </ul>
                          <span className="post-rate yellow-bg brd-rd2">
                            <i className="fa fa-star-o" /> 4.03
                          </span>
                        </div>
                      </div>
                      <div
                        className="featured-restaurant-box wow fadeIn"
                        data-wow-delay="0.3s"
                      >
                        <div className="featured-restaurant-thumb">
                          <a href="food-detail.html" title="" itemProp="url">
                            <img
                              className="brd-rd2"
                              src="/assets/images/featured-restaurant-img3.jpg"
                              alt="featured-restaurant-img3.jpg"
                              itemProp="image"
                            />
                          </a>
                        </div>
                        <div className="featured-restaurant-info">
                          <span className="red-clr">
                            5th Avenue New York 68
                          </span>
                          <h4 itemProp="headline">
                            <a href="food-detail.html" title="" itemProp="url">
                              Imported Salmon Steak
                            </a>
                          </h4>
                          <span className="price">$90.00</span>
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-check-circle-o" /> Min order
                              $60
                            </li>
                            <li>
                              <i className="flaticon-transport" /> 45min
                            </li>
                          </ul>
                          <span className="post-rate yellow-bg brd-rd2">
                            <i className="fa fa-star-o" /> 5.00
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Featured Restaurants List */}
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="featured-restaurant-gallery">
                      <div className="featured-restaurant-carousel">
                        <div className="featured-restaurant-thumb">
                          <img
                            className="brd-rd2"
                            src="/assets/images/featured-restaurant-gallery1.jpg"
                            alt="featured-restaurant-gallery1.jpg"
                            itemProp="image"
                          />
                        </div>
                        <div className="featured-restaurant-thumb">
                          <img
                            className="brd-rd2"
                            src="/assets/images/featured-restaurant-gallery2.jpg"
                            alt="featured-restaurant-gallery2.jpg"
                            itemProp="image"
                          />
                        </div>
                      </div>
                      <div className="featured-restaurant-box">
                        <div className="featured-restaurant-thumb">
                          <a
                            className="red-bg brd-rd2"
                            data-fancybox=""
                            href="https://vimeo.com/49674259"
                            title="Click To Play"
                            itemProp="url"
                          >
                            <i className="fa fa-play" />
                          </a>
                          <span className="video-time">15mint</span>
                        </div>
                        <div className="featured-restaurant-info">
                          <span className="red-clr">
                            5th Avenue New York 68
                          </span>
                          <h4 itemProp="headline">
                            <a href="food-detail.html" title="" itemProp="url">
                              Maenaam Thai Restaurant
                            </a>
                          </h4>
                          <span className="price">$85.00</span>
                          <ul className="post-meta">
                            <li>
                              <i className="fa fa-check-circle-o" /> Min order
                              $50
                            </li>
                            <li>
                              <i className="flaticon-transport" /> 30min
                            </li>
                          </ul>
                          <span className="post-rate yellow-bg brd-rd2">
                            <i className="fa fa-star-o" /> 4.25
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Featured Restaurant Gallery */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedList;
