import './products.css';
import Product from './ProductCard';
import { Outlet, Link } from 'react-router-dom';

const Products = ({ products }) => {
  return (
    <>
      <section className="products">
        <h2>Products</h2>
        <div className="products-grid">
          {products.map((product, index) => {
            return (
              <Link to={`/products/${product._id}`}>
                <Product key={product._id} product={product} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
