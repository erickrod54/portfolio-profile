import styled from "styled-components";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 10.20 - AvatarPicture -
* Features:

    --> Scoping side effects from CardWrapper 
        > ProfileCard on AvatarPicture

* Notes: 
This way AvatarPicture Component will have full
control of the side effects cause in previous versions
for CardWrapper and solve:
*
*  -`This is the Avatar isolation in order to
*  -fix bugs related with the overflow, and image 
*  -blur - already fixed - reference in Card.component`
*
*  the above issue from previus versions
**/

const ProfileCardCenterButton = styled.button`
  /* Set the exact size of the final avatar circle */
  width: 200px; /* w-[200px] */
  height: 200px; /* h-[200px] */
  background: radial-gradient(circle at center, #3D3D3D 0%, #000000 100%);
  
  /* Make it a perfect circle */
  border-radius: 9999px; 
  
  padding: 0; 
  border: 2px solid transparent; 
  
  /* Center content */
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  transition: all 500ms;
  z-index: 0;
  
  &:hover {
    border-color: rgba(156, 163, 175, 0.5); /* hover:border-gray-400/50 */
    /* Ensure no scaling on hover */
    transform: none; 
  }
  
  &:active {
    transform: none; 
  }
  
  img{
      position: absolute;
      z-index:3;
      scale:0.8;
      /*opacity:0.25;**/
      transition:0.5s;
    }
    
    &:hover img {
      scale:0.7;
      opacity:0.9;
      /*transform: translateY(-70px);**/
    }
      
  -webkit-tap-highlight-color: transparent;
`;

// --- Image Styles (The Picture Itself) ---
const ProfilePictureImg = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  object-fit: cover; 
  display: block;
`;

const AvatarPicture = () => {
  const { profileImagePic } = usePortfolioContext()

  return(
       <ProfileCardCenterButton>
         <ProfilePictureImg 
             src={profileImagePic} 
             alt="User Profile" 
         /> 
       </ProfileCardCenterButton>
  )
}

export default AvatarPicture;
