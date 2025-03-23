import styled from 'styled-components';
import ProfileCard from './profile.card.component';
import { SocialComponent } from './index.components';
import { StyleProfileWrapper, StyleBneonCard } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 10.20 - Card component -
* Features:

    -→> Migrating 'img' styles to be scoped on
        'AvatarPicture' giving full control over
        'img' effects 

* Notes: this new scope solve the previous issue
* about side effects over images as follows:
*
*    'CardWrapper > ProfileCard > AvatarComponent' 
* 
* in the styles migrated still commented the side 
* effects related with 'opacity' and 'transform'
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

const CardWrapper = styled.div`
    position: relative;
    width: 190px;
    height: 254px;
    background: #f00;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18rem;
    padding: 18rem;

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
    
    .content{
      position: absolute;
      z-index:3;
      bottom:0;
      display:flex;
      flex-direction:column;
      align-items:center;
      transform:scale(0);
      transition:0.5s;
    }
    
    &:hover .content{
      transform:scale(1);
      bottom:25px;
    }
`

const StyledWrapper = styled.div`
div{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

}

  
  `;

export default Card;
