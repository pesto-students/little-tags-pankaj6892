import React from 'react';
import './CartItem.scss';
import PinkDress from './pink-dress.png';
import products from '../data/products.json';

const CartItem = (props) => {
  // const cartDump = localStorage.getItem('productID');
  // const cartProductIDs = JSON.parse(cartDump);

  // const cartProductsDump = products.filter(
  //   (product) => cartProductIDs === product.id
  // );

  const cartProducts = products.map((product) => {
    return (
      <div className='row'>
        <div className='col-sm-3'>
          <div className='product-img'>
            <img src={PinkDress} alt='' width='117px' />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='mg-20'>
            <h3>Pink Cotton Kurti</h3>
            <button className='increment-decrement'>-</button>
            <span className='item-count'>1</span>
            <button className='increment-decrement'>+</button>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='mg-20'>
            <h3>₹ 25000</h3>
          </div>
        </div>
      </div>
    );
  });

  return cartProducts;
};

export default CartItem;
