import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpecificCard } from "../components/specificCard";

export function SpecificProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const data = await res.json();
        setProduct(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setError("Could not load product.");
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p className="text-gray-500">Product not found.</p>;

  return (
      <SpecificCard product={product} />
  );
}
