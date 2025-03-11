import { Link } from "react-router-dom";
import { Search } from "./search";
import { useCartStore } from "../../stores";

export function Header() {
  const { cart } = useCartStore();

  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
  
  return (
    <header>
      <div className="flex justify-between">
        <nav className="flex space-x-5">
          <Link to="/" className="font-bold">MyWebsite</Link>
          <Link to="/">Shop all</Link>
          <Link to="/contact">Contact</Link>
          <Search />
        </nav>

        <Link to="/cart" className="flex">
          <p>🛒</p>
          {totalItems > 0 && (
            <span>
             {totalItems}
            </span>
          )}
        </Link>
      </div>
      
    </header>
  );
};
