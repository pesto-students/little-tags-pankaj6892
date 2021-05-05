import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './SignInPopUp.scss';

function SignInPopUp(props) {
  const [showModal, setShowModal] = useState(props.value);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div>
        <button className='btn-box' onClick={openModal}>
          Sign In
        </button>

        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default SignInPopUp;
