// app/components/FeaturedPosts.jsx

import ArticleCard from "./ArticleCard";

export default function FeaturedPosts({
  articles,
  limit,
  showTitle = true,
  variant = "home", // "home" | "article"
}) {
  const visibleArticles = limit
    ? articles.slice(0, limit)
    : articles;

  const isArticlePage = variant === "article";

  return (
    <section>
      <div
        className={
          isArticlePage
            ? "block less-spacing gray-bg top-padd30"
            : "block"
        }
      >
        <div className="container">

          {/* HOME PAGE TITLE */}
          {showTitle && !isArticlePage && (
            <div className="title1-wrapper text-center">
              <div className="title1-inner">
                <span>Website for Restaurant and Cafe</span>
                <h2>Featured Restaurants</h2>
              </div>
            </div>
          )}

          {/* ARTICLE PAGE STRUCTURE */}
          {isArticlePage ? (
            <div className="sec-box">
              <div className="remove-ext">
                <div className="row">
                  {visibleArticles.map((article, index) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      variant="list"
                      delay={0.2 + index * 0.1}
                    />
                  ))}
                </div>
              </div>

              {/* Pagination (static for now) */}
              <div className="pagination-wrapper text-center">
                <ul className="pagination justify-content-center">
                  <li className="page-item prev">
                    <a className="page-link brd-rd2" href="#">
                      PREVIOUS
                    </a>
                  </li>
                  <li className="page-item active">
                    <span className="page-link brd-rd2">1</span>
                  </li>
                  <li className="page-item next">
                    <a className="page-link brd-rd2" href="#">
                      NEXT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            /* HOME PAGE GRID */
            <div className="row">
              {visibleArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  delay={0.2 + index * 0.2}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
