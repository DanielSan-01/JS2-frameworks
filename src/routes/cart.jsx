import { useCartStore } from "../stores";
import { Link } from "react-router-dom";
import { CartCard } from "../components/cartCard";

export function Cart() {
  const { cart } = useCartStore();
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const totalDiscountedPrice = cart.reduce((total, product) => total + product.discountedPrice * product.quantity, 0);
  const totalDiscount = totalPrice - totalDiscountedPrice;

  if (cart.length === 0) {
    /* When cart is empty */
    return (
      <div>
        <p>Oops, nothing here...</p>
        <Link to="/shop" className="border hover:bg-black hover:text-white">
          Browse our shop
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Title */}
      <h1>Cart</h1>
      
      <div className="flex">
        {/* Cart items */}
        <div>
          <CartCard />
        </div>

        {/* Order summary */}
        <div className="flex flex-col">
          <h3>Order Summary</h3>
          <div>
            <div>
              <span>Sub Total</span>
              <span>{totalPrice.toFixed(2)} NOK</span>
            </div>
            {totalDiscount > 0 && (
              <div>
                <span>Discount</span>
                <span>-{totalDiscount.toFixed(2)} NOK</span>
              </div>
            )}
            <div>
              <span>Total</span>
              <span>{totalDiscountedPrice.toFixed(2)} NOK</span>
            </div>
          </div>
          <Link
            to={cart.length > 0 ? "/checkout" : "#"}
            className={`border ${
              cart.length > 0 ? 'hover:bg-black hover:text-white' : 'bg-white text-black cursor-not-allowed'
            }`}
            aria-disabled={cart.length === 0}
          >
            🛒 Proceed to Checkout
          </Link>
        </div>
      </div>      
    </div>
  );
}
