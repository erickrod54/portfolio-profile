import ProfileCard from './profile.card.component';
import { SocialComponent } from './index.components';
import { StyleProfileWrapper, StyleBneonCard, CardWrapper, StyledWrapper } from '../styled-components/styled.components.index';
import { useState } from 'react';

/**Portfolio-erick - version 15.06 - Card component -
* Features:

    -→> Building 'SocialHandler' 

* Notes: The isRevealed value is passed as a prop 
**/
const Card = () => {
  
  const [isRevealed, setIsReveal] = useState (true);

  const SocialHandler = () => {
    setIsReveal(!isRevealed);
  }
  
  return (
    <StyledWrapper>
      <CardWrapper>
        <StyleProfileWrapper onClick={SocialHandler}>
          <ProfileCard />      
        </StyleProfileWrapper>
          <StyleBneonCard />
        <SocialComponent  isRevealed={isRevealed}/>
      </CardWrapper>

    </StyledWrapper>
    
  );
}

export default Card;
