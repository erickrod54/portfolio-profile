import styled from 'styled-components';
import ProfileCard from './profile.card.component';
import { SocialComponent } from './index.components';

/**Portfolio-erick - version 10.16 - Card component -
* Features:

    -→> Building 'CardWrapper' style component
        to clean the previous classic .card class

* Notes: side effects on AvatarPicture comes from:
*
*     .card > ProfileCard > AvatarComponent 
*
* the style class 'card' applies some styles that affects 
* every child image and in consequence affects to the 
* profile picture contained on 'AvatarComponent' these styles
* are commented by the moment:
*         
*       opacity:0.25;
*       transform:%20translateY%20(-70px);    
*
*  they are under '.card: hover img'   
*
* next steps are to de compose this component
**/

const Card = () => {
  return (
    <StyledWrapper>
      <CardWrapper>
        <StyleProfileWrapper>
          <ProfileCard />      
        </StyleProfileWrapper>
        <b />
        <SocialComponent />
      </CardWrapper>

    </StyledWrapper>
    
  );
}

const StyleProfileWrapper = styled.div`
position: relative;
z-index:4
`

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
    
    img{
      position: absolute;
      z-index:3;
      scale:0.8;
      /*opacity:0.25;**/
      transition:0.5s;
    }
    
    &:hover img {
      scale:0.5;
      opacity:0.9;
      /*transform: translateY(-70px);**/
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
