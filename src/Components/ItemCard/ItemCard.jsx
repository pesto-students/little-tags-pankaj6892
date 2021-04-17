import React from 'react';
import './ItemCard.scss';

const ItemCard = (props) => {
  return (
    <div>
      <div className='card'>
        <img
          className='item-img'
          src={props.productImage}
          alt={props.productName}
          width='100%'
          height='310px'
        />
        <div className='box'>
          <div className='item-name'>{props.productName}</div>
          <div className='item-price'>₹ {props.productPrice}</div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
