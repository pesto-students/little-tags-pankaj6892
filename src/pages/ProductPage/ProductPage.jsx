import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Product from '../../components/Product/Product';
import './ProductPage.scss';

const ProductPage = (props) => {
  return (
    <div className='mt-64 page-min-height'>
      <div className='page-100 center pt-64'>
        <div>
          <div className='row mr-0'>
            <div className='col-sm-2'>
              <Sidebar />
            </div>
            <div className='col-sm-8'>
              <div className='row'>
                <Product category={props.category} />
              </div>
            </div>
            <div className='col-sm-2'>
              <h1>Offer Section</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
