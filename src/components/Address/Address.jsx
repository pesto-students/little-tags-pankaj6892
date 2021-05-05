import React from 'react';
import './Address.scss';

const Address = (props) => {
  return (
    <div className='pt-65'>
      <h1 className='text-center'>Deliver To</h1>
      <div className='row'>
        <div className='col-sm-6 col-6 address-block-left'>
          <div>First Name</div>
          <div>
            <input
              className='input-box-address'
              type='text'
              placeholder='First Name'
            />
          </div>
          <div>Last Name</div>
          <div>
            <input
              className='input-box-address'
              type='text'
              placeholder='Last Name'
            />
          </div>
          <div>Email Id</div>
          <div>
            <input
              className='input-box-address'
              type='text'
              placeholder='example@example.com'
            />
          </div>
          <div>Phone Number</div>
          <div>
            <input
              className='input-box-address'
              type='text'
              placeholder='9999999999'
            />
          </div>
        </div>
        <div className='col-sm-6 col-6 address-block-right'>
          <div>Address 1</div>
          <div>
            <input
              className='input-box-address'
              type='text'
              placeholder='Enter Address 1'
            />
          </div>
          <div>Address 2</div>
          <div>
            <input
              className='input-box-address'
              type='text'
              placeholder='Enter Address 2'
            />
          </div>
          <div>State</div>
          <div>
            <input
              className='input-box-address'
              type='text'
              placeholder='Enter State Name'
            />
          </div>
          <div>Pin Code</div>
          <div>
            <input
              className='input-box-address'
              type='text'
              placeholder='111111'
            />
          </div>
        </div>
      </div>
      <div className='text-center'>
        <button type='submit' className='add-address'>
          Add Address
        </button>
      </div>
    </div>
  );
};

export default Address;
