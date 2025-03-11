import { Link } from "react-router-dom";

export function CheckoutCard({ order }) {
  const subtotal = order.reduce((acc, product) => acc + product.discountedPrice * product.quantity, 0);
  const originalTotal = order.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const discount = originalTotal - subtotal;

  return (
    <div>
      {/* Order items */}
      {order.map((product) => (
        <div key={product.id} className="flex">
          <Link to={`/shop/${product.id}`} className="w-24 h-24">
            <img src={product.image?.url} alt={product.title} className="w-full h-full object-cover" />
          </Link>
          <div>
            <Link to={`/shop/${product.id}`}>{product.title}</Link>
            <p>{product.discountedPrice.toFixed(2)} NOK</p>
            <p>{product.quantity} item(s)</p>
          </div>
        </div>
      ))}

      {/* Price summary */}
      <div>
        <p>💰 Price Summary</p>
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>{subtotal.toFixed(2)} NOK</p>
        </div>
        {discount > 0 && (
          <div className="flex justify-between">
            <p>Discount:</p>
            <p>-{discount.toFixed(2)} NOK</p>
          </div>
        )}
        <div>
          <p>Total Cost:</p>
          <p>{subtotal.toFixed(2)} NOK</p>
        </div>
      </div>
    </div>
  );
}
