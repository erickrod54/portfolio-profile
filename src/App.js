import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
/**converting to a class component give us access to render method and contructor 
 * for state manipulation propuses
 */
constructor(){
  super();

  this.state = {
    string: 'Hello my name is Erick - this is the start on my portfolio'
  };
  }
render() {
  return(
    <div className="App">
      {/**attributtes like className, and OnClick are JSX attributes that mimick html attributes*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.string}
        </p>
        {/**this is a test for state manipulation
         * we change the value of p tag using a state
         */}
         <button onClick={() => this.setState({ string: 'doing click changes the prop string of the state'})}>Change text</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
