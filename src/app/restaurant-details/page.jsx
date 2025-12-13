"use client";

import React from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import RestaurantDetails from "../components/RestaurantDetails";


export default function RestaurantDetailsPage() {


  return (
    <>

      <PageBanner
        title="Search Your Favourite Food"
        // subtitle="Discover Delicious Options"
        background="/assets/images/topbg.jpg"
        showSearchForm={true}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Restaurant", href: "/restaurants" },
          { label: "Restaurant Details" },
        ]}
      />

      <RestaurantDetails />

    </>
  );
}
