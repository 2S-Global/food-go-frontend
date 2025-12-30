import React from "react";
import BlogCard from "../components/BlogCard";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import { getUserBlogs } from "../lib/api";

export default async function BlogPage() {
  const response = await getUserBlogs();
  const blogs = response?.data || [];

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
                      {blogs.length === 0 && (
                        <p className="text-center">No blogs found</p>
                      )}

                      {blogs.map((item) => (
                        <BlogCard key={item._id} item={item} />
                      ))}
                    </div>
                  </div>

                  {/* Pagination (static for now) */}
                  <div className="pagination-wrapper text-center">
                    <ul className="pagination justify-content-center">
                      <li className="page-item prev">
                        <span className="page-link brd-rd2">PREVIOUS</span>
                      </li>
                      <li className="page-item active">
                        <span className="page-link brd-rd2">1</span>
                      </li>
                      <li className="page-item next">
                        <span className="page-link brd-rd2">NEXT</span>
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
