const BASE_URL = "https://food-delivery-backend-mocha.vercel.app";

function getAuthHeaders() {
  if (typeof window === "undefined") return {};

  const token = localStorage.getItem("auth_token");

  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
}

/* ==============
   Menu API
================= */
export async function getMenuByType(type) {
  const res = await fetch(`${BASE_URL}/api/usermenu/list-menu?type=${type}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  return res.json();
}

/* =========================
   CUSTOMER REGISTER API
========================= */
export async function customerRegister(payload) {
  const res = await fetch(`${BASE_URL}/api/auth/customer-register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
}

/* ====================
   LOGIN
===================== */
export async function customerLogin(payload) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

/* ====================
   GET USER DETAILS
===================== */
export async function getUserDetails() {
  const res = await fetch(`${BASE_URL}/api/userdata/user-details`, {
    method: "GET",
    headers: getAuthHeaders(),
    cache: "no-store", // optional: prevents caching in Next.js 14+
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch user details");
  }

  return data;
}

/* ====================
   ADD TO CART
===================== */
export async function addToCart(payload) {
  console.log("API addToCart payload", payload);
  if (
    !payload?.subscription_type &&
    (!payload?.additional_items ||
      payload.additional_items.length === 0)
  ) {
    throw new Error("Invalid add to cart payload");
  }

  const res = await fetch(
    `${BASE_URL}/api/usercart/user-addtocart`,
    {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Add to cart failed");
  }

  return data;
}

/* ====================
   LIST USER CART
===================== */
export async function getUserCart() {
  const res = await fetch(
    `${BASE_URL}/api/usercart/list-usercart`,
    {
      method: "GET",
      headers: getAuthHeaders(),
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch cart");
  }

  return data;
}

/* ====================
   CLEAR USER CART
===================== */
export async function clearUserCart() {
  const res = await fetch(
    `${BASE_URL}/api/usercart/delete-usercart`,
    {
      method: "DELETE",
      headers: getAuthHeaders(),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to clear cart");
  }

  return data;
}
