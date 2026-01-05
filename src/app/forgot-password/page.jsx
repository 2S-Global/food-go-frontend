"use client";

import ForgotPasswordForm from "@/app/components/ForgotPasswordForm";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";

export default function ForgotPasswordPage() {
  return (
    <>
      <PageBanner
        title="Forgot Password"
        subtitle="Recover Account Access"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          // { label: "Search", href: "/restaurants#restaurants-search-banner" },
          { label: "forgot Password" },
        ]}
      />

      <section style={{ marginBottom: "70px" }}>
        <div className="container">
          <div style={{ maxWidth: "750px", margin: "0 auto" }}>
            <ForgotPasswordForm />
          </div>
        </div>
      </section>
    </>
  );
}
