//import ProfileCard from './profile.card.component';
//import { SocialComponent } from './index.components';
import { useState } from 'react';
import styled from 'styled-components';

/**Portfolio-erick - version 53.07 - Card component -
* Features:

    -→> Mgrating Card to Vite + React

* Notes: The next components to migrate will be 
*  ProfileCard, and SocialComponent, by now 
* they will remain commented.
**/

export const StyleBneonCard = styled.b`

`

const StyleProfileWrapper = styled.div`
  position: relative;
  z-index:4
`

const StyledWrapper = styled.div`
  div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

  }
`;

const CardWrapper = styled.div`
    position: relative;
    width: 90vw;
    max-width:450px;
    min-height:450px;
    heigth:auto;
    background: #f00;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    padding: 40px;
    box-sizing:border-box;
    background: #f00; /* This color might be temporary */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; /* Suggesting a pointer to indicate clickability */

    @media (max-width: 480px) {
        /* Introduce the white space (margin) you requested */
        width: calc(100vw - 40px); /* 100% width minus 20px padding on each side */
        margin: 20px 20px; /* 20px margin all around for white space */
        height: calc(100vw - 40px); /* Keep it square, matching the new constrained width */
        min-height:450px;        
        /* Ensure content doesn't get squeezed too small */
        min-width: 300px;
    }

 
    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(315deg,#03a9f4,#ff0058);    
    }
  
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(315deg,#03a9f4,#ff0058);
      filter: blur(30px);
    }

    b {
      position:absolute;
      inset:6px;
      background:rgba(0, 0, 0 ,0.6);
      z-index: 2;
    }
`

const Card = () => {
  
  const [isRevealed, setIsReveal] = useState (true);

  const SocialHandler = () => {
    setIsReveal(!isRevealed);
  }
  
  return (
    <StyledWrapper>
      <CardWrapper>
        <StyleProfileWrapper onClick={SocialHandler}>
          {/*<ProfileCard />*/}      
        </StyleProfileWrapper>
          <StyleBneonCard />
        {/**<SocialComponent  isRevealed={isRevealed}/>*/}
      </CardWrapper>

    </StyledWrapper>
    
  );
}

export default Card;
