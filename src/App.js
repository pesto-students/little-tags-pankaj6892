import React from 'react';
import {Home, Cart, Error, About, Product,Login} from './Pages';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import  {Header, Sidebar, Footer} from './Components'

function App() {
  return (
   <BrowserRouter>
   <Header />
   <Sidebar />
    <Switch>
       <Route exact path="/"><Home /></Route>
       <Route exact path="/about"><About /></Route>
       <Route exact path="/cart"><Cart /></Route>
       <Route exact path="/login"><Login /></Route>
       <Route exact path="/product"><Product /></Route>
       <Route exact path="*"><Error /></Route>
       {/* <Route exact path="/product/:id" children={<SingleProduct />}><About /></Route> */}
    </Switch>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
