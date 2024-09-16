// components/ProductList.js
import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 }
  ];

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}: ${product.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
