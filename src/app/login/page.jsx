"use client";

import AuthForm from "../components/AuthForm";
import PageBanner from "../components/PageBanner";
import BreadCrumbs from "../components/Breadcrumbs";

export default function LoginPage() {
  return (
    <>
      <PageBanner
        title="Login"
        subtitle="A Greate Restaurant Website"
        background="/assets/images/group-2.jpg"
        showSearchForm={false}
      />

      <BreadCrumbs
        items={[
          { label: "Home", href: "/" },
          // { label: "Search", href: "/restaurants#restaurants-search-banner" },
          { label: "login" },
        ]}
      />

      <section style={{marginBottom : "70px"}}>
        <div className="container">
          <div style={{ maxWidth: "750px", margin: "0 auto" }}>
          <AuthForm type="login" />
        </div>
        </div>
      </section>
    </>
  );
}
