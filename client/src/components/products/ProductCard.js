import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <figure>
        <img src={product.image_url} alt="" />
        <figcaption>{product.description}</figcaption>
      </figure>
      <span className="price">${product.price}</span>
    </div>
  );
};

export default Product;
