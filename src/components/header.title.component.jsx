import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

/**Portfolio-erick - version 53.12 - HeaderTitle - Features:
 * 
 *      --> Adding grid-area to 'BackText' and 'FrontText'
 * 
 * Notes: Also adding styles to center from the parent 
 * component
 */

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

export const BackText = styled.span`
  grid-area: 1 / 1;
`

export const FrontText = styled.span`
    grid-area: 1 / 1;

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

const HeaderTitleWrapper = styled.div`
  display:flex;
  justify-content:center;
  padding-top: 4rem;
  }
`;

export const ButtonTitle = styled.button`
    display:grid;
    place-items:center;

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

const HeaderTitleData = '@erickdev';

const HeaderTitle = () => {
  const [isTextFilled, setIsTextFilled] = useState(true)
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
    <HeaderTitleWrapper ref={headerRef}>
      <ButtonTitle>
        <FrontText $isFilled={isTextFilled}>&nbsp;{HeaderTitleData}&nbsp;</FrontText>
        <BackText aria-hidden="true" >&nbsp;{HeaderTitleData}&nbsp;</BackText>
      </ButtonTitle>
    </HeaderTitleWrapper>
  );
};

  

export default HeaderTitle;