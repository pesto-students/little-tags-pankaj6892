import React from 'react';
import './style/CartPage.css';
import withAuthorization from '../Components/Session/withAuthorization';
import PinkDress from './pink-dress.png';
import CartItem from '../Components/CartItem/CartItem';

function CartPage() {
  return (
    <div className='mt-65'>
      <div className='page-100 pt-65'>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-8'>
            <h1>Your Cart</h1>
            <CartItem />
          </div>
          <div className='col-sm-3'>
            <h2>Cart Total</h2>
            <div className='cart-total pt-65'>
              <div className='row'>
                <div className='col-sm-6'>
                  <h3>Price</h3>
                </div>
                <div className='col-sm-6'>
                  <h3>₹ 25000</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <h3>Taxes</h3>
                </div>
                <div className='col-sm-6'>
                  <h3>₹ 1800</h3>
                </div>
              </div>
              <div className='row'>
                <hr className='line' />
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <h3>Total</h3>
                </div>
                <div className='col-sm-6'>
                  <h3>₹ 26800</h3>
                </div>
              </div>
            </div>

            <button className='btn-success btn-checkout'>Checkout</button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default withAuthorization(CartPage);
