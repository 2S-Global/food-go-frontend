"use client";

import { useEffect, useState, useContext } from "react";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import FoodMenu from "../../components/FoodMenu";
import Loader from "../../components/Loader";
import AddToCartScheduleModal from "../../components/AddToCartScheduleModal";
import { getMenuByType } from "../../lib/api";
import { CartContext } from "../../context/CartContext";

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function AdditionalItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [schedule, setSchedule] = useState("daily");

  // Assume main subscription dates are fixed
  const startDate = "2026-01-05";
  const endDate = "2026-01-11";

  useEffect(() => {
    async function fetchAdditionalItems() {
      try {
        const data = await getMenuByType("additional-items");

        const mappedItems = (data.data || data).map((item) => ({
          ...item,
          id: item._id,
          title: item.itemName,
          price: item.itemPrice,
          description: stripHtml(item.description),
          images:
            item.images && item.images.length > 0
              ? item.images
              : ["/assets/images/placeholder.jpg"],
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

  // Open schedule modal
  const handleOpenSchedule = (item) => {
    setSelectedItem(item);
    setScheduleModalOpen(true);
  };

  // When user selects a schedule
  const handleScheduleSelect = (selectedSchedule) => {
    setSchedule(selectedSchedule);
    setScheduleModalOpen(false);

    if (!selectedItem) return;

    const payload = {
      subscription_type: "veg", // or "non_veg" based on main subscription
      start_date: startDate,
      end_date: endDate,
      additional_items: [
        {
          item_id: selectedItem.id,
          quantity,
          addon_start_date: startDate,
          addon_schedule_type: selectedSchedule,
        },
      ],
    };

    addToCart(payload);
  };

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

      {loading && <Loader />}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {!loading && !error && (
        <FoodMenu
          items={items}
          variant="additional"
          showTitle={false}
          renderItem={(item) => (
            <div style={{ marginBottom: "1rem", border: "1px solid #eee", padding: "1rem" }}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>Price: ₹{item.price}</p>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                style={{ width: "60px", marginRight: "1rem" }}
              />
              <button onClick={() => handleOpenSchedule(item)}>
                Add to Cart
              </button>
            </div>
          )}
        />
      )}

      {/* Schedule Modal */}
      <AddToCartScheduleModal
        open={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        onSelect={handleScheduleSelect}
      />
    </>
  );
}
