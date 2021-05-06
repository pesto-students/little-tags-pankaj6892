import React from 'react';
import './ItemCard.scss';
import { useHistory } from 'react-router-dom';

const ItemCard = (props) => {
  const AddToLocalStorageArray = (key, value) => {
    let existing = localStorage.getItem(key);
    existing = existing ? existing.split(',') : [];
    existing.push(value);
    localStorage.setItem(key, existing.toString());
  };

  const history = useHistory();

  const addToCart = () => {
    console.log(props.productID);
    AddToLocalStorageArray('productID', JSON.stringify(props.productID));
    AddToLocalStorageArray('productID', JSON.stringify(props.productName));
    AddToLocalStorageArray('productID', JSON.stringify(props.productPrice));
    AddToLocalStorageArray('productID', JSON.stringify(props.productImage));
  };

  const goToProduct = (id) => {
    console.log('product clicked');
    history.push('/product/' + id);
  };

  return (
    <div>
      <div
        className='card'
        onClick={() => {
          goToProduct(props.productID);
        }}
      >
        <img
          className='item-img'
          src={props.productImage}
          alt={props.productName}
        />
        <div className='box'>
          <div className='item-name'>{props.productName}</div>
          {/* <div className='item-price'>₹ {props.productPrice}</div> */}
          <button value={props.productID} onClick={addToCart}>
            {/* Add to Cart */}
            <div className='item-price'>₹ {props.productPrice}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
