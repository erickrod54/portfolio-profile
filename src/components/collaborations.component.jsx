import styled from "styled-components";
import { CollaborationsWrapper } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 31.17 - Collaborations Component - Features:
 * 
 *      --> Migrating 'CollaborationsWrapper'
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

