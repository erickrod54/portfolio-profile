import ProfileCard from './profile.card.component';
import { SocialComponent } from './index.components';
import { StyleProfileWrapper, StyleBneonCard, CardWrapper, StyledWrapper } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 11.02 - Card component -
* Features:

    -→> Clearing 'styled'

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

export default Card;
