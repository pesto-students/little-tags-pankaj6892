import React, { useState } from 'react';
import SignIn from './SignIn';
import Modal from '../Modal/Modal';

const POPUP_STATE = {
  SHOW: 'show',
  HIDE: 'hide',
};

const SignInPopUp = () => {
  const [state, setState] = useState({ popUpState: POPUP_STATE.SHOW });

  const openModalHandler = () => {
    setState({
      ...state,
      popUpState: POPUP_STATE.HIDE,
    });
  };

  const closeModalHandler = () => {
    setState({
      ...state,
      popUpState: POPUP_STATE.HIDE,
    });
  };

  return (
    <div>
      {POPUP_STATE.SHOW ? (
        <div onClick={closeModalHandler} className='back-shed'></div>
      ) : null}

      <button className='open-modal-btn' onClick={openModalHandler}>
        <SignIn />
      </button>

      <Modal
        className='modal'
        show={POPUP_STATE.HIDE}
        close={closeModalHandler}
      ></Modal>
    </div>
  );
};

export default SignInPopUp;
