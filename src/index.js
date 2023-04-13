import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PortfolioProvider } from './context';

/**Portfolio-erick - version 6.06 - index js file -
 * Features:
 * 
 *      --> Wrapping the App with the provider
 * 
 * Notes: This file is gonna be changed later.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortfolioProvider>
    < App />
    </PortfolioProvider>
  </React.StrictMode>
);

