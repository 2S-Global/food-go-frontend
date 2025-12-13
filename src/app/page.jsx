import Image from "next/image";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import TopBanner from "./components/TopBanner";
import FoodMenu from "./components/FoodMenu";
import menuData from "./data/menuData";
import AppDownloadSection from "./components/AppDownloadSection";
import PopularFood from "./components/PopularFood";
import EasyOrderSteps from "./components/EasyOrderSteps";
import FeaturedList from "./components/FeaturedList";
import FoodCategoryFilter from "./components/FoodCategoryFilter";
import FeaturedPosts from "./components/FeaturedPosts";
import { articleData } from "./data/articleData";

export default function Home() {

  return (
    <>
      {/* <Header /> */}
      <HeroBanner />
      {/* <TopBanner /> */}
      {/* <FoodMenu /> */}
      <FoodMenu items={menuData} limit={3} showTitle={true} />
      <PopularFood />
      <EasyOrderSteps />
      {/* <FeaturedList /> */}
      <FoodCategoryFilter />
      <FeaturedPosts articles={articleData} limit={3} showTitle={true} />
      <AppDownloadSection />
      {/* <Footer /> */}
    </>
  );
}
