"use client";

import { createContext, useEffect, useState } from "react";
import {
  addToCart,
  getUserCart,
  deleteCartItem,
} from "@/app/lib/api";

export const CartContext = createContext(null);

const emptyCart = {
  items: [],
  total_cart_amount: 0,
};

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(emptyCart);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  /* =====================
     FETCH CART
  ====================== */
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        setCart(emptyCart);
        return;
      }

      const res = await getUserCart();

      setCart({
        items: res?.data?.items || [],
        total_cart_amount: res?.data?.total_cart_amount || 0,
      });
    } catch (err) {
      console.warn("Fetch cart failed:", err);
      setCart(emptyCart);
    } finally {
      setInitialized(true);
    }
  };

  /* =====================
     ADD TO CART (GUARDED)
  ====================== */
  const handleAddToCart = async (payload) => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      throw new Error("Please log in to add items to your cart");
    }

    try {
      setLoading(true);
      await addToCart(payload);
      await fetchCart();
    } finally {
      setLoading(false);
    }
  };

  /* =====================
     REMOVE CART ITEM
  ====================== */
const handleRemoveCartItem = async (cartItemId) => {
  if (!cartItemId) return;

  // 🔁 Snapshot for rollback
  const prevCart = cart;

  try {
    setLoading(true);

    // ✅ OPTIMISTIC UI UPDATE
    setCart((prev) => {
      const updatedItems = prev.items.filter((item) => item._id !== cartItemId);

      // ✅ force numeric + precision
      const updatedTotal = Number(
        updatedItems
          .reduce(
            (sum, item) => sum + parseFloat(item.item_total_price || 0),
            0
          )
          .toFixed(2)
      );

      return {
        ...prev,
        items: updatedItems,
        total_cart_amount: updatedTotal,
      };
    });

    // 🛰 API call
    await deleteCartItem(cartItemId);

    // ✅ FINAL SOURCE OF TRUTH (sync with backend)
    await fetchCart();
  } catch (err) {
    console.error("Remove cart item failed:", err);

    // 🔁 rollback if API fails
    setCart(prevCart);
  } finally {
    setLoading(false);
  }
};



  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        initialized,
        addToCart: handleAddToCart,
        removeCartItem: handleRemoveCartItem,
        refreshCart: fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
