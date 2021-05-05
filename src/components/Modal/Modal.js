import React, { useRef, useEffect, useCallback } from 'react';
import './Modal.scss';
import fusion from './fusion.webp';
import SignIn from '../SignIn/SignIn';
import logo from '../../logo.svg';

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  console.log('hide modal');

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div className='background-box' onClick={closeModal} ref={modalRef}>
          <div className='modalWrapper' showModal={showModal}>
            <div className='modalImg'>
              <img src={fusion} alt='girl wearing fusion dress' width='381px' />
            </div>
            <div className='modalContent'>
              <img src={logo} alt='logo' width='200px' />
              <h3>Sign In / Sign Up</h3>
              <p style={{ margin: '0rem 1rem 3rem 1rem' }}>
                Use either of the options below to Sign In or Sign Up
              </p>
              <SignIn />
            </div>
            <div
              className='closeModalButton'
              aria-label='Close modal'
              onClick={() => setShowModal((prev) => !prev)}
            >
              X
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
