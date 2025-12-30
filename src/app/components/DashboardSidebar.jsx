"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar({ user, loading }) {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <div className="profile-sidebar brd-rd5 wow fadeIn" data-wow-delay="0.2s">
      <div className="profile-sidebar-inner brd-rd5">

        {/* USER INFO */}
        <div className="user-info red-bg">
          <img
            className="brd-rd50"
            src={user?.avatar || "/assets/images/user-avatar.jpg"}
            alt="User Avatar"
          />
          <div className="user-info-inner">
            <h5>{loading ? "Loading..." : user?.name || "Guest User"}</h5>
            <span>{user?.email || "email@example.com"}</span>
             <a
              className="brd-rd3 sign-out-btn yellow-bg"
              href="#"
            >
              <i className="fa fa-sign-out"></i> SIGN OUT
            </a>
          </div>
        </div>

        {/* SIDEBAR LINKS */}
        <div className="dashboard-tabs nav flex-column nav-pills">
          <Link
            href="/dashboard"
            className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
          >
            <i className="fa fa-dashboard" /> DASHBOARD
            {isActive("/dashboard") && <span className="arrow">›</span>}
          </Link>

          <Link
            href="/dashboard/subscriptions"
            className={`nav-link ${
              isActive("/dashboard/subscriptions") ? "active" : ""
            }`}
          >
            <i className="fa fa-file-text" /> MY SUBSCRIPTIONS
            {isActive("/dashboard/subscriptions") && (
              <span className="arrow">›</span>
            )}
          </Link>

          <Link
            href="/dashboard/statements"
            className={`nav-link ${
              isActive("/dashboard/statements") ? "active" : ""
            }`}
          >
            <i className="fa fa-wpforms" /> STATEMENT
            {isActive("/dashboard/statements") && (
              <span className="arrow">›</span>
            )}
          </Link>

          <Link
            href="/dashboard/account"
            className={`nav-link ${
              isActive("/dashboard/account") ? "active" : ""
            }`}
          >
            <i className="fa fa-cog" /> ACCOUNT SETTINGS
            {isActive("/dashboard/account") && (
              <span className="arrow">›</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
