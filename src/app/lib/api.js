// const BASE_URL = "https://food-delivery-backend-mocha.vercel.app";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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

  if (!payload?.item_type) {
    throw new Error("item_type is required");
  }

  // Subscription validation
  if (payload.item_type === "subscription") {
    if (
      !payload.subscription_type ||
      !payload.start_date ||
      !payload.end_date
    ) {
      throw new Error("Invalid subscription payload");
    }
  }

  // Additional item validation
  if (payload.item_type === "additional_item") {
    if (
      !Array.isArray(payload.additional_items) ||
      payload.additional_items.length === 0
    ) {
      throw new Error("Invalid additional items payload");
    }
  }

  const res = await fetch(
    `${BASE_URL}/api/usercart/user-addtocart`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },
      body: JSON.stringify(payload), // ✅ FLAT PAYLOAD
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
   DELETE CART ITEM
==================== */
export async function deleteCartItem(cartItemId) {
  const res = await fetch(
    `${BASE_URL}/api/usercart/delete-usercart`,
    {
      method: "DELETE",
      headers: getAuthHeaders(),
      body: JSON.stringify({ cartItemId }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to delete cart item");
  }

  return data;
}

/* ======================
   LIST MEAL TYPES (PUBLIC)
====================== */
export async function getMealTypes() {
  const res = await fetch(
    `${BASE_URL}/api/usermenu/list-meal-type`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch meal types");
  }

  return res.json();
}

/* ======================
   BLOG APIs (PUBLIC)
====================== */

/*Get all user blogs*/
export async function getUserBlogs() {
  const res = await fetch(
    `${BASE_URL}/api/userblog/list-user-blogs`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch blogs");
  }

  return data;
}

/**
 * Get single blog by slug (frontend helper)
 * NOTE: This fetches all blogs and filters by slug
 */
export async function getBlogBySlug(slug) {
  const response = await getUserBlogs();

  const blog = response?.data?.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    throw new Error("Blog not found");
  }

  return blog;
}


/* ======================
   BLOG DETAILS (PUBLIC)
====================== */
export async function getBlogDetails(blogId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/userblog/blog-details?_id=${blogId}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("Blog details error:", text);
    throw new Error("Failed to fetch blog details");
  }

  return res.json();
}


