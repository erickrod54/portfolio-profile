import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PortfolioProvider } from './context';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Auth0Provider } from '@auth0/auth0-react';

/**Portfolio-erick - version 52.10 - index js file -
 * Features:
 * 
 *      --> Placing 'href_url' 
 * 
 * Notes: Curley braces make 'eighteenth_route' to be 
 * treated as an object, and what it cause an authentication
 * error
 */

const scopeData = 'openid profile email';

const HelmetData = [
  {
    name:'erickdev',
    placement:'title'
  },{
    name:'canonical',
    placement:'rel'
  },{
    name:'https://erickrod54.dev/',
    placement:'href'
  }
]

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const  auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const [{name:title}, {name:canonical}, { name: href_url }] = HelmetData;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      authorizationParams={{
        redirect_uri:window.location.origin + '/callback',
        scope:{scopeData}
      }}
    >
      <HelmetProvider>
        <Helmet>
          <title>{title} 👨🏾‍💻 {'{}'}</title>
          <link rel={canonical} href={href_url}/>
        </Helmet>
        <PortfolioProvider>
          < App />  
        </PortfolioProvider>
      </HelmetProvider>
    </Auth0Provider>
  </React.StrictMode>
);

