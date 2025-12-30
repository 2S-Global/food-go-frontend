import Image from "next/image";
import { notFound } from "next/navigation";
import PageBanner from "@/app/components/PageBanner";
import BreadCrumbs from "@/app/components/Breadcrumbs";
import { getBlogDetails } from "@/app/lib/api";

export default async function BlogDetailPage({ params }) {
  // ✅ FIX: await params (Next.js 16 requirement)
  const { slug } = await params;

  let response;
  try {
    response = await getBlogDetails(slug); // slug = _id
  } catch (error) {
    notFound();
  }

  const blog = response?.data;

  if (!blog) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={blog.title}
        subtitle="A Greate Restaurant Website"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: blog.title },
        ]}
      />

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="blog-detail-wrapper">
              {/* MAIN IMAGE */}
              <div
                className="blog-detail-thumb wow fadeIn"
                data-wow-delay="0.2s"
              >
                <Image
                  src={blog.image?.[0]}
                  alt={blog.title}
                  width={1200}
                  height={700}
                />
              </div>

              {/* META INFO */}
              <div className="blog-detail-info">
                <span className="post-detail-date red-clr">
                  <i className="fa fa-clock-o"></i>{" "}
                  {new Date(blog.date).toDateString()}
                </span>
              </div>

              {/* TITLE */}
              <h1 itemProp="headline" style={{ marginBottom: "20px" }}>{blog.title}</h1>

              {/* CONTENT */}
              <div dangerouslySetInnerHTML={{ __html: blog.description }} />

              {/* SHARE BUTTONS */}
              <div className="post-share">
                <span>Share:</span>
                <a className="brd-rd2" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="brd-rd2" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="brd-rd2" href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a className="brd-rd2" href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a className="brd-rd2" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
