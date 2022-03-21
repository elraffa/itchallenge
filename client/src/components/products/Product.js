import React, { useEffect, useState } from 'react';
import './products.css';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`./api/products/${id}`);
      setProduct(result.data);
      setIsLoading(false);
    };
    fetchItem();
  }, []);

  return (
    <div>
      <div className="single-product">
        <img src={product.image_url} alt={product.description} />
        <div className="text">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>${product.price}</span>
          <button className="button-md">Buy now</button>
        </div>
      </div>
      <Link to="/">
        <p className="back">&#8592; Back to all products</p>
      </Link>
    </div>
  );
};

export default Product;
