import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { Helmet } from 'react-helmet';

/**Portfolio-erick - version 3 - index js - Features:
 * 
 *      --> Importing 'Helmet' to set a 'title' to
 *          my portfolio, and a 'meta' tag.
 * 
 * Notes: The meta tag is super important for SEO
 * purposes editing 'href' and 'content'.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <Helmet>
          <meta charSet="utf-8" />
          <title>Erick Rodriguez - Portfolio</title>
          <link rel="canonical" href="https://erickrod.netlify.app/" />
          <meta name="description" content="Erick Rodriguez portfolio with my job background information and current work and projects"></meta>
      </Helmet>
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
  </>
);


