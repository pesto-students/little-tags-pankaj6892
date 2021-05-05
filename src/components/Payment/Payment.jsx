import React from 'react';
import './Payment.scss';

const Payment = (props) => {
  return (
    <div className='pt-65'>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <h1 className='text-center'>Deliver To</h1>
          <div className='deliver-to'>
            <strong>Pankaj Singh</strong>
            <p>
              51 Street Road
              <br />
              New Colony
              <br />
              Pune - 11111
            </p>
          </div>
          <div>
            <input
              type='radio'
              id='payu'
              name='gateway'
              value='payu'
              className='payment-option'
            />
            <label for='payu' className='payment-label'>
              PayU Money
            </label>
            <br />
            <input
              type='radio'
              id='razorpay'
              name='gateway'
              value='razorpay'
              className='payment-option'
            />
            <label for='razorpay' className='payment-label'>
              Razor Pay
            </label>
            <br />
            <input
              type='radio'
              id='paypal'
              name='gateway'
              value='paypal'
              className='payment-option'
            />
            <label for='paypal' className='payment-label'>
              Paypal
            </label>
          </div>
          <div className='text-center'>
            <button type='submit' className='add-address'>
              Make Payment
            </button>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>
      <div className='text-center'></div>
    </div>
  );
};

export default Payment;
