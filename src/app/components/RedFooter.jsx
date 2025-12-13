"use client";

import React from "react";

const RedFooter = () => {
  return (
    <section>
      <div className="block no-padding red-bg">
        <img
          className="bottom-clouds-mockup"
          src="assets/images/clouds2.png"
          alt="clouds2.png"
          itemProp="image"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="app-sec">
                <div className="row">
                  <div className="col-md-4 hidden-sm col-md-offset-1 col-sm-4 col-sm-offset-0 col-lg-4 col-lg-offset-1">
                    <div
                      className="app-mockup text-right overlape-110 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <img
                        src="assets/images/app-mockup.png"
                        alt="app-mockup.png"
                        itemProp="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-md-offset-1 col-sm-12 col-sm-offset-0 col-lg-6 col-lg-offset-1">
                    <div className="app-info">
                      <h4 itemProp="headline">The Best Food Delivery App</h4>
                      <p itemProp="description">
                        We have a launch team that focuses on one city at a
                        time. At the end of the day, we're a marketplace. In
                        order to make an effective marketplace, you need
                        critical mass. We need enough restaurants that quality
                        and variety
                      </p>
                      <div className="app-download-btns">
                        <a
                          className=""
                          href="#"
                          title="Google Play Store"
                          itemProp="url"
                          target="_blank"
                        >
                          <img
                            src="assets/images/app-download-btn1.png"
                            alt="app-download-btn1.png"
                            itemProp="image"
                          />
                        </a>
                        <a
                          className=""
                          href="#"
                          title="Apple App Store"
                          itemProp="url"
                          target="_blank"
                        >
                          <img
                            src="assets/images/app-download-btn2.png"
                            alt="app-download-btn2.png"
                            itemProp="image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* App Section */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedFooter;
