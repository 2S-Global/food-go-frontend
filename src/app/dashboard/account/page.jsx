"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/app/components/Loader";


export default function AccountSettingsPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div className="tabs-wrp account-settings brd-rd5">
      <h4>ACCOUNT SETTINGS</h4>
      <div className="account-settings-inner">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-lg-4">
            <div className="profile-info text-center">
              <div className="profile-thumb brd-rd50">
                <img
                  id="profile-display"
                  src="/assets/images/profile-img1.jpg"
                  alt="profile-img1.jpg"
                  itemProp="image"
                />
              </div>
              <a
                className="red-clr change-password"
                href="/change-password"
                title=""
                itemProp="url"
              >
                Change Password
              </a>
              <div className="profile-img-upload-btn">
                <label className="fileContainer brd-rd5 yellow-bg">
                  UPLOAD PICTURE
                  <input id="profile-upload" type="file" />
                </label>
              </div>
              <p itemProp="description">
                Upload a profile picture or choose one of the following
              </p>
              <div className="default-img-lst">
                <img
                  className="brd-rd50"
                  src="/assets/images/profile-thumb1.jpg"
                  alt="profile-thumb1.jpg"
                  itemProp="image"
                />
                <img
                  className="brd-rd50"
                  src="/assets/images/profile-thumb2.jpg"
                  alt="profile-thumb2.jpg"
                  itemProp="image"
                />
                <img
                  className="brd-rd50"
                  src="/assets/images/profile-thumb3.jpg"
                  alt="profile-thumb3.jpg"
                  itemProp="image"
                />
                <img
                  className="brd-rd50"
                  src="/assets/images/profile-thumb4.jpg"
                  alt="profile-thumb4.jpg"
                  itemProp="image"
                />
                <img
                  className="brd-rd50"
                  src="/assets/images/profile-thumb5.jpg"
                  alt="profile-thumb5.jpg"
                  itemProp="image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-lg-8">
            <div className="profile-info-form-wrap">
              <form className="profile-info-form">
                <div className="row mrg20">
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <label>
                      Complete Name <sup>*</sup>
                    </label>
                    <input
                      className="brd-rd3"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <label>
                      Email Address <sup>*</sup>
                    </label>
                    <input
                      className="brd-rd3"
                      type="email"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <label>
                      Phone No <sup>*</sup>
                    </label>
                    <input
                      className="brd-rd3"
                      type="text"
                      placeholder="Enter Your Phone No"
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <label>
                      Country <sup>*</sup>
                    </label>
                    <div className="select-wrp">
                      <select>
                        <option>India</option>
                        <option>UK</option>
                        <option>USA</option>
                        <option>Bangladesh</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-6">
                    <label>
                      State <sup>*</sup>
                    </label>
                    <input className="brd-rd3" type="text" />
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-6">
                    <label>
                      City <sup>*</sup>
                    </label>
                    <div className="select-wrp">
                      <select>
                        <option>Kolkata</option>
                        <option>Birmingham</option>
                        <option>Mumbai</option>
                        <option>London</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-6">
                    <label>
                      Latitude <sup>*</sup>
                    </label>
                    <input className="brd-rd3" type="text" />
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-6">
                    <label>
                      Longitude <sup>*</sup>
                    </label>
                    <input className="brd-rd3" type="text" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <div className="loc-map2">
              <div className="loc-map brd-rd3" id="loc-map" />
              <div className="loc-srch">
                <input
                  className="brd-rd3"
                  type="text"
                  placeholder="Type Your Address"
                />
                <button className="brd-rd3 red-bg" type="submit">
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
