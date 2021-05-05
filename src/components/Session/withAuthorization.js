import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAuthUser } from '../../actions';
import FirebaseContext from '../Firebase/context';
import * as ROUTES from '../../utils/Constants';

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
    }, []);

    return props.authUser ? (
      <Component {...props} />
    ) : (
      <p style={{ paddingTop: '1rem' }}>
        You need to sign in to access this page.
      </p>
    );
  };

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  const component1 = connect(mapStateToProps)(NewComponent);
  return withRouter(component1);
};

export default withAuthorization;
