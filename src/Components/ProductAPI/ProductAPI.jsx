import React from 'react';



const ProductAPI = (props) => {
  const apiUrl = 'https://fakestoreapi.com/products';

  fetch(apiUrl).then((response) => response.json());

  return 
};

return ProductAPI;