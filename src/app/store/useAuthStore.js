import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  setUser: (user) => set({ user }),
  

  updateUser: (updates) =>
    set((state) => ({
      user: { ...state.user, ...updates },
    })),

  hydrateUser: (user) => set({ user }), // ✅ ADD THIS

  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;
