import React from 'react';
import logo from '../asset/Logo.png'
import {Searchbar, Cart, Login} from './index'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../Pages/CSS_files/Header.css'
import {links} from '../utils/Constants'

export default function Header(){
return <div className="header-container">
    <button type="button" className="sidebar-icon"><FaBars /></button>
    <Link to="/">
    <img src={logo} className="App-logo" alt="logo" />
    </Link>
   
    <Searchbar />
    <ul className='nav-links'>
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
</div>
}