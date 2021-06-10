import React, { useEffect, useState, useRef } from 'react';
import './Hero.scss';
import pinkDress from './pink-dress.png';
import yellowJacket from './yellow-jacket.png';
import violetShirt from './violet-shirt.png';
import { Link } from 'react-router-dom';

const SLIDER_STATE = {
  FIRST: 'first',
  SECOND: 'second',
  THIRD: 'third',
};

const Hero = () => {
  const i = useRef(2);

  const [state, setState] = useState({
    sliderState: SLIDER_STATE.FIRST,
  });

  useEffect(() => {
    //eslint-disable-next-line
    const timer = setTimeout(() => {
      if (i.current % 3 === 1) {
        setState({
          ...state,
          sliderState: SLIDER_STATE.FIRST,
        });
      }
      if (i.current % 3 === 2) {
        setState({
          ...state,
          sliderState: SLIDER_STATE.SECOND,
        });
      }
      if (i.current % 3 === 0) {
        setState({
          ...state,
          sliderState: SLIDER_STATE.THIRD,
        });
      }

      i.current += 1;
    }, 10000);
  });

  return (
    <div>
      <div>
        {state.sliderState === SLIDER_STATE.FIRST && (
          <>
            <div className='pthero-100'>
              <div className='main center-hero'>
                <div className='circle1 d-none d-sm-block'></div>
                <div className='circle2 d-none d-sm-block'></div>
                <div className='circle3 d-none d-sm-block'></div>
                <div className='circle4 d-none d-sm-block'></div>
                <div className='circle6 d-none d-sm-block'></div>
                <div className='circle7 d-none d-sm-block'></div>
                <div className='circle8 d-none d-sm-block'></div>
                <div className='circle9 d-none d-sm-block'></div>
                <div className='row'>
                  <div className='col-sm-6 p-85 left-aling'>
                    <h1>Flaunting an exceptional look wherever you go.</h1>
                    <h2>Buy Trendy Clothes</h2>
                    <p className='pt-65'>
                      <strong>ATTIRE FUSION</strong> is your unique clothing
                      store for Stylish & Trendy clothes online. Shop from the
                      most exclusive collection.
                    </p>
                    <Link to='/product'>
                      <div className='button'>
                        <span>Shop Now </span>
                      </div>
                    </Link>
                  </div>
                  <div className='col-sm-6 mt-0 d-none d-sm-block'>
                    <img src={pinkDress} alt='pink dress' width='408px' />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {state.sliderState === SLIDER_STATE.SECOND && (
          <>
            <div className='pthero-100'>
              <div className='main-1 center-hero'>
                <div className='circle1 d-none d-sm-block'></div>
                <div className='circle2 d-none d-sm-block'></div>
                <div className='circle3 d-none d-sm-block'></div>
                <div className='circle4 d-none d-sm-block'></div>
                <div className='circle6 d-none d-sm-block'></div>
                <div className='circle7 d-none d-sm-block'></div>
                <div className='circle8 d-none d-sm-block'></div>
                <div className='circle9 d-none d-sm-block'></div>
                <div className='row'>
                  <div className='col-sm-6 p-85 left-aling'>
                    <h1>Shop from a variety of Styles</h1>
                    <h2>Check from a list of varities</h2>
                    <p className='pt-65'>
                      <strong>ATTIRE FUSION</strong> is your unique clothing
                      store for Stylish & Trendy clothes online. Shop from the
                      most exclusive collection.
                    </p>
                    <Link to='/product'>
                      <div className='button'>
                        <span>See Varities </span>
                      </div>
                    </Link>
                  </div>
                  <div className='col-sm-6 mt-0 right-align d-none d-sm-block'>
                    <img src={yellowJacket} alt='pink dress' width='408px' />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {state.sliderState === SLIDER_STATE.THIRD && (
          <>
            <div className='pthero-100'>
              <div className='main-2 center-hero'>
                <div className='circle1 d-none d-sm-block'></div>
                <div className='circle2 d-none d-sm-block'></div>
                <div className='circle3 d-none d-sm-block'></div>
                <div className='circle4 d-none d-sm-block'></div>
                <div className='circle6 d-none d-sm-block'></div>
                <div className='circle7 d-none d-sm-block'></div>
                <div className='circle8 d-none d-sm-block'></div>
                <div className='circle9 d-none d-sm-block'></div>
                <div className='row'>
                  <div className='col-sm-6 p-85 left-aling'>
                    <h1>Flaunting an exceptional look wherever you go.</h1>
                    <h2>Buy Trendy Clothes</h2>
                    <p className='pt-65'>
                      <strong>ATTIRE FUSION</strong> is your unique clothing
                      store for Stylish & Trendy clothes online. Shop from the
                      most exclusive collection.
                    </p>
                    <Link to='/product'>
                      <div className='button'>
                        <span>Shop Now </span>
                      </div>
                    </Link>
                  </div>
                  <div className='col-sm-6 mt-0 d-none d-sm-block'>
                    <img src={violetShirt} alt='pink dress' width='408px' />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* <div className='d-block d-sm-none'>
        <div className='mt-5'>
          <div className='main-3'>
            <div className='row ml-0 mr-0'>
              <div className='col-sm-12 p-5'>
                <h1>Shop from a variety of Styles</h1>
                <h2>Check from a list of varities</h2>
                <p className='pt-65'>
                  <strong>ATTIRE FUSION</strong> is your unique clothing store
                  for Stylish & Trendy clothes online. Shop from the most
                  exclusive collection.
                </p>
                <div className='button'>
                  <span>See Varities </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
