import React, { useState } from 'react';
import './SideNavBar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import SignInPopUp from '../SignIn/SignInPopUp';
import { SignOut } from '../SignIn/SignIn';
import { connect } from 'react-redux';

const SIDE_NAV_STATE = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

const SideNavBar = ({ authData = [] }) => {
  const [state, setState] = useState({
    sideNavState: SIDE_NAV_STATE.INACTIVE,
  });

  const openSideNav = () => {
    setState({
      ...state,
      sideNavState: SIDE_NAV_STATE.ACTIVE,
    });
  };

  const closeSideNav = () => {
    setState({
      ...state,
      sideNavState: SIDE_NAV_STATE.INACTIVE,
    });
  };

  return (
    <div>
      {state.sideNavState === SIDE_NAV_STATE.ACTIVE && (
        <div id='mySidenav' className='sidenav width-250 pr-3'>
          <div onClick={closeSideNav} className='text-right'>
            <h3>x</h3>
          </div>
          <img
            src={logo}
            alt='attire fusion'
            height='50px'
            className='margin-up'
          />
          <div className='one-line'>
            {authData.length !== 0 ? (
              <>
                <div className='text-center'>
                  <img
                    src={authData.displayPicture}
                    alt=''
                    width='100px'
                    className='profile-pic'
                  />
                </div>
                <div className='text-center'>
                  {authData.username} <SignOut className='one-line' />
                </div>
              </>
            ) : (
              <SignInPopUp item={0} />
            )}
          </div>
          {/* <div className='one-line'>
            {authData.length !== 0 ? <SignOut className='one-line' /> : null}
          </div> */}
          <h4 className='pl-4 pt-5'>Categories</h4>
          <Link to='/product/mens'>
            <h5>Mens</h5>
          </Link>
          <Link to='/product/womens'>
            <h5>Womens</h5>
          </Link>
          <Link to='/product/jewelery'>
            <h5>Jewellery</h5>
          </Link>
        </div>
      )}

      {state.sideNavState === SIDE_NAV_STATE.INACTIVE && (
        <div className='sidenav open-sidebar pl-3'>
          <GiHamburgerMenu onClick={openSideNav} />
        </div>
      )}
    </div>
  );
};

const mapStateProps = (state) => {
  console.log(state);

  if (state.sessionState.authUser !== null)
    return {
      authData: state.sessionState.authUser,
    };
  else
    return {
      authData: undefined,
    };
};

export default connect(mapStateProps)(SideNavBar);
