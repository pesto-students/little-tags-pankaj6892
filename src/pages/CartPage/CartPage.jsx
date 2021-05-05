import React, { useState } from 'react';
import './CartPage.scss';
import withAuthorization from '../../components/Session/withAuthorization';
import CartItem from '../../components/CartItem/CartItem';

// const CART_STATUS = {
//   EMPTY: 'empty',
//   FILLED: 'filled',
// };

function CartPage() {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('cart'))
  );

  let totalPrice = 0;

  cartData.forEach((item) => {
    totalPrice += item.productPrice * item.productQuantity;
  });

  // const cartData = JSON.parse(localStorage.getItem('cart'));

  console.log(cartData);

  let newProduct = {};

  if (cartData !== null) {
    newProduct = cartData.map((product) => {
      return (
        <CartItem
          key={product.productId.toString()}
          productName={product.productName}
          productPrice={product.productPrice}
          productImage={product.productImage}
          productId={product.productId}
          productSize={product.productSize}
          productQuantity={product.productQuantity}
        />
      );
    });
  }

  return (
    <div className='mt-65'>
      <div className='page-100 pt-65'>
        <div className='row'>
          <div className='col-sm-8 pl-5'>
            <h1>Your Cart</h1>
            <div>
              {cartData !== null ? newProduct : 'Nothing added in your cart'}
            </div>
          </div>
          <div className='col-sm-4'>
            <h2>Cart Total</h2>
            <div className='cart-total pt-65 '>
              <div className='row'>
                <div className='col-sm-6'>
                  <h3>Price</h3>
                </div>
                <div className='col-sm-6'>
                  <h3>₹ {totalPrice.toFixed(2)}</h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <h3>Taxes</h3>
                </div>
                <div className='col-sm-6'>
                  <h3>₹ {(totalPrice * 0.18).toFixed(2)}</h3>
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
                  <h3>₹ {(totalPrice + totalPrice * 0.18).toFixed(2)}</h3>
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
