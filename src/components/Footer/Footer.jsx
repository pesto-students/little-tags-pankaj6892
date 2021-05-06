import React from 'react';
import './Footer.scss';
import card from './card.png';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-div'>
      <h1 className='text-center'>
        <img src={logo} alt='Attire Fusion' width='200px' />
      </h1>
      <div className='row'>
        <div className='col-sm-6'>
          <img src={card} alt='debit card' width='500px' />
        </div>
        <div className='col-sm-3'>
          <div className='text-left'>
            <strong>Our Categories</strong>
          </div>
          <Link to='/product/mens'>
            <div>Mens</div>
          </Link>
          <Link to='/product/womens'>
            <div>Womens</div>
          </Link>
          <Link to='/product/jewelery'>
            <div>Jewellery</div>
          </Link>
        </div>
        <div className='col-sm-3'>
          <strong>About Us</strong>
          <p>
            We are a Fashion e-Commerce Portal providing fancy dresses for Men's
            and Women's. You can also buy jewelleries from our portal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
