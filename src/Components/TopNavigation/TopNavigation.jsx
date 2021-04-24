import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavigation.css';
import logo from '../../asset/logo.png';
import Cart from '../Cart';
import { FaSearch } from 'react-icons/fa';
import SignInPopUp from '../SignIn/SignInPopUp';
import SignIn from '../SignIn/SignIn';

const TopNavigation = (props) => {
  // function signIn() {
  //   SignInPopUp.style.display = 'block';
  // }

  return (
    <div>
      <ul className='navigation'>
        <Link to='/'>
          <img src={logo} alt='' width='255px' />
        </Link>

        <Link to='/product/mens'>
          <li className='ml-10'>Mens</li>
        </Link>

        <Link to='/product/womens'>
          <li className='ml-10'>Womens</li>
        </Link>

        <Link to='/product/kids'>
          <li className='ml-10'>Kids</li>
        </Link>

        <div className='search-bar'>
          <FaSearch />
          <input placeholder='Search...' className='input-search-bar' />
        </div>

        <li className='ml-40'>
          <SignIn />
        </li>
        <li className='ml-10'>Sign Up</li>
        <Cart />
      </ul>
    </div>
  );
};

export default TopNavigation;
