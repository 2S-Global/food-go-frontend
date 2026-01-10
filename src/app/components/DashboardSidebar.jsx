"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isActive = (href) => pathname === href;

  // Load user + listen for auth changes
  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("auth_user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
      setLoading(false);
    };

    loadUser();
    window.addEventListener("authChange", loadUser);

    return () => {
      window.removeEventListener("authChange", loadUser);
    };
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    window.dispatchEvent(new Event("authChange"));
  };

  return (
    <div className="profile-sidebar brd-rd5 wow fadeIn" data-wow-delay="0.2s">
      <div className="profile-sidebar-inner brd-rd5">
        {/* USER INFO */}
        <div className="user-info red-bg">
          <img
            className="brd-rd50"
            src={user?.profilePicture || "/assets/images/default-user.jpg"}
            alt="User Avatar"
            style={{width: "83px", height: "83px"}}
          />
          <div className="user-info-inner">
            <h5>{loading ? "Loading..." : user?.name || "Guest User"}</h5>
            <span>{user?.email || "email@example.com"}</span>
            <a
              className="brd-rd3 sign-out-btn yellow-bg"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
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
            style={{ display: "none" }}
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

          <Link
            href="/dashboard/change-password"
            className={`nav-link ${
              isActive("/dashboard/change-password") ? "active" : ""
            }`}
          >
            <i className="fa fa-key" /> CHANGE PASSWORD
            {isActive("/dashboard/change-password") && (
              <span className="arrow">›</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
