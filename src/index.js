import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { eighteenth_route } from './App';
import { PortfolioProvider } from './context';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Auth0Provider } from '@auth0/auth0-react';

/**Portfolio-erick - version 51.19 - index js file -
 * Features:
 * 
 *      --> Placing 'scopeData'
 * 
 * Notes: Is pending to make a data structure to hold Helmet 
 * data and also develop a meta tag.
 */

const scopeData = 'openid profile email';

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const  auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      authorizationParams={{
        redirect_uri:window.location.origin + {eighteenth_route},
        scope:{scopeData}
      }}
    >
      <HelmetProvider>
        <Helmet>
          <title>erickdev 👨🏾‍💻 {'{}'}</title>
          <link rel='canonical' href='https://erickrod54.dev/'/>
        </Helmet>
        <PortfolioProvider>
          < App />  
        </PortfolioProvider>
      </HelmetProvider>
    </Auth0Provider>
  </React.StrictMode>
);

