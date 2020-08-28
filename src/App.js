import React from 'react';
import {Route} from 'react-router-dom';

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
      <HomePage />
    
    </div>
  );
}

export default App;
