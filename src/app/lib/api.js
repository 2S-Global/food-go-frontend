const BASE_URL = "https://food-delivery-backend-mocha.vercel.app";

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
