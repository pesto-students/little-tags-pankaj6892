import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/context';

const withAuthorization = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const next = (authUser) => {
      if (!authUser) {
        props.history.push('/');
      }
    };

    useEffect(() => {
      firebase.onAuthChangeListner(next);
      // eslint-disable-next-line
    }, []);

    return props.authUser ? (
      <Component {...props} />
    ) : (
      <h1 style={{ paddingTop: '5rem' }}>
        You need to sign in to access this page.
      </h1>
    );
  };

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  const component1 = connect(mapStateToProps)(NewComponent);
  return withRouter(component1);
};

export default withAuthorization;
