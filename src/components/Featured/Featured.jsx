import React from 'react';
import './Featured.scss';
import HangingCloths from './hanging-cloths.jpg';
import Jeans from './jeans.jpg';
import Traditional from './traditional.jpg';
import Western from './western.jpg';
import { Link } from 'react-router-dom';

export default function FeatureProduct() {
  return (
    <div>
      <div className='featured-category'>
        <h1>Featured Categories</h1>
      </div>
      <div className='row mr-0'>
        <div className='col-sm-6'>
          <Link to='/product/mens'>
            <div className='horizontal-featured'>
              <img
                className='br-20 featured-img'
                src={HangingCloths}
                alt='hanging clothes'
                height='242px'
                width='100%'
              />
              <div className='horizontal-sub-featured'>
                <p className='featured-text'>T-Shirt</p>
              </div>
            </div>
          </Link>
          <Link to='/product/mens'>
            <div className='horizontal-featured'>
              <img
                className='br-20 featured-img'
                src={Jeans}
                alt='hanging clothes'
                height='242px'
                width='100%'
              />
              <div className='horizontal-sub-featured'>
                <p className='featured-text'>Jeans</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='col-sm-6 d-none d-sm-block'>
          <div className='row'>
            <div className='col-sm-6'>
              <Link to='/product/mens'>
                <div className='vertical-featured'>
                  <img
                    className='br-20 featured-img'
                    src={Traditional}
                    alt='hanging clothes'
                    height='560px'
                    width='110%'
                  />
                  <div className='horizontal-sub-featured-110'>
                    <p className='featured-text'>Mens</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className='col-sm-6 pl-0 d-none d-sm-block'>
              <Link to='/product/womens'>
                <div className='vertical-featured'>
                  <img
                    className='br-20 featured-img'
                    src={Western}
                    alt='hanging clothes'
                    height='560px'
                    width='110%'
                  />
                  <div className='horizontal-sub-featured-110'>
                    <p className='featured-text'>Womens</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
