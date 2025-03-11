import { useCartStore } from "../stores";

export function SpecificCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div>
      <img src={product.image?.url} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      
      <p>{product.discountedPrice} NOK</p>
      {product.price > product.discountedPrice && (
        <p>{product.price} NOK</p>
      )}

      <button onClick={() => addToCart(product)} className="border hover:bg-black hover:text-white">
        🛒 Add to Cart
      </button>
    </div>
  );
}
