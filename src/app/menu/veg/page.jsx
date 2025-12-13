"use client";

import React from "react";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import FoodMenu from "../../components/FoodMenu";
import menuData from "../../data/menuData";

export default function VegMenuPage() {
  const vegItems = menuData.filter((item) => item.category === "veg");

  return (
    <>
      <PageBanner
        title="Veg Menu"
        subtitle="Fresh & Healthy Veg Meals"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Menu", href: "/menu" },
          { label: "Veg Menu" },
        ]}
      />

      <FoodMenu items={vegItems} variant="menu" showTitle={false} />
    </>
  );
}
