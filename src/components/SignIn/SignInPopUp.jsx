import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './SignInPopUp.scss';
import { FaShoppingCart } from 'react-icons/fa';

function SignInPopUp(props) {
  const [showModal, setShowModal] = useState(props.value);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div>
        <button className='btn-box' onClick={openModal}>
          {props.item === 0 ? (
            'Sign In'
          ) : props.item === 1 ? (
            <>
              <button className='add-to-cart'>
                <FaShoppingCart className='mr-2' />
                Add to Cart
              </button>
            </>
          ) : (
            <FaShoppingCart />
          )}
        </button>

        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default SignInPopUp;
