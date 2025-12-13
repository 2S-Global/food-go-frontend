"use client";

import MenuCard from "./MenuCard";

export default function FoodMenu({
  items,
  limit,
  showTitle = true,
  variant = "home", // "home" | "menu"
}) {
  const visibleItems = limit ? items.slice(0, limit) : items;
  const isMenu = variant === "menu";

  return (
    <section>
      <div
        className={
          isMenu
            ? "block less-spacing gray-bg top-padd30"
            : "block"
        }
      >
        <div className="container">

          {/* HOME PAGE TITLE */}
          {showTitle && !isMenu && (
            <div className="title1-wrapper text-center">
              <div className="title1-inner">
                <span>Your Favourite Food</span>
                <h2>Choose &amp; Enjoy</h2>
              </div>
            </div>
          )}

          {/* MENU PAGE STRUCTURE */}
          {isMenu ? (
            <div className="sec-box">
              <div className="remove-ext">
                <div className="row">
                  {visibleItems.map((item, index) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      variant="menu"
                      delay={`${0.2 + index * 0.1}s`}
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
              {visibleItems.map((item, index) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  delay={`${0.2 + index * 0.2}s`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
