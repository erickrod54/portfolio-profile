import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { BackText, backgroundAnimation } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 38.18 - HeaderTitle - Features:
 * 
 *      --> Migrating 'backgroundAnimation'
 * 
 * Notes: None of your current CSS or styled components 
 * are referencing or using the data-text attribute
 */


const HeaderTitleData = '@erickdev';

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
      <ButtonTitle>
        <FrontText $isFilled={isTextFilled}>&nbsp;{HeaderTitleData}&nbsp;</FrontText>
        <BackText aria-hidden="true" >&nbsp;{HeaderTitleData}&nbsp;</BackText>
      </ButtonTitle>
    </StyledWrapper>
  );
};

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