import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './contexts/context.data.jsx'
import { IconsContextProvider } from './contexts/context.icons.data.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from './contexts/context.theme.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

/**Portfolio-erick - version 57.08 - main js
 *  - Features:
 *  
 *      --> Adding 'QueryClient' and 'QueryClientProvider' 
 * 
 * Notes: The query client and query provider in order to let 
 * react query use the data provider 'data bridge' ( this is 
 * part of the react query to provide the data directly to the 
 * PDF component )
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

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <IconsContextProvider>
            <DataContextProvider>
              <App />
            </DataContextProvider>
          </IconsContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
    </Auth0Provider>
  </StrictMode>,
)
