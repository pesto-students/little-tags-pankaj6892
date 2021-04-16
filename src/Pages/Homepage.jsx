import React from 'react';
import Hero from '../Components/Hero/Hero';
import './style/HomepageStyle.css';
import Featured from '../Components/Featured/Featured';

function Homepage() {
  return (
    <div>
      <Hero />
      <Featured />
    </div>
  );
}

export default Homepage;
