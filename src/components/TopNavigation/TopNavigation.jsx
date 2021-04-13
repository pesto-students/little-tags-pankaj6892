import React from 'react';
import './TopNavigation.scss';
import logo from '../../logo.svg';

const TopNavigation = (props) =>{

  return (
    <div>
      <ul className="navigation">
        <li><img src={logo} alt="" width='75px'/></li>
      </ul>
    </div>
  )
}

export default TopNavigation;