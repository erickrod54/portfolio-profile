import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './contexts/context.data.jsx'
import { IconsContextProvider } from './contexts/context.icons.data.jsx'
       
/**Portfolio-erick - version 53.17 - main js
 *  - Features:
 *  
 *      --> Changing imports directory.
 * 
 * Notes: This provider soon will be replaced with
 * the global provider
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IconsContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </IconsContextProvider>
  </StrictMode>,
)
