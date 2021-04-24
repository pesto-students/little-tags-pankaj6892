import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/context';

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
      // .then(() => {
      //   props.history.push('/cart');
      // })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleSignOut = () => {
    firebase.doSignOut();
  };

  return (
    <div>
      <div onClick={handleGoogleSignIn}>Sign In</div>
      <button onClick={handleSignOut}>Sign Out</button>
      {!!errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default withRouter(SignIn);
