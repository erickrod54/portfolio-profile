import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

/**Portfolio-erick - version 22.00 - HeaderTitle - Features:
 * 
 *      --> Removing 'isTextFilled' from StyledWrapper
 * 
 * Notes: This White space will be above '@erickdev' title
 * 'scrollToHeader' will handle to make '@erickdev' title
 * as the first visible element when the page loads
 */

const HeaderTitle = () => {
  const [isTextFilled, setIsTextFilled] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextFilled(false);
    }, 6000);

    // Scroll behavior to ensure @erickdev is top visible
    const scrollToHeader = () => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({
          behavior: 'instant', // use 'smooth' if you prefer animation
          block: 'start',
        });
      }
    };

    // Wait for the page layout to stabilize, then scroll
    const raf = requestAnimationFrame(scrollToHeader);
    const delay = setTimeout(scrollToHeader, 400);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      clearTimeout(delay);
    };
  }, []);

  return (
    <StyledWrapper ref={headerRef}>
      <ButtonTitle className="button" data-text="@erickdev">
        <FrontText $isFilled={isTextFilled}>&nbsp;@erickdev&nbsp;</FrontText>
        <span aria-hidden="true" className="front-text">&nbsp;@erickdev&nbsp;</span>
      </ButtonTitle>
    </StyledWrapper>
  );
};

const backgroundAnimation = keyframes`
  @keyframes {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 400%;
    }
    100% {
      background-position: 0%;
    }
`



const FrontText = styled.span`
position: absolute;
top: 0;
left: 0;
width: 0%;
background: var(--color-gar);
-webkit-background-clip: text;
background-clip: text;
background-size: 200%;
overflow: hidden;
transition: all 1s;
animation: ${backgroundAnimation} 8s infinite;
border-bottom: 2px solid transparent;

${props =>
  props.$isFilled &&
  css`
  width: 100%;
  border-bottom: 2px solid #03a9f4;
  -webkit-text-stroke: 1px var(--ani-color);
  `}
  
  
  `

  const ButtonTitle = styled.button`
    position: relative;
    border: none;
    background: transparent;
    --stroke-color: #ffffff7c;
    --ani-color: rgba(95, 3, 244, 0);
    --color-gar: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    letter-spacing: 3px;
    font-size: 2em;
    font-family: "Arial";
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--stroke-color);
    cursor: pointer;
  
  
    &:hover ${FrontText} {
      width: 100%;
      border-bottom: 2px solid #03a9f4;
      -webkit-text-stroke: 1px var(--ani-color);
    }
  `
  
  const StyledWrapper = styled.div`
  padding-top: 4rem;
  
  }
`;

export default HeaderTitle;