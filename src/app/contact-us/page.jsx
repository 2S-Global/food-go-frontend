"use client";

import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import Loader from "../components/Loader";

export default function ContactUsPage() {
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
        console.error("Contact API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetails();
  }, [API_URL]);

  if (loading) return <Loader />;
  if (!contact) return <p className="text-center">Contact details not found</p>;

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="A Great Restaurant Website"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="sec-box">
                  {/* ===== CONTACT INFO ===== */}
                  <div className="contact-info-sec text-center">
                    <div className="row">
                      {/* PHONE */}
                      <div className="col-md-4 col-sm-4 col-lg-4">
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

                      {/* ADDRESS */}
                      <div className="col-md-4 col-sm-4 col-lg-4">
                        <div className="contact-info-box">
                          <i className="fa fa-map-marker" />
                          <h5>ADDRESS</h5>
                          <p>{contact.address}</p>
                        </div>
                      </div>

                      {/* EMAIL */}
                      <div className="col-md-4 col-sm-4 col-lg-4">
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

                      <form>
                        <div className="row">
                          <div className="col-md-12">
                            <input type="text" placeholder="Your Name" />
                          </div>
                          <div className="col-md-12">
                            <input type="email" placeholder="Your Email" />
                          </div>
                          <div className="col-md-12">
                            <input type="text" placeholder="Subject" />
                          </div>
                          <div className="col-md-12">
                            <textarea placeholder="Message" />
                          </div>
                          <div className="col-md-12">
                            <button className="brd-rd2" type="submit">
                              SEND MESSAGE
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
