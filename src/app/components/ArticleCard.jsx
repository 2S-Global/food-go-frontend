// app/components/ArticleCard.jsx

import Link from "next/link";

export default function ArticleCard({
  article,
  delay = 0,
  variant = "default",
}) {
  const cardClass =
    variant === "list"
      ? "article-dev style2 wow fadeIn"
      : "article-dev wow fadeIn";

  return (
    <div className="col-md-4 col-sm-6 col-lg-4">
      <div className={cardClass} data-wow-delay={`${delay}s`}>
        <figure>
          <Link href="/our-article">
            <img src={article.image} alt={article.title} />
          </Link>
        </figure>

        <div className="article-data">
          <div className="article-info-meta">
            <span>{article.day}</span>
            <Link href="/our-article">{article.date}</Link>
            <Link href="/our-article">By {article.author}</Link>
          </div>

          <div className="article-meta">
            <h3>
              <Link href="/our-article">{article.title}</Link>
            </h3>

            <div className="like-meta">
              <span>
                <i className="fa fa-heart-o" /> {article.likes}
              </span>
              <span>
                <i className="fa fa-comment-o" /> {article.comments}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
