"use client";

import { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import FoodMenu from "../../components/FoodMenu";
import Loader from "../../components/Loader";
import AddToCartScheduleModal from "../../components/AddToCartScheduleModal";
import { getMenuByType } from "../../lib/api";

const stripHtml = (html = "") =>
  html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

export default function AdditionalItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔑 single source of truth for modal
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function fetchAdditionalItems() {
      try {
        const data = await getMenuByType("additional-items");

        const mappedItems = (data.data || data).map((item) => ({
          ...item,
          _id: item._id,
          title: item.itemName,
          price: item.itemPrice,
          description: stripHtml(item.description),
          image: item.images?.[0] || "/assets/images/placeholder.jpg",
        }));

        setItems(mappedItems);
      } catch (err) {
        console.error(err);
        setError("Failed to load additional items");
      } finally {
        setLoading(false);
      }
    }

    fetchAdditionalItems();
  }, []);

  return (
    <>
      <PageBanner
        title="Additional Items"
        subtitle="Add Extra Items to Your Order"
        background="/assets/images/additional_items1.png"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Menu", href: "/menu" },
          { label: "Additional Items" },
        ]}
      />

      {loading && <Loader />}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {!loading && !error && (
        <FoodMenu
          items={items}
          variant="additional"
          showTitle={false}
          onAddToCart={(item) => setSelectedItem(item)}
          topContent={`Complete your meal with our curated selection of Additional Items. No home-cooked feast is whole without the extras! Choose from a wide range of traditional accompaniments, including handmade pickles, crispy snacks, regional breads, and authentic desserts that satisfy every craving. As a subscriber, you can easily add these "little tastes of home" to your weekly basket. Whether you're looking for a spicy kick or a sweet ending, our diverse selection of extras ensures your table is always fully set. Pick your favorites and make every meal a celebration.`}
        />
      )}

      {/* ✅ Schedule Modal */}
      <AddToCartScheduleModal
        open={!!selectedItem}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
