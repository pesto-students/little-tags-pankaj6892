import React from 'react';
import Hero from '../../components/Hero/Hero';
import Featured from '../../components/Featured/Featured';

const Home = (props) => {
  return (
    <div className='page-min-height'>
      <Hero />
      <Featured />
    </div>
  );
};

export default Home;
