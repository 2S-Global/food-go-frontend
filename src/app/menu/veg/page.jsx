"use client";

import React from "react";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import FoodMenu from "../../components/FoodMenu";
// import menuData from "../../data/menuData";
import { useEffect, useState } from "react";
import { getMenuByType } from "../../lib/api";

export default function VegMenuPage() {
  // const vegItems = menuData.filter((item) => item.category === "veg");
  const [vegItems, setVegItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVegMenu() {
      try {
        const data = await getMenuByType("veg");

        const mappedItems = (data.data || data).map((item) => ({
          id: item._id,
          title: item.menuName,

          // ✅ KEEP images array (FoodDetailsModal needs it)
          images:
            item.images && item.images.length > 0
              ? item.images
              : ["/assets/images/placeholder.jpg"],

          // ✅ Optional single image for cards
          image: item.images?.[0] || "/assets/images/placeholder.jpg",

          description: item.description,
          mealType: item.mealType,

          // keep raw backend data if needed later
          raw: item,
        }));

        setVegItems(mappedItems);
      } catch (err) {
        console.error(err);
        setError("Failed to load veg menu");
      } finally {
        setLoading(false);
      }
    }

    fetchVegMenu();
  }, []);

  return (
    <>
      <PageBanner
        title="Veg Menu"
        subtitle="Fresh & Healthy Veg Meals"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Menu", href: "/menu" },
          { label: "Veg Menu" },
        ]}
      />

      {/* <FoodMenu items={vegItems} variant="menu" showTitle={false} /> */}

      {loading && <p style={{ textAlign: "center" }}>Loading menu...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {!loading && !error && (
        <FoodMenu items={vegItems} variant="menu" showTitle={false} />
      )}
    </>
  );
}
