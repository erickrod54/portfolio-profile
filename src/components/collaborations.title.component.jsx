import styled from 'styled-components';
import {  AnimationWrapper } from '../styled-components/styled.components';

/**Portfolio-erick - version 32.08 - CollabTitle - Features:
 * 
 *      --> Clearing 'TypingKeyFrame'   
 * 
 * Notes: 'CollabTitleData' is going to be placed where the 
 * 'CollabTitle' is going to consume it.
 */

const CollabTitle = ({title}) => {

  return (
    <StyledWrapper> 
      <AnimationWrapper>{title}</AnimationWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
`;

export default CollabTitle;

