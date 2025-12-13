"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("foodAppCart");
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
        }
      }
      setIsHydrated(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated && typeof window !== "undefined") {
      localStorage.setItem("foodAppCart", JSON.stringify(cartItems));
    }
  }, [cartItems, isHydrated]);

  const addToCart = (item) => {
    const normalized = {
      id: String(item.id),
      name: item.name,
      price: Number(item.price),
      image: item.image,
      qty: 1,
    };

    setCartItems((prev) => {
      const exists = prev.find((x) => x.id === normalized.id);

      if (exists) {
        return prev.map((x) =>
          x.id === normalized.id ? { ...x, qty: x.qty + 1 } : x
        );
      }

      return [...prev, normalized];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("foodAppCart");
      } catch (e) {
        console.warn("Could not remove cart from localStorage", e);
      }
    }
  };

  const getCartTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        getCartTotal,
        isHydrated,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
