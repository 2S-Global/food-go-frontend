const BASE_URL = "https://food-delivery-backend-mocha.vercel.app";

/* ==============
   Menu API
================= */
export async function getMenuByType(type) {
  const res = await fetch(
    `${BASE_URL}/api/usermenu/list-menu?type=${type}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  return res.json();
}

/* =========================
   CUSTOMER REGISTER API
========================= */
export async function customerRegister(payload) {
  const res = await fetch(
    `${BASE_URL}/api/auth/customer-register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
}

/* =====================
   LOGIN
===================== */
export async function customerLogin(payload) {
  const res = await fetch(
    `${BASE_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}
