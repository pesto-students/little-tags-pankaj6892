import React from 'react';
import VioletShirt from './violet-shirt.png';
import PinkDress from './pink-dress.png';
import ItemCard from '../Components/ItemCard/ItemCard';
import Sidebar from '../Components/Sidebar/Sidebar';
import Topbar from '../Components/Topbar/Topbar';

const ProductPage = (props) => {
  return (
    <div className='mt-64'>
      <div className='page-100 center pt-64'>
        <div className='ml-160'>
          <div className='row'>
            <div className='col-sm-2'>
              <Sidebar />
            </div>
            <div className='col-sm-8'>
              <Topbar />
              <div className='row'>
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
              <div className='row'>
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
