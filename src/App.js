import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/Shop/Shop.component';
import HomePage from './pages/homepage/homepage-compo';
import Header from './Components/Header/Header-Component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up-component'
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
      
    
    </div>
  );
}

export default App;
