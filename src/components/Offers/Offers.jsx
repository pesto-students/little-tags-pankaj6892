import React from 'react';
import './Offers.scss';
import Offer1 from './offer_1.png';
import Offer2 from './offer_2.png';

const Offers = (props) => {
  return (
    <div className='offer-category'>
      <img src={Offer2} alt='' width='205px' />
      <img src={Offer1} alt='' width='220px' />
    </div>
  );
};

export default Offers;
