import React from "react";
import {FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import '../Pages/CSS_files/Cart.css'

export default function Cart() {
  return (
    <div className="cart-btn-wrapper">
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">12</span>
        </span>
      </Link>
    </div>
  );
}
