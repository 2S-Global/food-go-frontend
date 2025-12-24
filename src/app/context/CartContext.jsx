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

    try {
      setLoading(true);

      // Optimistic UI
      setCart((prev) => {
        const updatedItems = prev.items.filter(
          (item) => item._id !== cartItemId
        );

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

      await deleteCartItem(cartItemId);
    } catch (err) {
      console.error("Remove cart item failed:", err);
      await fetchCart(); // rollback
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
