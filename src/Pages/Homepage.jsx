import React from 'react';
import Hero from '../Components/Hero'
// import Header from '../Components/Header'
import FeatureProduct from '../Components/FeatureProduct'
import './CSS_files/HomepageStyle.css'
// import { Header } from '../Components';

function Homepage(){
return <div className="homepage-container page-100">
    
    <Hero />
    <FeatureProduct />
   
   
</div>
}

export default Homepage;