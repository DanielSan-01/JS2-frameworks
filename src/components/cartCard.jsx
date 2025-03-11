import { useCartStore } from "../stores";
import { Link } from "react-router-dom";

export function CartCard() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    /* Cart items */
    <div>
      {cart.map((product) => (
        <div key={product.id} className="flex">
          {/* Image */}
          <Link to={`/shop/${product.id}`} className="w-32 h-32">
            <img src={product.image?.url} alt={product.title} className="w-full h-full object-cover" />
          </Link>

          {/* Product details */}
          <div>
            <Link to={`/shop/${product.id}`}>{product.title}</Link>

            <p>{product.discountedPrice.toFixed(2)} NOK</p>
            {product.price > product.discountedPrice && (
              <p className="line-through">{product.price.toFixed(2)} NOK</p>
            )}

            {/* Quantity */}
            <div className="flex justify-between items-center mr-7">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <p>{product.quantity} item(s)</p>
              <button onClick={() => increaseQuantity(product.id)}>+</button>

              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
