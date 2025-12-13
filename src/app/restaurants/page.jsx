"use client";

import React from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import SidebarFilters from "../components/SidebarFilters";
import RestaurantCard from "../components/RestaurantCard";
import AppDownloadSection from "../components/AppDownloadSection";
import restaurants from "../data/restaurantData";

export default function RestaurantPage() {
  return (
    <>
      <PageBanner
        title="Search Your Favourite Food"
        background="/assets/images/topbg.jpg"
        showSearchForm={true}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Search", href: "/restaurants#restaurants-search-banner" },
          { label: "Restaurants Found" },
        ]}
      />

      <section>
        <div className="block gray-bg bottom-padd210 top-padd30">
          <div className="container">
            <div className="row">

              {/* ===== LEFT SIDEBAR FILTERS ===== */}
              <div className="col-md-3 col-sm-12 col-lg-3" style={{ backgroundColor: '#fff', padding: '40px' }}>
                <SidebarFilters />
              </div>

              {/* ===== RESTAURANTS LIST ===== */}
              <div className="col-md-9 col-sm-12 col-lg-9" style={{ backgroundColor: '#fff', padding: '40px' }}>
                <div className="title2-wrapper">
                  <h3 className="marginb-0">Order food online in London</h3>
                </div>

                <div className="remove-ext">
                  <div className="row">
                    {restaurants.map((item, index) => (
                      <div className="col-md-6 col-sm-6 col-lg-6" key={index}>
                        <RestaurantCard {...item} />
                      </div>
                    ))}
                  </div>
                </div>

              </div> {/* END col-md-9 */}

            </div>{/* END row */}
          </div>{/* END container */}
        </div>{/* END block */}
      </section>

      <AppDownloadSection />
    </>
  );
}
