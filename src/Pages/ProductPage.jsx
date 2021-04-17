import React from 'react';
import VioletShirt from './violet-shirt.png';
import PinkDress from './pink-dress.png';
import ItemCard from '../Components/ItemCard/ItemCard';

export default function ProductPage() {
  return (
    <div className='page-100'>
      <h4>Product Page</h4>
      <div className='ml-160'>
        <div className='row mr-0'>
          <div className='com-sm-3'>
            <ItemCard
              productName='Violet Cotton Shirt'
              productPrice='1200'
              productImage={VioletShirt}
            />
          </div>
          <div className='com-sm-3'>
            <ItemCard
              productName='Pink Cotton Kurti'
              productPrice='1599'
              productImage={PinkDress}
            />
          </div>
          <div className='com-sm-3'>
            <ItemCard
              productName='Violet Cotton Shirt'
              productPrice='1200'
              productImage={VioletShirt}
            />
          </div>
          <div className='com-sm-3'>
            <ItemCard
              productName='Pink Cotton Kurti'
              productPrice='1599'
              productImage={PinkDress}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
