import { useEffect, useState } from "react";
import { ProductsCard } from "../components/productsCard";
import { useProductStore } from "../stores";

export function ProductOverview() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const store = useProductStore.getState();
    setProducts(store.products);
    setLoading(store.loading);

    const unsubscribe = useProductStore.subscribe((state) => {
      setProducts(state.products);
      setLoading(state.loading);
    });

    return () => unsubscribe();
  }, []);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <ProductsCard products={products} />
  );
}
