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
      currentUser: null,
      isTheuser: false
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        /**onSnapshot is 
         * similar to onAuthStateChange method, 
         * onSnapshot request the data stored in
         * firebase database so i can use it,
         * i have to use the method .data() to 
         * watch the data the way i want*/
        userRef.onSnapshot( snapShot => {
         /** if i do it this way  
          * console.log(snapShot.data()) will show me
          * the object without an id, so i have to build
          * a new object to mix uid property from snapShot
          * DocumentReference and snapShot.data() */
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => { 
            if(this.state.currentUser.id === 'QGKpKECHBNhXalC5ahL4n0wVbZ43'){
              this.state.isTheuser = true
            }else{
              return null;
            } 
            console.log('inside the second argument setState currentUser:',this.state.isTheuser)
            
          })
               
        })
        
      }

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
          {console.log('this is in render method',  this.state.isTheuser)}
          <Route exact path='/' component={HomePage}/>
          {/**i have to use redirect component, pending */}
          <Route  path='/dashboard' component={DashBoard}/>
          <Route  path='/sign-in-page' component={SignInPage}/>
        </Switch>
      </div>
    );
  }
  
}


export default App;
