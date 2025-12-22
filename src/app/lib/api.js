const BASE_URL = "https://food-delivery-backend-mocha.vercel.app";

function getAuthHeaders() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("authtoken") : null;

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
   ADD TO CART
===================== */
export async function addToCart(payload) {
  const res = await fetch(`${BASE_URL}/api/usercart/user-addtocart`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });

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
  const res = await fetch(`${BASE_URL}/api/usercart/list-usercart`, {
    method: "GET",
    headers: getAuthHeaders(),
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch cart");
  }

  return data;
}

/* ====================
   DELETE CART ITEM
===================== */
export async function deleteCartItem(cartItemId) {
  const res = await fetch(`${BASE_URL}/api/usercart/delete-usercart`, {
    method: "DELETE",
    headers: getAuthHeaders(),
    body: JSON.stringify({ cartItemId }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to delete cart item");
  }

  return data;
}
