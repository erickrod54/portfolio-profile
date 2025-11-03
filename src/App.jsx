import { UpdatingPageComponent } from './pages/index.page.components'
import styled from 'styled-components'

/**Portfolio-erick - version 53.06 - Apps -
 * Features:
 * 
 *      --> Implementing 'ExperimentalUIWrapper'      
 * 
 * Notes: This 'UpdatingPageComponent' will render while
 * the migration is being performed, this App js is from
 * the new vite tooling - Having React + JS
 */


const ExperimentalUIWrapper = styled.div`
    height: 100vh; 
    width: 100vw;  
    margin: 0;     
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    background: linear-gradient(to bottom right, #1C1C1C, #0A0A0A);  
    /* Add for potential content overflow on small screens */
    overflow-y: auto; 

    /* Media query for smaller mobile screens (e.g., height < 600px) */
    @media (max-height: 600px) {
        /* Allow content to scroll if it doesn't fit in the viewport height */
        height: auto; 
        min-height: 100vh;
        /* Add some padding for better spacing around the edges */
        padding: 20px 0; 
    }
`;

function App() {

  return (
    <ExperimentalUIWrapper>
      <UpdatingPageComponent />
    </ExperimentalUIWrapper>
  )
}

export default App
