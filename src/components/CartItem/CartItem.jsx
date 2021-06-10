import React, { useState, useEffect } from 'react';
import './CartItem.scss';
import { connect } from 'react-redux';
import { removeFromCart, addToBasket } from '../../actions';

const CartItem = (props) => {
  // eslint-disable-next-line
  const [itemQuantity, setItemQuantity] = useState(
    Number(props.productQuantity)
  );
  // eslint-disable-next-line
  const [cart, setCart] = useState([]);

  let localCart = localStorage.getItem('cart');

  // const updateItem = (itemID, quantity, changeFlag) => {
  //   let cartCopy = [...cart];

  //   //find if item exists, just in case
  //   let existentItem = cartCopy.find(
  //     (item) => item.productId === Number(itemID)
  //   );

  //   //if it doesnt exist simply return
  //   if (!existentItem) return;

  //   //continue and update quantity
  //   changeFlag === 'increase'
  //     ? (existentItem.productQuantity = quantity + 1)
  //     : quantity > 1
  //     ? (existentItem.productQuantity = quantity - 1)
  //     : (existentItem.productQuantity = quantity);

  //   //validate result
  //   if (existentItem.productQuantity <= 0) {
  //     //removing item  by filtering it from cart array
  //     cartCopy = cartCopy.filter((item) => item.productId !== itemID);
  //   }

  //   //again, update state and localState
  //   setCart(cartCopy);

  //   let cartString = JSON.stringify(cartCopy);
  //   localStorage.setItem('cart', cartString);

  //   if (changeFlag === 'decrease') {
  //     decreaseQuantity();
  //   } else if (changeFlag === 'increase') {
  //     increaseQuantity();
  //   }
  // };

  // const removeItem = (itemID) => {
  //   //create cartCopy
  //   let cartCopy = [...cart];

  //   cartCopy = cartCopy.filter((item) => item.productId !== Number(itemID));

  //   //update state and local
  //   setCart(cartCopy);

  //   let cartString = JSON.stringify(cartCopy);
  //   localStorage.setItem('cart', cartString);
  // };

  useEffect(() => {
    // eslint-disable-next-line
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, []);

  let totalPrice = itemQuantity * props.productPrice;

  // const decreaseQuantity = () => {
  //   if (itemQuantity >= 2) {
  //     setItemQuantity(itemQuantity - 1);
  //   }
  // };

  // const increaseQuantity = () => {
  //   addToBasket(props.cartData[0]);
  //   setItemQuantity(itemQuantity + 1);
  // };

  return (
    <div className='row cart-item'>
      <div className='col-sm-3'>
        <div className='product-img-cart'>
          <img
            src={props.productImage}
            alt={props.productName}
            height='150px'
          />
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='mg-20'>
          <h3>{props.productName}</h3>
          <span>Quantity</span>
          {/* <button
            className='increment-decrement ml-3'
            onClick={() => {
              updateItem(props.productId, itemQuantity, 'decrease');
            }}
          >
            -
          </button> */}
          <span className='item-count-white'>{itemQuantity}</span>
          {/* <button
            className='increment-decrement'
            onClick={() => {
              updateItem(props.productId, itemQuantity, 'increase');
            }}
          >
            +
          </button> */}
          {/* <div className='pt-4'>
            <button
              className='remove-from-cart'
              onClick={() => {
                props.removeFromCart(props.cartData[0]);
              }}
            >
              Remove from Cart
            </button>
          </div> */}
        </div>
        <div className='item-count-white'>Size: {props.productSize}</div>
      </div>
      <div className='col-sm-3'>
        <div className='mg-20'>
          <h3>₹ {totalPrice.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
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

const mapDispatchToProps = { removeFromCart, addToBasket };

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
