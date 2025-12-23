"use client";

import { createContext, useEffect, useState } from "react";
import { addToCart, getUserCart, clearUserCart } from "@/app/lib/api";

export const CartContext = createContext(null);

const emptyCart = {
  items: [],
  total_cart_amount: 0,
};

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(emptyCart);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  /* ==========================
     FETCH CART
  ========================== */
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

  /* ==========================
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

  /* ==========================
     CLEAR CART
  ========================== */
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
