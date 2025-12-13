"use client";

import Link from "next/link";

export default function BreadCrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="bread-crumbs-wrapper">
      <div className="container">
        <ol className="breadcrumb">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={index}
                className={`breadcrumb-item ${isLast ? "active" : ""}`}
              >
                {item.href && !isLast ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
