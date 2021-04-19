import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import pinkDress from './pink-dress.png';
import yellowJacket from './yellow-jacket.png';
import violetShirt from './violet-shirt.png';

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
      {state.sliderState === SLIDER_STATE.FIRST && (
        <>
          <div className='pt-65'>
            <div className='main center-hero'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <div className='circle4'></div>
              <div className='circle6'></div>
              <div className='circle7'></div>
              <div className='circle8'></div>
              <div className='circle9'></div>
              <div className='row'>
                <div className='col-sm-6 p-85 left-aling'>
                  <h1>Flaunting an exceptional look wherever you go.</h1>
                  <h2>Buy Trendy Clothes</h2>
                  <p className='pt-65'>
                    <strong>ATTIRE FUSION</strong> is your unique clothing store
                    for Stylish & Trendy clothes online. Shop from the most
                    exclusive collection.
                  </p>
                  <div className='button'>
                    <span>Shop Now </span>
                  </div>
                </div>
                <div className='col-sm-6 mt-0'>
                  <img src={pinkDress} alt='pink dress' width='408px' />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {state.sliderState === SLIDER_STATE.SECOND && (
        <>
          <div className='pt-65'>
            <div className='main-1 center-hero'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <div className='circle4'></div>
              <div className='circle6'></div>
              <div className='circle7'></div>
              <div className='circle8'></div>
              <div className='circle9'></div>
              <div className='row'>
                <div className='col-sm-6 p-85 left-aling'>
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
                <div className='col-sm-6 mt-0 right-align'>
                  <img src={yellowJacket} alt='pink dress' width='408px' />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {state.sliderState === SLIDER_STATE.THIRD && (
        <>
          <div className='pt-65'>
            <div className='main-2 center-hero'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <div className='circle4'></div>
              <div className='circle6'></div>
              <div className='circle7'></div>
              <div className='circle8'></div>
              <div className='circle9'></div>
              <div className='row'>
                <div className='col-sm-6 p-85 left-aling'>
                  <h1>Flaunting an exceptional look wherever you go.</h1>
                  <h2>Buy Trendy Clothes</h2>
                  <p className='pt-65'>
                    <strong>ATTIRE FUSION</strong> is your unique clothing store
                    for Stylish & Trendy clothes online. Shop from the most
                    exclusive collection.
                  </p>
                  <div className='button'>
                    <span>Shop Now </span>
                  </div>
                </div>
                <div className='col-sm-6 mt-0'>
                  <img src={violetShirt} alt='pink dress' width='408px' />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
