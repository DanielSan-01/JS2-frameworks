import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,

  setProducts: (products) => set({ products }),
  
  setLoading: (loading) => set({ loading }),

  fetchProducts: async () => {
    const currentState = useProductStore.getState();
  
    if (currentState.products.length > 0) {
      return;
    }
  
    useProductStore.setState({ loading: true });
  
    try {
      const res = await fetch('https://v2.api.noroff.dev/online-shop/');
      const data = await res.json();
  
      if (JSON.stringify(currentState.products) !== JSON.stringify(data.data)) {
        useProductStore.setState({ products: data.data, loading: false });
      } else {
        useProductStore.setState({ loading: false });
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      useProductStore.setState({ loading: false });
    }
  }
}));