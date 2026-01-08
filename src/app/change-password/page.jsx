"use client";

import ChangePasswordForm from "@/app/components/ChangePasswordForm";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";

export default function ChangePasswordPage() {
  return (
    <>
      <PageBanner
        title="Change Password"
        subtitle="Update Your Password"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          // { label: "Search", href: "/restaurants#restaurants-search-banner" },
          { label: "Change Password" },
        ]}
      />

      <section style={{ marginBottom: "70px" }}>
        <div className="container">
          <div style={{ maxWidth: "750px", margin: "0 auto" }}>
            <ChangePasswordForm />
          </div>
        </div>
      </section>
    </>
  );
}
