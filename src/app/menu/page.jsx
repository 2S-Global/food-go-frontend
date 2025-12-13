"use client";

import React from "react";
import styles from "./MenuCategories.module.css";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import Link from "next/link";

export default function MenuPage() {
  return (
    <>
      <PageBanner
        title="Our Menu"
        subtitle="Discover Delicious Options"
        background="/assets/images/topbg.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[{ label: "Home", href: "/" }, { label: "our menus" }]}
      />

      {/* Category Section */}
      <section className={styles.menuCategorySection}>
        <div className="container text-center">
          <h2>Category</h2>
          <p>
            Pick from our Veg or Non-Veg weekly categories and enjoy 13 freshly
            prepared meals delivered for just £20 per week. Each meal is crafted
            to be nutritious, flavorful, and perfect for your daily routine.
            Start your subscription today and enjoy convenient eating all week
            long!
          </p>

          <div className={styles.menuCategoryBoxes}>
            {/* VEG MENU BLOCK */}
            <Link href="/menu/veg" className={styles.menuBox}>
              <img src="/assets/images/veg-menu.jpg" alt="Veg Menu" />
              <h3>Veg Menu</h3>
              <p>£70</p>
            </Link>

            {/* NON-VEG MENU BLOCK */}
            <Link href="/menu/non-veg" className={styles.menuBox}>
              <img src="/assets/images/nonveg-menu.jpg" alt="Non Veg Menu" />
              <h3>Non-Veg Menu</h3>
              <p>£80</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
