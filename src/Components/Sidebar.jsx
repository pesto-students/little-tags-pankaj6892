import React from "react";
import { FaTimesCircle } from 'react-icons/fa'
import logo from '../asset/logo.png'
import { Cart, Login } from './index'
import { links } from "../utils/Constants";
import {Link} from 'react-router-dom'
import '../Pages/style/Sidebar.css'

export default function Sidebar() {
  const isOpen = false;
  return (
    <div className='sidebar-container'>
      <aside className={`${isOpen ? 'sidebar show-sidebar' : ' sidebar'}`}>
        <div className="sidebar-header">
          <img src={logo} className='logo' alt="Attire-fusion" />
          <button className='close-btn' type='button'>
            <FaTimesCircle />
          </button>
        </div>
        <ul className='links'>
        {links.map((link)=>{
            const {id, text,url}=link
            return (
                <li key={id}>
                    <Link to={url}>{text}</Link>
                </li>
            )
        })}
    </ul>
        <Cart />
        <Login />
      </aside>
    </div>
  );
}
