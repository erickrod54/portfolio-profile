import styled, { keyframes } from 'styled-components';

/**Portfolio-erick - version 54.14 - CollabTitle - Features:
 * 
 *      --> Migrating 'CollabTitle' to Vite   
 * 
 * Notes: 'CollabTitleData' is going to be placed where the 
 * 'CollabTitle' is going to consume it.
 */

const CollabWrapper = styled.div`

`;

const TypingKeyFrame = keyframes`
from{
  width:0;
}
`

const BlinkCaretKeyframe = keyframes`
  50% {
    border-color:transparent;
  }
`

const AnimationWrapper = styled.div`
  /* 1. Define the gradient as the background */
  background: linear-gradient(
    315deg,
    #ff0058, /* Pink/Red color */
    #03a9f4  /* Blue/Cyan color */
  );

  /* 2. Clip the background only where there is text */
  -webkit-background-clip: text;
  background-clip: text;

  /* 3. Make the foreground text color transparent so the background shows through */
  -webkit-text-fill-color: transparent;
  color: transparent; /* Fallback for non-webkit browsers */

  font: bold 200% Consolas, Monaco, monospace;

  /* The border-right will still be a solid color */
  border-right: .1em solid white; 

  /* You can adjust the width based on the number of characters in the text "Text writing!" (13 characters including space and exclamation) */
  width: 20ch; 
  margin: 2em auto; /* Centering horizontally */
  white-space: nowrap;
  overflow: hidden;

  /* Adjust steps(13, end) for 13 characters */
  -webkit-animation: ${TypingKeyFrame} 5s steps(13, end),
            ${BlinkCaretKeyframe} .5s step-end infinite alternate;
`

const CollabTitle = ({title}) => {

  return (
    <CollabWrapper> 
      <AnimationWrapper>{title}</AnimationWrapper>
    </CollabWrapper>
  );
}

export default CollabTitle;

