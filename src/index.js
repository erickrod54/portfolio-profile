import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider  } from 'react-redux';
import './index.css';
import App from './App';

import store from './redux/store';
/**store is where is the middleware where we store
 * the root-reducer (is where the state gonna live)
 */
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<Provider store={store}>{/**i wrap around the whole app
 *inside this store object called Provider from react redux
 to provide all the things related to the store and state
 acorss the app*/}  
<BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</BrowserRouter>
</Provider>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
