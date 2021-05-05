import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/context';
import googleIcon from './google-icon.png';
import './SignIn.scss';
import { BiLogOut } from 'react-icons/bi';

const SignIn = (props) => {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

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
      .then(() => {})
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

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

export const SignOut = (props) => {
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
