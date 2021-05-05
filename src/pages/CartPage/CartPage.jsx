import React from 'react';
import './CartPage.scss';
import withAuthorization from '../../components/Session/withAuthorization';
import CartItem from '../../components/CartItem/CartItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function CartPage(props) {
  let totalPrice = 0;

  props.cartData.forEach((item) => {
    totalPrice += item.productPrice * item.productQuantity;
  });

  console.log(props.cartData);

  let newProduct = {};

  if (props.cartData !== null) {
    newProduct = props.cartData.map((product) => {
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
              {props.cartData !== null
                ? newProduct
                : 'Nothing added in your cart'}
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
            <div>
              {totalPrice > 0 && (
                <Link to='/address'>
                  <button className='btn-success btn-checkout'>Checkout</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

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

export default withAuthorization(connect(mapStateProps)(CartPage));
