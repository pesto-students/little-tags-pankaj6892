import React from 'react';
import {Link} from 'react-router-dom'
import './TopNavigation.css';
import logo from '../../asset/logo.png';
import Cart from '../Cart';
import {FaSearch} from 'react-icons/fa';
import Login from '../LoginPopup/LoginPopup';

const TopNavigation = (props) =>{

  return (
    <div>
      <ul className="navigation">

        <Link to="/">
          <img src={logo} alt="" width='255px'/>
        </Link>

        <Link to="/product?id=mens">
          <li className="ml-10">Mens</li>
        </Link>

        <Link to="/product?id=womens">
          <li className="ml-10">Womens</li>
        </Link>

        <Link to="/product?id=kids">
          <li className="ml-10">Kids</li>
        </Link>

        <div className="search-bar">
          <FaSearch />
          <input placeholder="Search..." className="input-search-bar"/>
        </div>       

        <li className="ml-10">Sign In</li>
        <li className="ml-10">Sign Up</li>
        <Cart />
      </ul>
    </div>
  )
}

export default TopNavigation;