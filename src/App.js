
import './App.css';
import { Component } from 'react';


class App extends Component {
/**converting to a class component give us access to render method and contructor 
 * for state manipulation propuses
 */
constructor(){
  super();

  this.state = {
    message: 'Hello my name is Erick - this is the start on my portfolio'
  };
  }
render() {
  return(
    <div>
      <p>Hello my name is Erick - this is the start on my portfolio</p>
    </div>
  );
}
}

export default App;
