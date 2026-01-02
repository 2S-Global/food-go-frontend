"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const res = await fetch(`${API_URL}/api/userdata/list-contact-details`);
        const result = await res.json();

        if (result?.success && result?.data?.length > 0) {
          setContact(result.data[0]); // API returns array
        }
      } catch (error) {
        console.error("Footer API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetails();
  }, [API_URL]);

  if (loading || !contact) return null; // footer silently waits

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
                            <Link href="/">
                              <img
                                src={contact.logo}
                                alt="Logo"
                                style={{ maxHeight: 60 }}
                              />
                            </Link>
                          </h1>
                        </div>

                        <p>{contact.short_description}</p>

                        <div className="social2">
                          {contact.social_links?.facebook && (
                            <a
                              className="brd-rd50"
                              href={contact.social_links.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          )}

                          {contact.social_links?.twitter && (
                            <a
                              className="brd-rd50"
                              href={contact.social_links.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          )}
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
                            <i className="fa fa-map-marker" /> {contact.address}
                          </li>
                          <li>
                            <i className="fa fa-phone" />{" "}
                            <a href={`tel:${contact.phone_number}`}>
                              {contact.phone_number}
                            </a>
                          </li>
                          <li>
                            <i className="fa fa-envelope" />{" "}
                            <a href={`mailto:${contact.email}`}>
                              {contact.email}
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
      </footer>

      {/* ===== COPYRIGHT ===== */}
      <div className="bottom-bar dark-bg text-center">
        <div className="container">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.2sglobal.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-company"
            >
              2S Global Technologies.
            </a>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
