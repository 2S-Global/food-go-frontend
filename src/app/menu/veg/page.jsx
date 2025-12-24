"use client";

import React, { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import FoodMenu from "../../components/FoodMenu";
import AddToCartDateModal from "@/app/components/AddToCartDateModal";
import LoginRequiredModal from "@/app/components/LoginRequiredModal";
import { getMenuByType } from "../../lib/api";
import Loader from "@/app/components/Loader";
import { isLoggedIn } from "@/app/lib/auth";

const stripHtml = (html = "") =>
  html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export default function VegMenuPage() {
  const [vegItems, setVegItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ NEW STATES
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDateModal, setOpenDateModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchVegMenu() {
      try {
        const data = await getMenuByType("veg");

        const mappedItems = (data.data || data).map((item) => ({
          ...item,
          id: item._id,
          title: item.menuName,
          description: stripHtml(item.description),
          images:
            item.images && item.images.length > 0
              ? item.images
              : ["/assets/images/placeholder.jpg"],
          image: item.images?.[0] || "/assets/images/placeholder.jpg",
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

  // ✅ GUARDED ADD TO CART
  const handleAddToCart = (item) => {
    if (!isLoggedIn()) {
      setShowLoginModal(true);
      return;
    }

    setSelectedItem(item);
    setOpenDateModal(true);
  };

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

      {loading && <Loader />}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {!loading && !error && (
        <FoodMenu
          items={vegItems}
          variant="menu"
          subscriptionType="veg"
          showTitle={false}
          onAddToCart={handleAddToCart} // ✅ IMPORTANT
        />
      )}

      {/* DATE MODAL */}
      <AddToCartDateModal
        open={openDateModal}
        onClose={() => setOpenDateModal(false)}
        item={selectedItem}
        subscriptionType="veg"
      />

      {/* LOGIN MODAL */}
      <LoginRequiredModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
