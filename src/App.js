import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage-compo';
import './App.css';

const HatPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatPage} />
      </Switch>
      
    
    </div>
  );
}

export default App;
