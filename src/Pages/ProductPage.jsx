import React from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';

export default function ProductPage() {
  return (
    <div className='page-100'>
      <h4>Product Page</h4>
      <div className='ml-160'>
        <div className='row mr-0'>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
        </div>
        <div className='row '>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
        </div>
        <div className='row mr-0'>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
        </div>
        <div className='row mr-0'>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
          <div className='com-sm-3'>
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
