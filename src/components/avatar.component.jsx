import styled from "styled-components";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 10.12 - AvatarPicture -
* Features:

    --> Testing new gradient background on 'ProfileCardCenterButton'

* Notes: This is the Avatar isolation in order to
* fix bugs related with the overflow, and image 
* blur - already fixed - reference in Card.component
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
  
  -webkit-tap-highlight-color: transparent;
`;

// --- Image Styles (The Picture Itself) ---
const ProfilePictureImg = styled.img`
  width: 100%;
  height: 100%;
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
