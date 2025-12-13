"use client";
import React from "react";

const FoodSection = () => {
  return (
    <>
      <section>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="title1-wrapper text-center">
                  <div className="title1-inner">
                    <span>Your Favourite Food</span>
                    <h2 itemProp="headline">Choose &amp; Enjoy</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div
                      className="popular-dish-box wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <div className="popular-dish-thumb">
                        <a href="food-detail.html" title="" itemProp="url">
                          <img
                            src="assets/images/popular-dish-img1.jpg"
                            alt="popular-dish-img1.jpg"
                            itemProp="image"
                          />
                        </a>
                        <span className="post-rate yellow-bg brd-rd2">
                          <i className="fa fa-star-o" /> 4.25
                        </span>
                        <span className="post-likes brd-rd4">
                          <i className="fa fa-heart-o" /> 12
                        </span>
                      </div>
                      <div className="popular-dish-info">
                        <h4 itemProp="headline">
                          <a href="food-detail.html" title="" itemProp="url">
                            Maenaam Thai Restaurant
                          </a>
                        </h4>
                        <p itemProp="description">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                        <span className="price">$85.00</span>
                        <a
                          className="brd-rd2"
                          href="food-detail.html"
                          title="Order Now"
                          itemProp="url"
                        >
                          Order Now
                        </a>
                        <div className="restaurant-info">
                          <img
                            src="assets/images/restaurant-logo1.png"
                            alt="restaurant-logo1.png"
                            itemProp="image"
                          />
                          <div className="restaurant-info-inner">
                            <h6 itemProp="headline">
                              <a
                                href="restaurant-detail.html"
                                title=""
                                itemProp="url"
                              >
                                Fabio al Porto Ristorante
                              </a>
                            </h6>
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Popular Dish Box */}
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div
                      className="popular-dish-box wow fadeIn"
                      data-wow-delay="0.4s"
                    >
                      <div className="popular-dish-thumb">
                        <a href="food-detail.html" title="" itemProp="url">
                          <img
                            src="assets/images/popular-dish-img2.jpg"
                            alt="popular-dish-img2.jpg"
                            itemProp="image"
                          />
                        </a>
                        <span className="post-rate yellow-bg brd-rd2">
                          <i className="fa fa-star-o" /> 3.25
                        </span>
                        <span className="post-likes brd-rd4">
                          <i className="fa fa-heart-o" /> 10
                        </span>
                      </div>
                      <div className="popular-dish-info">
                        <h4 itemProp="headline">
                          <a href="food-detail.html" title="" itemProp="url">
                            Champignon somen Noodles
                          </a>
                        </h4>
                        <p itemProp="description">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                        <span className="price">$70.00</span>
                        <a
                          className="brd-rd2"
                          href="food-detail.html"
                          title="Order Now"
                          itemProp="url"
                        >
                          Order Now
                        </a>
                        <div className="restaurant-info">
                          <img
                            src="assets/images/restaurant-logo1.png"
                            alt="restaurant-logo2.png"
                            itemProp="image"
                          />
                          <div className="restaurant-info-inner">
                            <h6 itemProp="headline">
                              <a
                                href="restaurant-detail.html"
                                title=""
                                itemProp="url"
                              >
                                Fabio al Porto Ristorante
                              </a>
                            </h6>
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Popular Dish Box */}
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div
                      className="popular-dish-box wow fadeIn"
                      data-wow-delay="0.6s"
                    >
                      <div className="popular-dish-thumb">
                        <a href="food-detail.html" title="" itemProp="url">
                          <img
                            src="assets/images/popular-dish-img3.jpg"
                            alt="popular-dish-img3.jpg"
                            itemProp="image"
                          />
                        </a>
                        <span className="post-rate yellow-bg brd-rd2">
                          <i className="fa fa-star-o" /> 5.00
                        </span>
                        <span className="post-likes brd-rd4">
                          <i className="fa fa-heart-o" /> 15
                        </span>
                      </div>
                      <div className="popular-dish-info">
                        <h4 itemProp="headline">
                          <a href="food-detail.html" title="" itemProp="url">
                            Tomatoes &amp; Clams Pasta
                          </a>
                        </h4>
                        <p itemProp="description">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                        <span className="price">$99.00</span>
                        <a
                          className="brd-rd2"
                          href="food-detail.html"
                          title="Order Now"
                          itemProp="url"
                        >
                          Order Now
                        </a>
                        <div className="restaurant-info">
                          <img
                            src="assets/images/restaurant-logo1.png"
                            alt="restaurant-logo3.png"
                            itemProp="image"
                          />
                          <div className="restaurant-info-inner">
                            <h6 itemProp="headline">
                              <a
                                href="restaurant-detail.html"
                                title=""
                                itemProp="url"
                              >
                                Fabio al Porto Ristorante
                              </a>
                            </h6>
                            <span className="red-clr">
                              5th Avenue New York 68
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Popular Dish Box */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodSection;
