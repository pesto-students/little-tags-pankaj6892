import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../Firebase/context';
// import Modal from '../Modal/Modal';

const withAuthorization = (Component) => {
  const NewComponent = (props) => {
    // const [showModal, setShowModal] = useState(props.value);

    // const openModal = () => {
    //   setShowModal((prev) => !prev);
    // };

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
      // <Modal showModal={true} setShowModal={setShowModal} />

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
