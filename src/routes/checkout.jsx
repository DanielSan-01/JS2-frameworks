import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores";
import { CheckoutCard } from "../components/checkoutCard";

export function Checkout() {
  const { cart, clearCart } = useCartStore();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setOrder(cart);
    clearCart();
  }, []);

  return (
    <div>
      <h1>✅ Checkout Success</h1>
      <p>Thank you for your purchase!</p>
      <p>Your order is being processed.</p>
      <p>📦 Order Details:</p>

      <CheckoutCard order={order} />

      <Link to="/shop" className="border hover:bg-black hover:text-white">
        🛍 Back to Shop
      </Link>
    </div>
  );
}
