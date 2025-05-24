import styled from "styled-components";

/**Portfolio-erick - version 21.00 - Collaborations Component - Features:
 * 
 *      --> Building 'Collaborations'
 * 
 * Notes: This component receives 'children' components
 */

const CollaborationsWrapper = styled.div` 
    display:flex;
    margin:4rem;
    padding:4rem;
    width:70%;
    border: 1px solid white;
    border-radius:0.50rem;

    > * {
      flex:1;
      min-width:0;
     
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content:center;
        align-items:center;
        width: 90%; /* Increase width to fill more of the mobile screen */
        margin: 2rem auto; /* Center the wrapper and reduce vertical margin */
        padding: 4rem 1rem;

        > * {
            /* On column layout, flex: 1 makes the items take up full width */
            flex: none; /* Reset flex-grow so children take up only necessary height */
            max-width: 100%; /* Ensure children take full available width */
            margin: 1rem 0;
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

