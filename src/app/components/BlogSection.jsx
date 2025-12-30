import BlogCard from "./BlogCard";
import { getUserBlogs } from "@/app/lib/api";

export default async function BlogSection({
  limit,
  showTitle = false,
  variant = "home", // "home" | "blog"
}) {
  const response = await getUserBlogs();
  const blogs = response?.data || [];

  const visibleBlogs = limit ? blogs.slice(0, limit) : blogs;
  const isHome = variant === "home";

  return (
    <section>
      <div
        className={
          isHome
            ? "block mb-60 pt-5" // white background + space before footer
            : "block less-spacing gray-bg top-padd30" // grey background (blog page)
        }
      >
        <div className="container">

          {/* TITLE (HOME ONLY) */}
          {showTitle && isHome && (
            <div className="title1-wrapper text-center">
              <div className="title1-inner">
                <span>Where Taste Wins</span>
                <h2>Latest Blogs</h2>
              </div>
            </div>
          )}

          <div className="row">
            <div className="col-md-12">
              <div className="sec-box">
                <div className="remove-ext">
                  <div className="row">
                    {visibleBlogs.length === 0 && (
                      <p className="text-center">No blogs found</p>
                    )}

                    {visibleBlogs.map((item) => (
                      <BlogCard key={item._id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
