import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './contexts/context.data.jsx'
import { IconsContextProvider } from './contexts/context.icons.data.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Auth0Provider } from '@auth0/auth0-react'

/**Portfolio-erick - version 55.02 - main js
 *  - Features:
 *  
 *      --> Implementing 'Auth0Provider' and secrets
 * 
 * Notes: This provider soon will be replaced with
 * the global provider
 */

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

const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;

if (!AUTH_DOMAIN || !AUTH_CLIENT_ID) {
    console.error('Auth0 enviroment variables not loaded, check your local .env')
}
const [{ name: title }, { name: canonical }, { name: href_url }] = HelmetData;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={AUTH_DOMAIN}
      clientId={AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri:window.location.origin + '/callback',
        scope:'openid profile email' 
      }}
    >
    <HelmetProvider>
      <Helmet>
        <title>{title} 👨🏾‍💻 {'{}'}</title>
        <link rel={canonical} href={href_url}/>
      </Helmet>
      <IconsContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </IconsContextProvider>
    </HelmetProvider>
    </Auth0Provider>
  </StrictMode>,
)
