import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PortfolioProvider } from './context';
import { Helmet, HelmetProvider } from 'react-helmet-async';

/**Portfolio-erick - version 16.02 - index js file -
 * Features:
 * 
 *      --> Adding Helmet for SEO and custom props
 * 
 * Notes: Is pending to make a data structure to hold Helmet 
 * data and also develop a meta tag.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>erickdev 👨🏾‍💻 {'{}'}</title>
        <link rel='canonical' href='https://erickrod54.dev/'/>
      </Helmet>
      <PortfolioProvider>
        < App />  
      </PortfolioProvider>
    </HelmetProvider>
  </React.StrictMode>
);

