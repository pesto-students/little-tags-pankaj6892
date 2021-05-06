import React from 'react';
import './ThankYou.scss';
import thankyou from './thankyou.png';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className='page-min-height'>
      <div className='padding-top-300 text-center '>
        <img src={thankyou} alt='thank you' width='290px' className='pb-2' />
        <h1 className='text-center'>Thank You for shopping with us</h1>
        <div>
          <Link to='/product'>
            <button className='shopping-button'> Continue Shopping </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
