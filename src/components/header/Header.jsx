import { Link } from "react-router-dom";
import { Search } from "./search";

export function Header() {
  return (
    <header className="text-black">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex space-x-4">
          <Link to="/" className="text-xl font-bold">MyWebsite</Link>
          <Link to="/" className="hover:text-gray-200">Shop all</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          <Search />
        </nav>
      </div>
    </header>
  );
};
