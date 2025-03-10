import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../../stores";

export function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef(null);

  const products = useProductStore((state) => state.products);

  const filteredProducts = searchInput
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
    ) : [];

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function setSearch(e) {
    setSearchInput(e.target.value);
    setIsDropdownOpen(e.target.value !== "");
  }

  return (
    <div className="relative mx-auto w-full max-w-xl lg:mr-10" ref={searchRef}>
      <div className="flex flex-row items-center justify-center border-b lg:border-black">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 27 27"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4 ml-2 mt-1 text-black lg:ml-1 lg:mt-1.5 lg:w-6 lg:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg> */}
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={setSearch}
          className="w-full py-2 pl-1.5 text-sm max-w-80 bg-light placeholder:text-black focus:outline-none lg:py-1 lg:text-base"
        />
      </div>

      {isDropdownOpen && filteredProducts.length > 0 && (
        <div className="absolute top-full mt-0 w-full bg-white shadow-lg z-10">
          {filteredProducts.map((product) => (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="flex items-center px-4 py-2 hover:bg-light cursor-pointer"
              onClick={() => {
                setIsDropdownOpen(false);
                setSearchInput("");
              }}
            >
              <img
                src={product.image?.url}
                alt={product.title}
                className="h-10 w-10 object-cover rounded-sm mr-2"
              />
              <p className="text-sm my-auto">{product.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
