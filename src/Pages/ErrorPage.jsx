import React from 'react';
import error from '../asset/error.png'
import './style/ErrorPage.css'
import {Link} from 'react-router-dom'

export default function ErrorPage(){
return <div className='error-container'>

   <img src={error} alt="Error" />
    <Link to='/' className='home-btn'><h3>Back to Home </h3></Link>
</div>
}