import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavigation.scss';
import logo from '../../logo.png';
import Cart from '../Cart/Cart';
import { FaSearch } from 'react-icons/fa';
import SignInPopUp from '../SignIn/SignInPopUp';
import { SignOut } from '../SignIn/SignIn';
import { connect } from 'react-redux';
import SideNavBar from '../SideNavBar/SideNavBar';

const TopNavigation = ({ authData = [] }) => {
  return (
    <div>
      <div className='row navigation text-justify'>
        <div className='col-sm-4 p-2'>
          <div className='row'>
            <div className='col-sm-1 col-1 pt-sm-2 pt-1'>
              <SideNavBar />
            </div>
            <div className='col-sm-4 col-4'>
              <Link to='/'>
                <img
                  src={logo}
                  alt='logo'
                  width='150px'
                  className='d-none d-sm-block'
                />
                <img
                  src={logo}
                  alt='logo'
                  width='100px'
                  className='d-block d-sm-none'
                />
              </Link>
            </div>
            <div className='col-sm-2 col-2 pt-sm-2 pt-1 d-none d-sm-block'>
              <Link to='/product/mens'>Mens</Link>
            </div>
            <div className='col-sm-2 col-3 pt-sm-2 pt-1 d-none d-sm-block'>
              <Link to='/product/womens'>Womens</Link>
            </div>
            <div className='col-sm-2 col-2 pl-4 pt-sm-2 pt-1 text-right d-none d-sm-block'>
              <Link to='/product/jewelery'>Jewellery</Link>
            </div>
          </div>
        </div>
        <div className='col-sm-4 search-bar'>
          <FaSearch />
          <input placeholder='Search...' className='input-search-bar' />
        </div>

        <div className='col-sm-2 d-none d-sm-block text-right'>
          {authData.length !== 0 ? (
            <>
              <img
                src={authData.displayPicture}
                alt=''
                width='40px'
                className='profile-pic'
              />
              {authData.username}
            </>
          ) : (
            <SignInPopUp />
          )}
        </div>
        <div className='col-sm-1 d-none d-sm-block'>
          {authData.length !== 0 ? <SignOut /> : null}
        </div>
        <div className='col-sm-1 text-right'>
          <Cart />
        </div>
      </div>
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

export default connect(mapStateProps)(TopNavigation);
