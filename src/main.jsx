import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './context.data.jsx'
import { IconsContextProvider } from './context.icons.data.jsx'
       
/**Portfolio-erick - version 53.15 - main js
 *  - Features:
 *  
 *      --> Wrapping  with 'IconsContextProvider'.
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
