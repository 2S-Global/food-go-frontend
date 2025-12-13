"use client";
import Link from "next/link";

export default function BlogCard({ item }) {
  return (
    <div className="col-md-4 col-sm-6 col-lg-4">
      <div className="news-box wow fadeIn">
        <div className="news-thumb">
          <Link className="brd-rd2" href={`/blog/${item.slug}`}>
            <img src={`${item.image}`} alt={item.image} />
          </Link>
          <div className="news-btns">
            <span className="post-date red-bg">{item.date}</span>
            <Link className="read-more" href={`/blog/${item.slug}`}>
              READ MORE
            </Link>
          </div>
        </div>
        <div className="news-info">
          <h4>
            <Link href={`/blog/${item.slug}`}>{item.title}</Link>
          </h4>
          <p>{item.excerpt}</p>
        </div>
      </div>
    </div>
  );
}
