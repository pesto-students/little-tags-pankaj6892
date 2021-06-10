import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/context';
import googleIcon from './google-icon.png';
import './SignIn.scss';
import { BiLogOut } from 'react-icons/bi';

const SignIn = (props) => {
  const firebase1 = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  // const db = Firebase.firestore();
  // const cart = async (value) => {
  //   console.log(value);
  //   const response = db.collection('user');
  //   const data = await response.get();
  //   data.docs.forEach((item) => {
  //     console.log(item);
  //   });
  // };

  const handleGoogleSignIn = () => {
    firebase1
      .doGoogleSignIn()
      .then((authUser) => {
        console.log(authUser);
        firebase1.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
        // cart(authUser.user.uid + '_cart');
        // firebase.user(authUser.user.uid + '_cart').get()

        // console.log(cart);
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
