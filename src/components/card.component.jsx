import styled from 'styled-components';
import ProfileCard from './profile.card.component';
import { SocialComponent } from './index.components';
import { StyleProfileWrapper, StyleBneonCard, CardWrapper } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 11.00 - Card component -
* Features:

    -→> Migrating 'CardWrapper'

* Notes: Migrating style components 
**/

const Card = () => {
  return (
    <StyledWrapper>
      <CardWrapper>
        <StyleProfileWrapper>
          <ProfileCard />      
        </StyleProfileWrapper>
          <StyleBneonCard />
        <SocialComponent />
      </CardWrapper>

    </StyledWrapper>
    
  );
}

const StyledWrapper = styled.div`
div{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

}

  
  `;

export default Card;
