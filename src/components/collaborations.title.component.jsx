import styled from 'styled-components';
import { TypingKeyFrame, AnimationWrapper } from '../styled-components/styled.components';

/**Portfolio-erick - version 32.07 - CollabTitle - Features:
 * 
 *      --> Clearing 'BlinkCaretKeyframe'   
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

