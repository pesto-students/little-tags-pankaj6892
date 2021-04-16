import React from 'react';
import {Home, Cart, Error, About, Product} from './Pages';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  {Sidebar, Footer} from './Components'
import TopNavigation from './Components/TopNavigation/TopNavigation';
import LoginPopup from './Components/LoginPopup/LoginPopup';


function App() {
  return (
   <BrowserRouter>
   <TopNavigation />
   <Sidebar />
    <Switch>
       <Route exact path="/"><Home /></Route>
       <Route exact path="/about"><About /></Route>
       <Route exact path="/cart"><Cart /></Route>
       <Route exact path="/login"><LoginPopup /></Route>
       <Route exact path="/product/mens"><Product /></Route>
       <Route exact path="/product/womens"><Product /></Route>
       <Route exact path="/product/kids"><Product /></Route>
       <Route exact path="/product"><Product /></Route>
       <Route exact path="*"><Error /></Route>
       {/* <Route exact path="/product/:id" children={<SingleProduct />}><About /></Route> */}
    </Switch>
    <Footer />
   </BrowserRouter>
  );
}

export default App;