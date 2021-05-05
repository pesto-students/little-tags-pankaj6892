import React from 'react';
// import { Home, Cart, Error, About, Product } from './Pages';
import Home from './pages/Home/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartPage from './pages/CartPage/CartPage';
import AddressPage from './pages/AddressPage/AddressPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
// import { Sidebar } from './components';
import TopNavigation from './components/TopNavigation/TopNavigation';
import withAuthentication from './components/Session/withAuthentication';
// import SignInPopUp from './components/SignIn/SignInPopUp';
import ItemPage from './components/ItemPage/ItemPage';

console.log(`API Key: ${process.env.REACT_APP_API_KEY}`);
function App() {
  return (
    <BrowserRouter>
      <TopNavigation />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          {/* <About /> */}
        </Route>
        <Route exact path='/cart'>
          <CartPage />
        </Route>
        <Route exact path='/address'>
          <AddressPage />
        </Route>
        <Route exact path='/signin'>
          {/* <SignInPopUp value='true' /> */}
        </Route>
        <Route exact path='/product/mens'>
          <ProductPage category="men's clothing" />
        </Route>
        <Route exact path='/product/womens'>
          <ProductPage category="women's clothing" />
        </Route>
        <Route exact path='/product/kids'>
          <ProductPage category='kids' />
        </Route>
        <Route exact path='/product'>
          <ProductPage />
        </Route>
        <Route exact path='/payment'>
          <PaymentPage />
        </Route>
        {/* <Route exact path='/product/:id' children={<ItemPage />}></Route> */}
        <Route exact path='/product/:id'>
          <ItemPage />
        </Route>
        <Route exact path='*'>
          {/* <Error /> */}
        </Route>
      </Switch>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default withAuthentication(App);
