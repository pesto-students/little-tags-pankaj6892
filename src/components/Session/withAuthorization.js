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
      <div className='page-min-height '>
        <h1 style={{ paddingTop: '20rem' }} className='text-center'>
          You need to sign in to access this page.
        </h1>
      </div>
    );
  };

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });
  const component1 = connect(mapStateToProps)(NewComponent);
  return withRouter(component1);
};

export default withAuthorization;
