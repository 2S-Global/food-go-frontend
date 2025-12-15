"use client";

import React from "react";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import FoodMenu from "../../components/FoodMenu";
import menuData from "../../data/menuData";

export default function NonVegMenuPage() {
  const nonVegItems = menuData.filter((item) => item.category === "non-veg");

  return (
    <>
      <PageBanner
        title="Non-Veg Menu"
        subtitle="Delicious Non-Veg Options"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Menu", href: "/menu" },
          { label: "Non-Veg Menu" },
        ]}
      />

      <FoodMenu items={nonVegItems} variant="menu" showTitle={false} />
    </>
  );
}
