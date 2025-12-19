"use client";

import { useEffect, useState } from "react";
import PageBanner from "../../components/PageBanner";
import BreadCrumbs from "../../components/Breadcrumbs";
import FoodMenu from "../../components/FoodMenu";
import Loader from "../../components/Loader";
import { getMenuByType } from "../../lib/api";

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function AdditionalItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <FoodMenu items={items} variant="additional" showTitle={false} />
      )}
    </>
  );
}
