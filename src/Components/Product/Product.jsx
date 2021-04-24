import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Product.scss';
import products from '../data/products.json';

const Product = (props) => {
  const newProduct = products.map((product) => {
    return (
      <ItemCard
        key={product.id.toString()}
        productName={product.title}
        productPrice={product.price}
        productImage={product.image}
        productID={product.id}
      />
    );
  });
  return newProduct;
};

export default Product;
