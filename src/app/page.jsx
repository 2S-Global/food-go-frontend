import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import TopBanner from "./components/TopBanner";
import FoodMenu from "./components/FoodMenu";
import AppDownloadSection from "./components/AppDownloadSection";
import PopularFood from "./components/PopularFood";
import EasyOrderSteps from "./components/EasyOrderSteps";
import FeaturedList from "./components/FeaturedList";
import FoodCategoryFilter from "./components/FoodCategoryFilter";
import FeaturedPosts from "./components/FeaturedPosts";
import { articleData } from "./data/articleData";
import { getMealTypes } from "./lib/api";
import BlogSection from "./components/BlogSection";

export default async function Home() {
  const response = await getMealTypes();

  const menuData = response?.data
    ? [
        { ...response.data.veg, category: "veg" },
        { ...response.data.non_veg, category: "non_veg" },
        { ...response.data.additional_item, category: "additional_item" },
      ]
    : [];

  return (
    <>
      {/* <Header /> */}
      <HeroBanner />
      {/* <TopBanner /> */}

      <FoodMenu
        items={menuData}
        limit={3}
        showTitle={true}
      />

      <PopularFood />
      <EasyOrderSteps />
      {/* <FeaturedList /> */}
      {/* <FoodCategoryFilter /> */}
      <BlogSection limit={6} showTitle={true} variant="home" />
      <AppDownloadSection />
      {/* <Footer /> */}
    </>
  );
}
