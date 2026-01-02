"use client";

import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import Loader from "../components/Loader";

export default function ContactUsPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg("");
      }, 4000); // ⏱️ 4 seconds

      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  /* ================= FETCH CONTACT DETAILS ================= */
  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const res = await fetch(`${API_URL}/api/userdata/list-contact-details`);
        const result = await res.json();

        if (result?.success && result?.data?.length > 0) {
          setContact(result.data[0]);
        }
      } catch (error) {
        console.error("Contact API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetails();
  }, [API_URL]);

  /* ================= FORM CHANGE ================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= FORM SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result?.success !== false) {
        setSuccessMsg("Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMsg(result?.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Contact submit error:", error);
      setErrorMsg("Server error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ================= UI STATES ================= */
  if (loading) return <Loader />;
  if (!contact) return <p className="text-center">Contact details not found</p>;

  return (
    <>
      {/* ===== BANNER ===== */}
      <PageBanner
        title="Contact Us"
        subtitle="A Great Restaurant Website"
        background="/assets/images/contact_us.jpg"
        showSearchForm={false}
      />

      {/* ===== BREADCRUMB ===== */}
      <BreadCrumbs
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-box">
                  {/* ===== CONTACT INFO ===== */}
                  <div className="contact-info-sec text-center">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="contact-info-box">
                          <i className="fa fa-phone-square" />
                          <h5>PHONE</h5>
                          <p>
                            <a href={`tel:${contact.phone_number}`}>
                              {contact.phone_number}
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="contact-info-box">
                          <i className="fa fa-map-marker" />
                          <h5>ADDRESS</h5>
                          <p>{contact.address}</p>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="contact-info-box">
                          <i className="fa fa-envelope" />
                          <h5>EMAIL</h5>
                          <p>
                            <a href={`mailto:${contact.email}`}>
                              {contact.email}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ===== CONTACT FORM ===== */}
                  <div className="contact-form-wrapper text-center">
                    <div className="contact-form-inner">
                      <h3>
                        If You Got Any Questions <br />
                        Please Do Not Hesitate to Send us a Message.
                      </h3>

                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-12">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-md-12">
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-md-12">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="col-md-12">
                            <textarea
                              name="message"
                              placeholder="Message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {(successMsg || errorMsg) && (
                            <div className="col-md-12">
                              <p
                                className={
                                  successMsg ? "text-success" : "text-danger"
                                }
                              >
                                {successMsg || errorMsg}
                              </p>
                            </div>
                          )}

                          <div className="col-md-12">
                            <button
                              className="brd-rd2"
                              type="submit"
                              disabled={submitting}
                            >
                              {submitting ? "Sending..." : "SEND MESSAGE"}
                            </button>
                          </div>
                        </div>
                      </form>
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
