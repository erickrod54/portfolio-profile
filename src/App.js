import React from 'react';
import { Switch, Route } from 'react-router-dom';
/**importing switch and route component to start using react-router-dom functionality 
for navigation */

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import DashBoard from './pages/dashboard/dashboard.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

unsubscribeFromAuth = null


/**with yhis lifecycle method i made an 
 * open suscription - open message system
 * beteen the profile and firebase
 * (user session persistance), and i
 * closed it with unsubscribeFromAuth
*/
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      createUserProfileDocument(user)

      console.log(user)
    });
  }

  /**when unmount the app, i 
   * call unsubcribeFromAuth */
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        {/**pass current user to the header 
         * to track the log in with the header */}
      <Header currentUser={this.state.currentUser}/>
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
