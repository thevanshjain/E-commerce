import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPage from './pages/Shop/Shop.component';
import HomePage from './pages/homepage/homepage-compo';
import Header from './Components/Header/Header-Component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up-component'
import CheckoutPage from './pages/checkout/checkout-component';

import {checkUserSession} from './redux/user/user-actions';
import { selectCurrentUser} from './redux/user/user-selector';

import {GlobalStyle} from './global.styles';
const App = ( { checkUserSession, currentUser }) =>  {
  
useEffect(()=> {
  checkUserSession();
}, [checkUserSession]);

  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact
         path='/signin'
        render={()=> 
        currentUser ? (
        <Redirect to='/' />
        ): (
          <SignInSignUp />
        )}
        />
        
      </Switch>
      
    
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});


const mapDispatchToProps = dispatch => ({
  checkUserSession: user => dispatch(checkUserSession(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps 
  )(App);
