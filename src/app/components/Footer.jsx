"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="block top-padd80 bottom-padd80 dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="footer-data">
                  <div className="row">
                    {/* ===== ABOUT ===== */}
                    <div className="col-md-3 col-sm-6 col-lg-3">
                      <div className="widget about_widget">
                        <div className="logo">
                          <h1>
                            <Link href="/" title="Home">
                              <img src="/assets/images/logo.png" alt="Logo" />
                            </Link>
                          </h1>
                        </div>

                        <p>
                          Food Ordering is a Premium HTML Template. Best choice
                          for your online store. Let purchase it to enjoy now
                        </p>

                        <div className="social2">
                          <a
                            className="brd-rd50"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                          <a
                            className="brd-rd50"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-google-plus" />
                          </a>
                          <a
                            className="brd-rd50"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-twitter" />
                          </a>
                          <a
                            className="brd-rd50"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-pinterest" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* ===== INFORMATION ===== */}
                    <div className="col-md-3 col-sm-6 col-lg-3">
                      <div className="widget information_links">
                        <h4 className="widget-title">INFORMATION</h4>
                        <ul>
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="/about-us">About Us</Link>
                          </li>
                          <li>
                            <Link href="/menu">Menu</Link>
                          </li>
                          <li>
                            <Link href="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="/contact-us">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ===== CUSTOMER CARE ===== */}
                    <div className="col-md-3 col-sm-6 col-lg-3">
                      <div className="widget customer_care">
                        <h4 className="widget-title">CUSTOMER CARE</h4>
                        <ul>
                          <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link href="/refund-policy">Refund Policy</Link>
                          </li>
                          <li>
                            <Link href="/terms-condition">
                              Terms & Condition
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* ===== CONTACT ===== */}
                    <div className="col-md-3 col-sm-6 col-lg-3">
                      <div className="widget get_in_touch">
                        <h4 className="widget-title">GET IN TOUCH</h4>
                        <ul>
                          <li>
                            <i className="fa fa-map-marker" /> 123 New Design
                            Str, ABC Building, Melbourne, Australia.
                          </li>
                          <li>
                            <i className="fa fa-phone" />{" "}
                            <a href="tel:+004486471234587">
                              (0044) 8647 1234 587
                            </a>
                          </li>
                          <li>
                            <i className="fa fa-envelope" />{" "}
                            <a href="mailto:hello@yourdomain.com">
                              hello@yourdomain.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer Data */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== COPYRIGHT ===== */}
      <div className="bottom-bar dark-bg text-center">
        <div className="container">
          <p>
            © 2025{" "}
            <a
              href="https://www.2sglobal.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-company"
            >
              2S Global Technologies Ltd.
            </a>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
