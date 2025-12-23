"use client";

import { createContext, useEffect, useState } from "react";
import { addToCart, getUserCart, clearUserCart } from "@/app/lib/api";

export const CartContext = createContext(null);

const emptyCart = {
  subscription: null,
  additional_items: [],
  totals: {},
};

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(emptyCart);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        setCart(emptyCart);
        return;
      }

      const data = await getUserCart();
      const cartData = data.data ?? data;

      setCart({
        subscription: cartData.subscription ?? null,
        additional_items: cartData.additional_items ?? [],
        totals: cartData.totals ?? {},
      });
    } catch (err) {
      console.warn("Fetch cart failed:", err.message);
      setCart(emptyCart);
    } finally {
      setInitialized(true);
    }
  };

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

  const handleClearCart = async () => {
    try {
      setLoading(true);
      await clearUserCart();
      setCart(emptyCart);
    } catch (err) {
      alert(err.message);
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
        clearCart: handleClearCart,
        refreshCart: fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
