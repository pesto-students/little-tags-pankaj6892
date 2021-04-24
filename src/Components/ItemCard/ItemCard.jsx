import React from 'react';
import './ItemCard.scss';

const ItemCard = (props) => {
  const AddToLocalStorageArray = (key, value) => {
    let existing = localStorage.getItem(key);
    existing = existing ? existing.split(',') : [];
    existing.push(value);
    localStorage.setItem(key, existing.toString());
  };

  const addToCart = (productID) => {
    console.log(productID);
    //localStorage.setItem('productID', JSON.stringify(productID));
    AddToLocalStorageArray('productID', JSON.stringify(productID));
  };

  

  return (
    <div>
      <div className='card'>
        <img
          className='item-img'
          src={props.productImage}
          alt={props.productName}
        />
        <div className='box'>
          <div className='item-name'>{props.productName}</div>
          <div className='item-price'>₹ {props.productPrice}</div>
          <button
            value={props.productID}
            onClick={() => {
              addToCart(props.productID);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
