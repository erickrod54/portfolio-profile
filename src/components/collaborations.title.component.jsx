import styled from 'styled-components';
import {  AnimationWrapper } from '../styled-components/styled.components';

/**Portfolio-erick - version 32.09 - CollabTitle - Features:
 * 
 *      --> Renaming 'StyledWrapper' to 'CollabWrapper'   
 * 
 * Notes: 'CollabTitleData' is going to be placed where the 
 * 'CollabTitle' is going to consume it.
 */

const CollabTitle = ({title}) => {

  return (
    <CollabWrapper> 
      <AnimationWrapper>{title}</AnimationWrapper>
    </CollabWrapper>
  );
}

const CollabWrapper = styled.div`
`;

export default CollabTitle;

