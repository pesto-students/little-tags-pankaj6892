import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/context';
import googleIcon from './google-icon.png';
import './SignIn.scss';
import { BiLogOut } from 'react-icons/bi';
// import Modal from '../Modal/Modal';

const SignIn = (props) => {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  // const [showModal, setShowModal] = useState(false);

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        console.log(authUser);
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        props.history.push('/');
        // <Modal showModal={showModal} setShowModal={setShowModal} />;
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  // const handleSignOut = () => {
  //   firebase.doSignOut();
  // };

  return (
    <div>
      <div>
        <img
          onClick={handleGoogleSignIn}
          src={googleIcon}
          alt='Sign in with Google'
          height='50px'
        />
      </div>
      {!!errorMessage && <div className='error'>{errorMessage}</div>}
    </div>
  );
};

export const SignOut = () => {
  const firebase = useContext(FirebaseContext);

  const handleSignOut = () => {
    firebase.doSignOut();
  };

  return (
    <div onClick={handleSignOut} className='sign-out'>
      <BiLogOut aria-label='Sign Out' />
    </div>
  );
};

export default withRouter(SignIn);
