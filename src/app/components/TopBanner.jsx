"use client";
import React from "react";
import Link from "next/link";

const TopBanner = () => {
  return (
    <section>
      <div className="block remove-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="title1-wrapper text-center">
                <div className="title1-inner">
                  <span>Website for Restaurant and Cafe</span>
                  <h2 itemProp="headline">Top Restaurants</h2>
                  <p itemProp="description">
                    Things that get tricky are things like burgers and fries, or
                    things that are deep-fried. We do have a couple of burger
                    restaurants that are capable of doing a good job
                    transporting but it's Fries are almost impossible.
                  </p>
                </div>
              </div>
              <div className="top-restaurants-wrapper">
                <ul className="restaurants-wrapper style2">
                  <li className="wow bounceIn" data-wow-delay="0.2s">
                    <div className="top-restaurant">
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Restaurant 1"
                        itemProp="url"
                      >
                        <img
                          src="assets/images/top-restaurant1.png"
                          alt="top-restaurant1.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                  </li>
                  <li className="wow bounceIn" data-wow-delay="0.4s">
                    <div className="top-restaurant">
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Restaurant 2"
                        itemProp="url"
                      >
                        <img
                          src="assets/images/top-restaurant2.png"
                          alt="top-restaurant2.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                  </li>
                  <li className="wow bounceIn" data-wow-delay="0.6s">
                    <div className="top-restaurant">
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Restaurant 3"
                        itemProp="url"
                      >
                        <img
                          src="assets/images/top-restaurant3.png"
                          alt="top-restaurant3.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                  </li>
                  <li className="wow bounceIn" data-wow-delay="0.8s">
                    <div className="top-restaurant">
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Restaurant 4"
                        itemProp="url"
                      >
                        <img
                          src="assets/images/top-restaurant4.png"
                          alt="top-restaurant4.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                  </li>
                  <li className="wow bounceIn" data-wow-delay="1s">
                    <div className="top-restaurant">
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Restaurant 5"
                        itemProp="url"
                      >
                        <img
                          src="assets/images/top-restaurant5.png"
                          alt="top-restaurant5.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                  </li>
                  <li className="wow bounceIn" data-wow-delay="1.2s">
                    <div className="top-restaurant">
                      <a
                        className="brd-rd50"
                        href="#"
                        title="Restaurant 5"
                        itemProp="url"
                      >
                        <img
                          src="assets/images/top-restaurant6.png"
                          alt="top-restaurant6.png"
                          itemProp="image"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
