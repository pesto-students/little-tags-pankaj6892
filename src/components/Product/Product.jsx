import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Product.scss';
import products from '../data/products.json';

const Product = (props) => {
  let filteredProduct = products.filter((product) => {
    return product.category === props.category;
  });

  console.log(filteredProduct.length);

  if (filteredProduct.length === 0) {
    filteredProduct = products;
  }

  const newProduct = filteredProduct.map((product) => {
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
