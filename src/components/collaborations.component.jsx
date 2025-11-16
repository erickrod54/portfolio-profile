import styled from "styled-components";

/**Portfolio-erick - version 54.14 - Collaborations Component - Features:
 * 
 *      --> Migrating 'Collaborations' to Vite
 * 
 * Notes: This component receives 'children' components
 */

const CollaborationsWrapper = styled.div` 
    display: flex;
    flex-direction: row; 
    
    /* 🔑 REDUCED EXTERNAL SPACE: Reduced margin and padding for a tighter fit */
    margin: 2rem auto; 
    padding: 2rem; 
    
    width: 70%;
    border: 1px solid white;
    border-radius: 0.50rem;

    > * {
      flex: 1;
      min-width: 0;
      /* 🔑 INCREASED SPACE BETWEEN CHILDREN: Increased margin for better separation */
      margin: 3rem; 
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center; 
        width: 90%; 
        
        /* Reduced margin and padding further for tight mobile space */
        margin: 1rem auto; 
        padding: 1rem;

        > * {
            flex: none; 
            max-width: 100%; 
            /* Ensure text-align is still center for mobile stacking */
            text-align: center; 
            /* Adjusted margin for mobile stacking separation */
            margin: 1.5rem 0;
        }
    }
`

const Collaborations = ({children}) => {

  return(
    <CollaborationsWrapper>
      {children}
    </CollaborationsWrapper>
 )
}

export default Collaborations;

