"use client";

import React, { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";

export default function AboutUsPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const slug = "refund-policy";

  const [cms, setCms] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCMS = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/userblog/list-cms-details?slug=${slug}`
        );
        const data = await res.json();
        setCms(data?.data || data);
      } catch (error) {
        console.error("CMS fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCMS();
  }, []);

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  if (!cms) return <p className="text-center">CMS content not found</p>;

  return (
    <>
      {/* 🔹 Banner */}
      <PageBanner
        title={cms.title}
        subtitle={cms.summary}
        background={cms.image}
        showSearchForm={false}
      />

      {/* 🔹 Breadcrumb */}
      <BreadCrumbs
        items={[{ label: "Home", href: "/" }, { label: cms.title }]}
      />

      {/* 🔹 CMS Content */}
      <section className="block less-spacing gray-bg top-padd30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-box text-center">
                <div
                  className="cms-content"
                  dangerouslySetInnerHTML={{
                    __html: cms.full_content,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
