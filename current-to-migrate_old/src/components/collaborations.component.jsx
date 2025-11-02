import { CollaborationsWrapper } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 31.18 - Collaborations Component - Features:
 * 
 *      --> Clearing 'Styled'
 * 
 * Notes: This component receives 'children' components
 */


const Collaborations = ({children}) => {

  return(
    <CollaborationsWrapper>
      {children}
    </CollaborationsWrapper>
 )
}

export default Collaborations;

