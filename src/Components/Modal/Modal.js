import React, { useState } from 'react';

import './Modal.scss';

const MODAL_STATE = {
  ACTIVE: 'active',
  HIDE: 'hide',
};

const Modal = (props) => {
  const [state, setState] = useState({
    modalState: MODAL_STATE.ACTIVE,
  });

  const activeDisplay = () => {
    setState({
      ...state,
      modalState: MODAL_STATE.ACTIVE,
    });
  };

  const hideDisplay = () => {
    setState({
      ...state,
      modalState: MODAL_STATE.HIDE,
    });
  };

  window.onclick = function (event) {
    if (event.target === Modal) {
      setState({
        ...state,
        modalState: MODAL_STATE.HIDE,
      });
    }
  };

  return (
    <div>
      <h2>Modal Example</h2>
      <button id='myBtn' onClick={activeDisplay}>
        Open Modal
      </button>
      <div id='myModal' className='modal'>
        <div className='modal-content'>
          <span className='close' onClick={hideDisplay}>
            &times;
          </span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
