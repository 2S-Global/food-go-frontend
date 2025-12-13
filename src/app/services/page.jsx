"use client";

import React from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import Services from "../components/Services";



export default function ServicesPage() {


  return (
    <>

      <PageBanner
        title="Our Services"
        subtitle="Discover Delicious Options"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
        //   { label: "Restaurant", href: "/restaurants" },
          { label: "Our services" },
        ]}
      />

      <Services />

    </>
  );
}
