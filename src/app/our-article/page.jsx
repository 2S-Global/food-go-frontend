"use client";

import React from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import FeaturedPosts from "../components/FeaturedPosts";
import { articleData } from "../data/articleData";


export default function OurArticlePage() {


  return (
    <>

      <PageBanner
        title="Blog Articles"
        subtitle="Discover Delicious Options"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          // { label: "Search", href: "/restaurants#restaurants-search-banner" },
          { label: "Blog Grid" },
        ]}
      />

      <FeaturedPosts articles={articleData} variant="article" showTitle={false} />

    </>
  );
}
