import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  console.log(products);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
      <div className='mx-1 mt-28 lg:mx-24 bg-white'>
        <div className='flex flex-wrap justify-center mt-5'>
          <ProductsCard products={products} />
        </div>
      </div>
    </>
  );
}
