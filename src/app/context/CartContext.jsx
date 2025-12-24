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
  =======================*/
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
      console.warn("Fetch cart failed:", err.message);
      setCart(emptyCart);
    } finally {
      setInitialized(true);
    }
  };

  /* =======================
     ADD TO CART
  ========================== */
  const handleAddToCart = async (payload) => {
    try {
      setLoading(true);
      await addToCart(payload);
      await fetchCart();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* =====================
     DELETE CART ITEM
     WITH OPTIMISTIC UI
  ===================== */
  const handleRemoveCartItem = async (cartItemId) => {
    if (!cartItemId) return;

    try {
      setLoading(true);

      // 1️⃣ Optimistic UI: remove item immediately
      setCart((prev) => {
        const updatedItems = prev.items.filter(item => item._id !== cartItemId);
        const updatedTotal = updatedItems.reduce(
          (sum, item) => sum + item.item_total_price,
          0
        );
        return {
          ...prev,
          items: updatedItems,
          total_cart_amount: updatedTotal,
        };
      });

      // 2️⃣ Call API
      await deleteCartItem(cartItemId);
      // no need to fetchCart() unless you want fresh server data
    } catch (err) {
      alert(err.message || "Unable to remove item");
      // Optional: Rollback cart here if needed
      await fetchCart();
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
