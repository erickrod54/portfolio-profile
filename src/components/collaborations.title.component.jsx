import styled from 'styled-components';

/**Portfolio-erick - version 21.12 - CollabTitle - Features:
 * 
 *      --> Migrating 'CollabTitleData'
 * 
 * Notes: 'CollabTitleData' is going to be placed where the 
 * 'CollabTitle' is going to consume it.
 */

const CollabTitle = ({title}) => {

  return (
    <StyledWrapper> 
      <div className="animation">{title}</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

.animation {
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
  -webkit-animation: typing 5s steps(13, end),
	           blink-caret .5s step-end infinite alternate;
}
`;

export default CollabTitle;

