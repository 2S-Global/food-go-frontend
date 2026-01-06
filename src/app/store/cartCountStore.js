// app/store/cartCountStore.js
import { create } from "zustand";
import { getAuthHeaders } from "@/app/lib/api";
export const useCartCountStore = create((set) => ({
  count: 0,
  loading: false,

  fetchCartCount: async () => {
    try {
      const headers = getAuthHeaders();

      // If user not logged in
      if (!headers?.Authorization) {
        set({ count: 0 });
        return;
      }

      set({ loading: true });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/usercart/user-cart-count`,
        { headers }
      );

      const data = await res.json();

      if (data?.success) {
        set({ count: data.data.count });
      } else {
        set({ count: 0 });
      }
    } catch (error) {
      console.error("Cart count error:", error);
      set({ count: 0 });
    } finally {
      set({ loading: false });
    }
  },

  resetCount: () => set({ count: 0 }),
}));
