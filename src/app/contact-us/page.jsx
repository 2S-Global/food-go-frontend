"use client";

import React from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="A Greate Restaurant Website"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          //   { label: "Cart", href: "/cart" },
          { label: "Contact Us" },
        ]}
      />

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="sec-box">
                  <div className="loc-map" id="loc-map" />
                  <div className="contact-info-sec text-center">
                    <div className="row">
                      <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="contact-info-box">
                          <i className="fa fa-phone-square" />
                          <h5 itemProp="headline">PHONE</h5>
                          <p itemProp="description">
                            Phone 01: (0091) 8547 632521
                          </p>
                          <p itemProp="description">Phone 02: (084) 965 4788</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="contact-info-box">
                          <i className="fa fa-map-marker" />
                          <h5 itemProp="headline">ADDRESS</h5>
                          <p itemProp="description">
                            5Tth Floor, AH Building, 756 New St Melbourne,
                            Australia.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="contact-info-box">
                          <i className="fa fa-envelope" />
                          <h5 itemProp="headline">EMAIL</h5>
                          <p itemProp="description">support@yourdomain.com</p>
                          <p itemProp="description">hello@yourdomain.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-form-wrapper text-center">
                    <div className="contact-form-inner">
                      <h3 itemProp="headline">
                        If You Got Any Questions <br /> Please Do Not Hesitate
                        to Send us a Message.
                      </h3>
                      <div id="message" />
                      <form method="post" action="contact.php" id="contactform">
                        <div className="row">
                          <div className="col-md-12 col-sm-6 col-lg-12">
                            <input
                              id="name"
                              type="text"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="col-md-12 col-sm-6 col-lg-12">
                            <input
                              id="email"
                              type="email"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <input type="text" placeholder="Subject" />
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <textarea
                              id="comments"
                              placeholder="Message"
                              defaultValue={""}
                            />
                          </div>
                          {/*<div class="col-md-12 col-sm-12 col-lg-12">
                                              <div class="g-recaptcha" data-sitekey="6LelmzAUAAAAAHBE2SJeRMfnzYVxH9RMGQstUij2"></div> 
                                          </div>*/}
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <button
                              className="brd-rd2"
                              id="submit"
                              type="submit"
                            >
                              SEND MESSAGE
                            </button>
                            <img
                              src="/assets/images/ajax-loader.gif"
                              className="loader"
                              alt="ajax-loader.gif"
                              itemProp="image"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Contact Form Wrapper */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
