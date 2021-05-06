import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Cart.scss';
import { connect } from 'react-redux';

const Cart = ({ cartData = [] }) => {
  return (
    <div className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn'>
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{cartData.length}</span>
        </span>
      </Link>
    </div>
  );
};

const mapStateProps = (state) => {
  console.log(state);

  if (state.cartState.cart !== null)
    return {
      cartData: state.cartState.cart,
    };
  else
    return {
      cartData: [],
    };
};

export default connect(mapStateProps)(Cart);
