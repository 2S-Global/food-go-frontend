import React from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import { getUserBlogs } from "../lib/api";
import BlogSection from "../components/BlogSection";

export default async function BlogPage() {
  const response = await getUserBlogs();
  const blogs = response?.data || [];


  return (
    <>
      <PageBanner
        title="Blog Grid"
        subtitle="Latest FoodGo Blogs"
        background="/assets/images/blog.png"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog Grid" },
        ]}
      />

      <BlogSection variant="blog" />
    </>
  );
}
