"use client";

import React from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";

export default function AboutUsPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="A Greate Restaurant Website"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          //   { label: "Cart", href: "/cart" },
          { label: "About Us" },
        ]}
      />

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="sec-box">
                  <div
                    className="about-feat text-center wow fadeIn"
                    data-wow-delay="0.2s"
                  >
                    <h2 className="title3" itemProp="headline">
                      We Are Provide Food Online Service
                    </h2>
                    <img
                      src="/assets/images/about-img.jpg"
                      alt="about-img.jpg"
                      itemProp="image"
                    />
                  </div>
                  <div className="block less-spacing">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="title2-wrapper text-center">
                          <h2
                            className="sudo-bottom sudo-width70 sudo-bg-yellow"
                            itemProp="headline"
                          >
                            Easy 3 Step Order
                          </h2>
                        </div>
                        <div className="remove-ext text-center">
                          <div className="row">
                            <div className="col-md-4 col-sm-4 col-lg-4">
                              <div
                                className="step-box wow fadeIn"
                                data-wow-delay="0.2s"
                              >
                                <i>
                                  <img
                                    src="/assets/images/setp-img1.png"
                                    alt="setp-img1.png"
                                    itemProp="image"
                                  />{" "}
                                  <span className="brd-rd50 red-bg">1</span>
                                </i>
                                <div className="setp-box-inner">
                                  <h4 itemProp="headline">
                                    Explore Restaurants
                                  </h4>
                                  <p itemProp="description">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry
                                  </p>
                                </div>
                              </div>
                              {/* Step Box */}
                            </div>
                            <div className="col-md-4 col-sm-4 col-lg-4">
                              <div
                                className="step-box wow fadeIn"
                                data-wow-delay="0.4s"
                              >
                                <i>
                                  <img
                                    src="/assets/images/setp-img2.png"
                                    alt="setp-img2.png"
                                    itemProp="image"
                                  />{" "}
                                  <span className="brd-rd50 red-bg">2</span>
                                </i>
                                <div className="setp-box-inner">
                                  <h4 itemProp="headline">
                                    Choose a Tasty Dish
                                  </h4>
                                  <p itemProp="description">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry
                                  </p>
                                </div>
                              </div>
                              {/* Step Box */}
                            </div>
                            <div className="col-md-4 col-sm-4 col-lg-4">
                              <div
                                className="step-box wow fadeIn"
                                data-wow-delay="0.6s"
                              >
                                <i>
                                  <img
                                    src="/assets/images/setp-img3.png"
                                    alt="setp-img3.png"
                                    itemProp="image"
                                  />{" "}
                                  <span className="brd-rd50 red-bg">3</span>
                                </i>
                                <div className="setp-box-inner">
                                  <h4 itemProp="headline">Follow The Status</h4>
                                  <p itemProp="description">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry
                                  </p>
                                </div>
                              </div>
                              {/* Step Box */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="toggle-wrapper text-center bottom-padd80">
                    <div id="toggle" className="toggle">
                      <div className="toggle-item">
                        <h4>
                          <i className="fa fa-angle-right brd-rd50" /> How many
                          html templeates are added?
                        </h4>
                        <div className="content">
                          <p>
                            Who loves or pursues or desires to obtain pain of
                            itself, because it is pain, but because occasionally
                            circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial
                            example, which of us ever undertakes laborious
                            physical exercise, except to obtain some advantage
                            from it? But who has any right to find fault with a
                            man who chooses to enjoy a pleasure that has no
                            annoying consequences.
                          </p>
                        </div>
                      </div>
                      <div className="toggle-item">
                        <h4>
                          <i className="fa fa-angle-right brd-rd50" /> How many
                          one page templates are added?
                        </h4>
                        <div className="content">
                          <p>
                            Who loves or pursues or desires to obtain pain of
                            itself, because it is pain, but because occasionally
                            circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial
                            example, which of us ever undertakes laborious
                            physical exercise, except to obtain some advantage
                            from it? But who has any right to find fault with a
                            man who chooses to enjoy a pleasure that has no
                            annoying consequences.
                          </p>
                        </div>
                      </div>
                      <div className="toggle-item">
                        <h4>
                          <i className="fa fa-angle-right brd-rd50" /> How many
                          multi page templates are added?
                        </h4>
                        <div className="content">
                          <p>
                            Who loves or pursues or desires to obtain pain of
                            itself, because it is pain, but because occasionally
                            circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial
                            example, which of us ever undertakes laborious
                            physical exercise, except to obtain some advantage
                            from it? But who has any right to find fault with a
                            man who chooses to enjoy a pleasure that has no
                            annoying consequences.
                          </p>
                        </div>
                      </div>
                      <div className="toggle-item">
                        <h4>
                          <i className="fa fa-angle-right brd-rd50" /> The
                          Porton comes with page builder?
                        </h4>
                        <div className="content">
                          <p>
                            Who loves or pursues or desires to obtain pain of
                            itself, because it is pain, but because occasionally
                            circumstances occur in which toil and pain can
                            procure him some great pleasure. To take a trivial
                            example, which of us ever undertakes laborious
                            physical exercise, except to obtain some advantage
                            from it? But who has any right to find fault with a
                            man who chooses to enjoy a pleasure that has no
                            annoying consequences.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Accordions */}
                  </div>
                  <div className="featured-restaurant-food text-center bottom-padd80">
                    <div className="featured-restaurant-food-thumb">
                      <ul className="featured-restaurant-food-img-carousel">
                        <li>
                          <img
                            src="/assets/images/featured-restaurant-food-img1.jpg"
                            alt="featured-restaurant-food-img1.jpg"
                            itemProp="url"
                          />{" "}
                          <a
                            className="brd-rd50 vimeo"
                            data-fancybox=""
                            href="https://vimeo.com/49674259"
                            title="Click To play"
                            itemProp="url"
                          >
                            <i className="fa fa-vimeo" />
                          </a>
                        </li>
                        <li>
                          <img
                            src="/assets/images/featured-restaurant-food-img2.jpg"
                            alt="featured-restaurant-food-img2.jpg"
                            itemProp="url"
                          />{" "}
                          <a
                            className="brd-rd50 youtube"
                            data-fancybox=""
                            href="https://www.youtube.com/embed/V6Vd1E9OL-U"
                            title="Click To play"
                            itemProp="url"
                          >
                            <i className="fa fa-youtube-play" />
                          </a>
                        </li>
                        <li>
                          <img
                            src="/assets/images/featured-restaurant-food-img3.jpg"
                            alt="featured-restaurant-food-img3.jpg"
                            itemProp="url"
                          />
                        </li>
                        <li>
                          <img
                            src="/assets/images/featured-restaurant-food-img4.jpg"
                            alt="featured-restaurant-food-img4.jpg"
                            itemProp="url"
                          />
                        </li>
                        <li>
                          <img
                            src="/assets/images/featured-restaurant-food-img5.jpg"
                            alt="featured-restaurant-food-img5.jpg"
                            itemProp="url"
                          />
                        </li>
                        <li>
                          <img
                            src="/assets/images/featured-restaurant-food-img6.jpg"
                            alt="featured-restaurant-food-img6.jpg"
                            itemProp="url"
                          />
                        </li>
                      </ul>
                      <ul className="featured-restaurant-food-thumb-carousel">
                        <li>
                          <img
                            className="brd-rd3"
                            src="/assets/images/featured-restaurant-food-thumb-img1.jpg"
                            alt="featured-restaurant-food-thumb-img1.jpg"
                            itemProp="image"
                          />
                        </li>
                        <li>
                          <img
                            className="brd-rd3"
                            src="/assets/images/featured-restaurant-food-thumb-img2.jpg"
                            alt="featured-restaurant-food-thumb-img2.jpg"
                            itemProp="image"
                          />
                        </li>
                        <li>
                          <img
                            className="brd-rd3"
                            src="/assets/images/featured-restaurant-food-thumb-img3.jpg"
                            alt="featured-restaurant-food-thumb-img3.jpg"
                            itemProp="image"
                          />
                        </li>
                        <li>
                          <img
                            className="brd-rd3"
                            src="/assets/images/featured-restaurant-food-thumb-img4.jpg"
                            alt="featured-restaurant-food-thumb-img4.jpg"
                            itemProp="image"
                          />
                        </li>
                        <li>
                          <img
                            className="brd-rd3"
                            src="/assets/images/featured-restaurant-food-thumb-img5.jpg"
                            alt="featured-restaurant-food-thumb-img5.jpg"
                            itemProp="image"
                          />
                        </li>
                        <li>
                          <img
                            className="brd-rd3"
                            src="/assets/images/featured-restaurant-food-thumb-img6.jpg"
                            alt="featured-restaurant-food-thumb-img6.jpg"
                            itemProp="image"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="title1-wrapper text-center style2">
                    <div className="title1-inner">
                      <h2 itemProp="headline">Top Restaurants</h2>
                      <p itemProp="description">
                        Things that get tricky are things like burgers and
                        fries, or things that are deep-fried. We do have a
                        couple of burger restaurants that are capable of doing a
                        good job transporting but it's definitely a lot harder
                        to do that. Fries are almost impossible
                      </p>
                    </div>
                  </div>
                  <div className="top-restaurant-carousel2 less-btm-margin">
                    <div className="top-restaurant-item">
                      <a href="#" title="Restaurant 1" itemProp="url">
                        <img
                          src="/assets/images/top-restaurant1.png"
                          alt="top-restaurant1.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                    <div className="top-restaurant-item">
                      <a href="#" title="Restaurant 2" itemProp="url">
                        <img
                          src="/assets/images/top-restaurant2.png"
                          alt="top-restaurant2.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                    <div className="top-restaurant-item">
                      <a href="#" title="Restaurant 3" itemProp="url">
                        <img
                          src="/assets/images/top-restaurant3.png"
                          alt="top-restaurant3.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                    <div className="top-restaurant-item">
                      <a href="#" title="Restaurant 4" itemProp="url">
                        <img
                          src="/assets/images/top-restaurant4.png"
                          alt="top-restaurant4.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                    <div className="top-restaurant-item">
                      <a href="#" title="Restaurant 5" itemProp="url">
                        <img
                          src="/assets/images/top-restaurant5.png"
                          alt="top-restaurant5.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                    <div className="top-restaurant-item">
                      <a href="#" title="Restaurant 6" itemProp="url">
                        <img
                          src="/assets/images/top-restaurant6.png"
                          alt="top-restaurant6.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                    <div className="top-restaurant-item">
                      <a href="#" title="Restaurant 7" itemProp="url">
                        <img
                          src="/assets/images/top-restaurant7.png"
                          alt="top-restaurant7.png"
                          itemProp="image"
                        />
                      </a>
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
