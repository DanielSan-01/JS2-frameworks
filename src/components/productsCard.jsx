import { Link } from 'react-router-dom';

export function ProductsCard({ products }) {
  if (!products || products.length === 0) {
    return <p>No products found.</p>; 
  }

  return (
    <>
      {products.map(product => (
        <Link to={`/shop/${product.id}`} key={product.id}>
          <div>
            <img src={product.image.url} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.discountedPrice} NOK</p>
          </div>
        </Link>
      ))}
    </>
  );
}



