import React from 'react';
import './ProductCard.scss';
import {FaShoppingCart} from 'react-icons/fa';

const ProductCard = (props) => {

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top"></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>Shirt</h1>
              <p>₹1250</p>
            </div>
            <div className="buy p-20" ><FaShoppingCart size="50px"/></div>
          </div>
          <div className="right">
            <div className="done"><i className="material-icons">done</i></div>
            <div className="details">
              <h1>Shirt</h1>
              <p>Added to your cart</p>
            </div>
            <div className="remove"><i className="material-icons">clear</i></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard;