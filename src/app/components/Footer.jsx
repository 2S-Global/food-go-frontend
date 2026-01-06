"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchContactDetails = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(
          `${API_URL}/api/userdata/list-contact-details`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("API failed");

        const result = await res.json();

        if (result?.success && result?.data?.length > 0) {
          setContact(result.data[0]);
        } else {
          throw new Error("No data");
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Footer API error:", err);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetails();

    return () => controller.abort();
  }, [API_URL]);

  /* ===============================
     FALLBACK DATA (STATIC)
  =============================== */
  const fallbackContact = {
    logo: "/assets/images/logo.png",
    short_description: "Trusted platform delivering quality services.",
    address: "India",
    phone_number: "+91-0000000000",
    email: "support@example.com",
    social_links: {},
  };

  const data = contact || fallbackContact;

  return (
    <>
      <footer>
        <div className="block top-padd80 bottom-padd80 dark-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-data">
                  <div className="row">
                    {/* ===== ABOUT ===== */}
                    <div className="col-md-3 col-sm-6">
                      <div className="widget about_widget">
                        <div className="logo">
                          <Link href="/">
                            <img
                              src={data.logo}
                              alt="Logo"
                              style={{ maxHeight: 60 }}
                            />
                          </Link>
                        </div>
                        <p>{data.short_description}</p>
                      </div>
                    </div>

                    {/* ===== INFORMATION ===== */}
                    <div className="col-md-3 col-sm-6">
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
                    <div className="col-md-3 col-sm-6">
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
                    <div className="col-md-3 col-sm-6">
                      <div className="widget get_in_touch">
                        <h4 className="widget-title">GET IN TOUCH</h4>
                        <ul>
                          <li>
                            <i className="fa fa-map-marker" /> {data.address}
                          </li>
                          <li>
                            <i className="fa fa-phone" />
                            <a href={`tel:${data.phone_number}`}>
                              {data.phone_number}
                            </a>
                          </li>
                          <li>
                            <i className="fa fa-envelope" />
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                          </li>
                        </ul>

                        {error && (
                          <small style={{ color: "#ccc" }}>
                            ⚠ Using cached footer data
                          </small>
                        )}
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
