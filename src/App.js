import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const DashBoard = () => (
  <div>
    <h1>Dashboard Page</h1>
  </div>
);

function App(){
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route path='/dashboard' component={DashBoard}/>
    </div>
  );
}


export default App;
