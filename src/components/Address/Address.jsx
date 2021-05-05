import React, { useState } from 'react';
import './Address.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAddress } from '../../actions';
import { add } from 'lodash';
//import FirebaseContext from '../Firebase/context';

const Address = (props) => {
  const [address, setAddress] = useState(props.address);

  // const [state, setState] = useState({
  //   addressState: ADDRESS_STATE.ADD_ADDRESS,
  // });

  // if (props.address.length !== 0) {
  //   setState({
  //     ...state,
  //     addressState: ADDRESS_STATE.SELECT_ADDRESS,
  //   });
  // }

  const submitForm = (e) => {
    e.preventDefault();
    props.addAddress(address);
    setAddressFlag(0);
  };

  // console.log(state.addressState === ADDRESS_STATE.ADD_ADDRESS);

  const addressList = props.address.map((addr) => {
    return (
      <div>
        <div className='deliver-to-1 inline-right'>
          <div className='row'>
            <div className='col-sm-2'>
              <input
                type='radio'
                id={add.fname}
                name={add.fname}
                value={add.fname}
                className='payment-option radio-margin'
              />
            </div>
            <div className='col-sm-10'>
              <strong>{addr.fname + ' ' + addr.lname}</strong>
              <p>
                {addr.add1}
                <br />
                {addr.add2}
                <br />
                {addr.state + ' ' + addr.pincode}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const [addressFlag, setAddressFlag] = useState(
    props.address.length !== 0 ? 0 : 1
  );

  const changeAddressFlag = () => {
    console.log('add address');
    setAddressFlag(1);
  };

  return (
    <div className='pt-65'>
      {addressFlag === 0 ? (
        <div className='row'>
          <div className='col-sm-4'></div>
          <div className='col-sm-4'>
            <h1 className='text-center'>Deliver To</h1>
            {addressList}

            <button className='add-new-address' onClick={changeAddressFlag}>
              Add Address
            </button>
            <h3 className='text-center pb-2'>
              Select Payment Gateway to Proceed
            </h3>
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
      ) : (
        <div>
          <h1 className='text-center'>Deliver To</h1>
          <form onSubmit={submitForm.bind()}>
            <div className='row'>
              <div className='col-sm-6 col-6 address-block-left'>
                <div>First Name</div>
                <div>
                  <input
                    name='fname'
                    className='input-box-address'
                    type='text'
                    placeholder='First Name'
                    // value={address.fname}
                    onChange={(e) =>
                      setAddress({ ...address, fname: e.target.value })
                    }
                  />
                </div>
                <div>Last Name</div>
                <div>
                  <input
                    name='lname'
                    className='input-box-address'
                    type='text'
                    placeholder='Last Name'
                    // value={address.lname}
                    onChange={(e) =>
                      setAddress({ ...address, lname: e.target.value })
                    }
                  />
                </div>
                <div>Email Id</div>
                <div>
                  <input
                    name='email'
                    className='input-box-address'
                    type='text'
                    placeholder='example@example.com'
                    // value={address.email}
                    onChange={(e) =>
                      setAddress({ ...address, email: e.target.value })
                    }
                  />
                </div>
                <div>Phone Number</div>
                <div>
                  <input
                    name='phone'
                    className='input-box-address'
                    type='text'
                    placeholder='9999999999'
                    // value={address.phone}
                    onChange={(e) =>
                      setAddress({ ...address, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className='col-sm-6 col-6 address-block-right'>
                <div>Address 1</div>
                <div>
                  <input
                    name='add1'
                    className='input-box-address'
                    type='text'
                    placeholder='Enter Address 1'
                    // value={address.add1}
                    onChange={(e) =>
                      setAddress({ ...address, add1: e.target.value })
                    }
                  />
                </div>
                <div>Address 2</div>
                <div>
                  <input
                    name='add2'
                    className='input-box-address'
                    type='text'
                    placeholder='Enter Address 2'
                    // value={address.add2}
                    onChange={(e) =>
                      setAddress({ ...address, add2: e.target.value })
                    }
                  />
                </div>
                <div>State</div>
                <div>
                  <input
                    name='state'
                    className='input-box-address'
                    type='text'
                    placeholder='Enter State Name'
                    // value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                  />
                </div>
                <div>Pin Code</div>
                <div>
                  <input
                    name='pincode'
                    className='input-box-address'
                    type='text'
                    placeholder='111111'
                    // value={address.pincode}
                    onChange={(e) =>
                      setAddress({ ...address, pincode: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className='text-center'>
              <button type='submit' className='add-address'>
                Add Address
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    address: state.addressState.address,
  };
};

const mapDispatchToProps = { addAddress };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Address)
);
