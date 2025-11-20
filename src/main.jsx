import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './contexts/context.data.jsx'
import { IconsContextProvider } from './contexts/context.icons.data.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'
   
/**Portfolio-erick - version 55.00 - main js
 *  - Features:
 *  
 *      --> Implementing 'Helmet' on root directory
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

const [{ name: title }, { name: canonical }, { name: href_url }] = HelmetData;

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
  </StrictMode>,
)
