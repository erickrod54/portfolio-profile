import React from 'react';
import { Switch, Route } from 'react-router-dom';
/**importing switch and route component to start using react-router-dom functionality 
for navigation */

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import DashBoard from './pages/dashboard/dashboard.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

/**Header component is placed above Switch 
 * component, with the purpose  of maintain 
 * header across all the pages*/
class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    })
  }

  render(){
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/dashboard' component={DashBoard}/>
          <Route path='/sign-in-page' component={SignInPage}/>  
        </Switch>
      </div>
    );
  }
}


export default App;
