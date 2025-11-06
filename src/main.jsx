import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './context.data.jsx'
       
/**Portfolio-erick - version 53.13 - main jsx
 *  - Features:
 *  
 *      --> Wrapping  with 'DataContextProvider'.
 * 
 * Notes: This provider soon will be replaced with
 * the global provider
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </StrictMode>,
)
