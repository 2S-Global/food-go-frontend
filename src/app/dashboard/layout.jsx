"use client";

import { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";
import DashboardSidebar from "../components/DashboardSidebar";
import { getUserDetails } from "../lib/api";

export default function DashboardLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserDetails()
      .then((res) => setUser(res?.data || null))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageBanner
        title="Dashboard"
        subtitle="Your daily meals, simplified"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Dashboard" },
        ]}
      />

      <section>
        <div className="block less-spacing gray-bg top-padd30">
          <div className="container">
            <div className="row">
              {/* SIDEBAR */}
              <div className="col-md-4 col-sm-12 col-lg-4">
                <DashboardSidebar user={user} loading={loading} />
              </div>

              {/* CONTENT */}
              <div className="col-md-8 col-sm-12 col-lg-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
