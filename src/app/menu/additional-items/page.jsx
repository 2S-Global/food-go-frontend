"use client";

import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import FoodMenu from "../../components/FoodMenu";
import menuData from "../../data/menuData";

export default function AdditionalItemsPage() {
  return (
    <>
      <PageBanner
        title="Additional Items"
        subtitle="Add Extra Items to Your Order"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Menu", href: "/menu" },
          { label: "Additional Items" },
        ]}
      />

      <FoodMenu
        items={menuData}
        variant="additional"
        showTitle={false}
      />
    </>
  );
}
