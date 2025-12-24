"use client";

import { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import FoodMenu from "../../components/FoodMenu";
import AddToCartDateModal from "@/app/components/AddToCartDateModal";
import LoginRequiredModal from "@/app/components/LoginRequiredModal";
import Loader from "../../components/Loader";
import { getMenuByType } from "../../lib/api";
import { isLoggedIn } from "@/app/lib/auth";

const stripHtml = (html = "") =>
  html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export default function NonVegMenuPage() {
  const [nonVegItems, setNonVegItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 modal states
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDateModal, setOpenDateModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    async function fetchNonVegMenu() {
      try {
        const data = await getMenuByType("non-veg");

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

        setNonVegItems(mappedItems);
      } catch (err) {
        console.error(err);
        setError("Failed to load non-veg menu");
      } finally {
        setLoading(false);
      }
    }

    fetchNonVegMenu();
  }, []);

  // ✅ guarded add to cart
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

      {loading && <Loader />}

      {error && (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      )}

      {!loading && !error && (
        <FoodMenu
          items={nonVegItems}
          variant="menu"
          subscriptionType="non_veg"
          showTitle={false}
          onAddToCart={handleAddToCart} // ✅ IMPORTANT
        />
      )}

      {/* DATE MODAL */}
      <AddToCartDateModal
        open={openDateModal}
        onClose={() => setOpenDateModal(false)}
        item={selectedItem}
        subscriptionType="non_veg"
      />

      {/* LOGIN REQUIRED MODAL */}
      <LoginRequiredModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
