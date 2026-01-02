"use client";

import React from "react";

const EasyOrderSteps = () => {
  return (
    <>
    <style jsx>{`
        .setp-box-inner p {
          color: antiquewhite;
        }
      `}</style>
    
    <section>
      <div className="block blue-overlay low-opacity">
        <div
          className="fixed-bg"
          style={{ backgroundImage: "url(/assets/images/easy_order.png)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="title1-wrapper text-center">
                <div className="title1-inner">
                  <span>Choose Meal fast & simple</span>
                  <h2 className="text-white" itemProp="headline">
                    easy order in 3 steps
                  </h2>
                </div>
              </div>
              <div className="remove-ext text-center">
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-lg-4">
                    <div className="step-box wow fadeIn" data-wow-delay="0.2s">
                      <i>
                        <img
                          src="/assets/images/setp-img1.png"
                          alt="setp-img1.png"
                          itemProp="image"
                        />
                        <span className="brd-rd50 red-bg">1</span>
                      </i>
                      <div className="setp-box-inner">
                        <h4 itemProp="headline">Choose meal type</h4>
                        <p itemProp="description"  >
                          Choose your weekly meal from a wide range of veg and non-veg options.
                        </p>
                      </div>
                    </div>
                    {/* Step Box */}
                  </div>
                  <div className="col-md-4 col-sm-4 col-lg-4">
                    <div className="step-box wow fadeIn" data-wow-delay="0.4s">
                      <i>
                        <img
                          src="/assets/images/setp-img2.png"
                          alt="setp-img2.png"
                          itemProp="image"
                        />
                        <span className="brd-rd50 red-bg">2</span>
                      </i>
                      <div className="setp-box-inner">
                        <h4 itemProp="headline">Choose a Starting Date</h4>
                        <p itemProp="description" >
                          Choose a starting date and end date to enjoy your meals.
                        </p>
                      </div>
                    </div>
                    {/* Step Box */}
                  </div>
                  <div className="col-md-4 col-sm-4 col-lg-4">
                    <div className="step-box wow fadeIn" data-wow-delay="0.6s">
                      <i>
                        <img
                          src="/assets/images/setp-img3.png"
                          alt="setp-img3.png"
                          itemProp="image"
                        />
                        <span className="brd-rd50 red-bg">3</span>
                      </i>
                      <div className="setp-box-inner">
                        <h4 itemProp="headline">Confirm and Pay</h4>
                        <p itemProp="description" >
                          Confirm your order and make the payment. Enjoy your meals!
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
      </div>
    </section>
    </>
  );
};

export default EasyOrderSteps;
