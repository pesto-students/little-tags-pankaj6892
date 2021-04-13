import React from "react";
import {FaUserPlus} from 'react-icons/fa'
import '../Pages/CSS_files/LoginButton.css'
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <div>
    <Link to='/login' className='auth-btn'>
      Login
     <FaUserPlus />
     </Link>
    </div>
  );
}

