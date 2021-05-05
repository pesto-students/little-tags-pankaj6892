import React, { useState, useEffect } from 'react';
import './SideNavBar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const SIDE_NAV_STATE = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

const SideNavBar = (props) => {
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
            <h3>X</h3>
          </div>
          <img
            src={logo}
            alt='attire fusion'
            height='50px'
            className='margin-up'
          />
          <h2 className='pl-4'>Categories</h2>
          <Link to='/product/mens'>Mens</Link>
          <Link to='/product/womens'>Womens</Link>
          <Link to='/product/kids'>Kids</Link>
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

export default SideNavBar;
