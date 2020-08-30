import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/Shop/Shop.component';
import HomePage from './pages/homepage/homepage-compo';
import Header from './Components/Header/Header-Component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up-component'
import {auth} from './firebase/firebase.util';
import './App.css';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null 
    }
  }

unsubscribeFromAuth = null



componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
  this.setState({currentUser: user});

  console.log(user);
})
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
      
    
    </div>
  );
}}

export default App;
