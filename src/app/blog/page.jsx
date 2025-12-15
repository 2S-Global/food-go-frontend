import React from "react";
import BlogCard from "../components/BlogCard";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";

const blogPosts = [
  {
    id: 1,
    title: "Floury Bakery is The Best Choice",
    excerpt:
      "The only thing bad about the place was the time they took to provide us with our food",
    date: "JUNE 14",
    image: "/assets/images/news-img1.jpg",
    slug: "floury-bakery-is-the-best-choice",
  },
  {
    id: 2,
    title: "Tried Their Amazing Grilled Ham",
    excerpt:
      "The only thing bad about the place was the time they took to provide us with our food",
    date: "AUGUST 14",
    image: "/assets/images/news-img2.jpg",
    slug: "tried-their-amazing-grilled-ham",
  },
  {
    id: 3,
    title: "Best Choice For Our Daily Healthy Meal",
    excerpt:
      "The only thing bad about the place was the time they took to provide us with our food",
    date: "APRIL 14",
    image: "/assets/images/news-img3.jpg",
    slug: "best-choice-for-our-daily-healthy-meal",
  },
  {
    id: 4,
    title: "Easy Homemade Shahi Tukda Recipe",
    excerpt:
      "The only thing bad about the place was the time they took to provide us with our food",
    date: "JULY 20",
    image: "/assets/images/news-img4.jpg",
    slug: "easy-homemade-shahi-tukda-recipe",
  },
  {
    id: 5,
    title: "Pesto Pizza With Roasted Garlic",
    excerpt:
      "The only thing bad about the place was the time they took to provide us with our food",
    date: "DECEMBER 10",
    image: "/assets/images/news-img5.jpg",
    slug: "pesto-pizza-with-roasted-garlic",
  },
  {
    id: 6,
    title: "Cras venenatis erat ac massa Ultricies",
    excerpt:
      "The only thing bad about the place was the time they took to provide us with our food",
    date: "MARCH 12",
    image: "/assets/images/news-img6.jpg",
    slug: "cras-venenatis-erat-ac-massa-ultricies",
  },
  {
    id: 7,
    title: "Dapibus Inibh bnec",
    excerpt:
      "The only thing bad about the place was the time they took to provide us with our food",
    date: "NOVEMBER 11",
    image: "/assets/images/news-img7.jpg",
    slug: "dapibus-inibh-bnec",
  },
  {
    id: 8,
    title: "Next Level Steak Sandwich",
    excerpt:
      "The only thing bad about the place was the time they took to provide us with our food",
    date: "SEPTEMBER 09",
    image: "/assets/images/news-img8.jpg",
    slug: "next-level-steak-sandwich",
  },
  {
    id: 9,
    title: "Double-choc brownies",
    excerpt:
      "The only thing bad about the place was the time they took to provide us with our food",
    date: "MAY 18",
    image: "/assets/images/news-img9.jpg",
    slug: "double-choc-brownies",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blog Grid"
        subtitle="A Greate Restaurant Website"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          // { label: "Search", href: "/restaurants#restaurants-search-banner" },
          { label: "Blog Grid" },
        ]}
      />

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-box">
                  <div className="remove-ext">
                    <div className="row">
                      {blogPosts.map((item, i) => (
                        <BlogCard key={i} item={item} />
                      ))}
                    </div>
                  </div>

                  {/* Pagination (static for now) */}
                  <div className="pagination-wrapper text-center">
                    <ul className="pagination justify-content-center">
                      <li className="page-item prev">
                        <a className="page-link brd-rd2">PREVIOUS</a>
                      </li>
                      <li className="page-item active">
                        <span className="page-link brd-rd2">1</span>
                      </li>
                      <li className="page-item next">
                        <a className="page-link brd-rd2">NEXT</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
