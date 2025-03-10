export function SpecificCard({ product }) {
  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-5 shadow-md rounded-md">
      <img src={product.image?.url} alt={product.title} className="w-full h-64 object-cover" />
      <h1 className="text-2xl font-bold mt-3">{product.title}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-lg font-semibold text-blue-600 mt-3">{product.discountedPrice} NOK</p>
    </div>
  );
}
