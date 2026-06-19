import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],

  add: (product) =>
    set((state) => ({
      items: [...state.items, product]
    })),

  remove: (id) =>
    set((state) => ({
      items: state.items.filter((x) => x.id !== id)
    })),

  clear: () => set({ items: [] })
}));
