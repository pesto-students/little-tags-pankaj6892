import React , {useEffect, useState, useRef} from 'react';
import './Hero.css';
import pinkDress from "./pink-dress.png";
import yellowJacket from "./yellow-jacket.png";
import violetShirt from "./violet-shirt.png";

const SLIDER_STATE = {
  FIRST: 'first',
  SECOND: 'second',
  THIRD: 'third',
}


const Hero = () =>{
  
  const i=useRef(2);

  const [state, setState] = useState({
    sliderState: SLIDER_STATE.FIRST
  })

//   function dot1Change(){
//     setState({
//       ...state,
//       sliderState: SLIDER_STATE.FIRST
//     })
//   }

//   function dot2Change(){
//     setState({
//       ...state,
//       sliderState: SLIDER_STATE.SECOND
//     })
//   }

//   function dot3Change(){
//     setState({
//       ...state,
//       sliderState: SLIDER_STATE.THIRD
//     })
//   }

  useEffect(() => {
    //eslint-disable-next-line
    const timer = setTimeout(() => {
      if(i.current%3===1){
        setState({
          ...state,
          sliderState: SLIDER_STATE.FIRST
        })
      }
      if(i.current%3===2){
        setState({
          ...state,
          sliderState: SLIDER_STATE.SECOND
        })
      }
      if(i.current%3===0){
        setState({
          ...state,
          sliderState: SLIDER_STATE.THIRD
        })
      }

      i.current += 1;
      
    }, 5000);
  });

  return (
    <div>
      {
        state.sliderState === SLIDER_STATE.FIRST &&
        <>
      <div>
        
        <div className="main center">
          
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle6"></div>
          <div className="circle7"></div>
          <div className="circle8"></div>
          <div className="circle9"></div>
          <div className="row">
            <div className="col-sm-6 p-85 left-aling">
              <h1>Flaunting an exceptional look wherever you go.</h1>
              <h2>Buy Trendy Clothes</h2>
              
              <p className="pt-65"><strong>ATTIRE FUSION</strong> is your unique clothing store for Stylish & Trendy clothes online. Shop from the most exclusive collection.</p>

              <div className="button"><span>Shop Now </span></div>
            </div>
            <div className="col-sm-6 mt-0">
              <img src={pinkDress} alt="pink dress" width="570px"/>
            </div>
            
          </div>
          
          </div>
          {/* <div className="dot1" onClick={dot1Change}></div>
          <div className="dot2" onClick={dot2Change}></div>
          <div className="dot3" onClick={dot3Change}></div> */}

      </div>
      </>
      }
      {
        state.sliderState === SLIDER_STATE.SECOND &&
        <>
      <div>
          
        <div className="main-1 center">
          
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle6"></div>
          <div className="circle7"></div>
          <div className="circle8"></div>
          <div className="circle9"></div>
          <div className="row">
            <div className="col-sm-6 p-85 left-aling">
              <h1>Shop from a variety of Styles</h1>
              <h2>Check from a list of varities</h2>
              
              <p className="pt-65"><strong>ATTIRE FUSION</strong> is your unique clothing store for Stylish & Trendy clothes online. Shop from the most exclusive collection.</p>

              <div className="button"><span>See Varities </span></div>
            </div>
            <div className="col-sm-6 mt-0 right-align">
              <img src={yellowJacket} alt="pink dress" width="470px"/>
            </div>
            
          </div>
          {/* <div className="dot1" onClick={dot1Change}></div>
          <div className="dot2" onClick={dot2Change}></div>
          <div className="dot3" onClick={dot3Change}></div> */}
          
          </div>
          

      </div>
      </>
      }
      {
        state.sliderState === SLIDER_STATE.THIRD &&
        <>
      <div>
        
        <div className="main-2 center">
          
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle6"></div>
          <div className="circle7"></div>
          <div className="circle8"></div>
          <div className="circle9"></div>
          <div className="row">
            <div className="col-sm-6 p-85 left-aling">
              <h1>Flaunting an exceptional look wherever you go.</h1>
              <h2>Buy Trendy Clothes</h2>
              
              <p className="pt-65"><strong>ATTIRE FUSION</strong> is your unique clothing store for Stylish & Trendy clothes online. Shop from the most exclusive collection.</p>

              <div className="button"><span>Shop Now </span></div>
            </div>
            <div className="col-sm-6 mt-0">
              <img src={violetShirt} alt="pink dress" width="470px"/>
            </div>
            
          </div>
          
          </div>
          {/* <div className="dot1" onClick={dot1Change}></div>
          <div className="dot2" onClick={dot2Change}></div>
          <div className="dot3" onClick={dot3Change}></div> */}

      </div>
      </>
      }
    </div>
  )
}

export default Hero;