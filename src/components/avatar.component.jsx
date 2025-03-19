import styled from "styled-components";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 10.09 - AvatarPicture -
* Features:

    --> Destructuring profileImagePic from the context

* Notes: This is the Avatar isolation in order to
* fix bugs related with the overflow, and image 
* blur
**/

const ProfilePictureImg = styled.img`
  /* Take up the full space of its parent Span */
  width: 100%;
  height: 100%;
  
  /* The magic to make it a circle */
  border-radius: 50%;
  
  /* Ensure the image is cropped nicely and doesn't distort */
  object-fit: cover; 
  
  /* Remove any browser default spacing */
  display: block;
`;

const ProfileCardCenterInnerSpan = styled.span`
  /* w-20 h-20 inline-block */
  width: 5rem; /* w-20 (assuming 1rem = 16px, so 5 * 16 = 80px) */
  height: 5rem; /* h-20 */
  display: inline-block;
`;

const ProfileCardCenterInnerDiv = styled.div`
  /* w-full bg-white h-full flex items-center justify-center p-2 rounded-full object-cover transition-all duration-500 */
  width: 100%;
  background-color: white; /* bg-white */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem; /* p-2 */
  border-radius: 9999px; /* rounded-full */
  object-fit: cover; /* object-cover */
  transition: all 500ms; /* transition-all duration-500 */
  
  /* active:scale-95 hover:scale-95 */
  &:hover {
    transform: scale(0.95); /* hover:scale-95 */
  }

  &:active {
    transform: scale(0.95); /* active:scale-95 */
  }
`;

const ProfileCardCenterButton = styled.button`
  /* w-[200px] h-[200px] p-1 border-2 rounded-full cursor-pointer transition-all duration-500 z-0 */
  width: 200px; /* w-[200px] */
  height: 200px; /* h-[200px] */
  padding: 0.25rem; /* p-1 */
  border: 2px solid transparent; /* border-2 (default border color is usually black, but we set to transparent to control the hover) */
  border-radius: 9999px; /* rounded-full */
  cursor: pointer;
  transition: all 500ms; /* transition-all duration-500 */
  z-index: 0; /* z-0 */

  /* hover:border-gray-400/50 */
  &:hover {
    border-color: rgba(156, 163, 175, 0.5); /* hover:border-gray-400/50 */
  }
`;

const AvatarPicture = () => {

  const { profileImagePic } = usePortfolioContext()

  return(
    <ProfileCardCenterButton>
          <ProfileCardCenterInnerDiv>
            <ProfileCardCenterInnerSpan>
                <ProfilePictureImg 
                   src={profileImagePic} 
                   alt="User Profile" 
                   className="profile-picture-img" 
                /> 
            </ProfileCardCenterInnerSpan>
          </ProfileCardCenterInnerDiv>
        </ProfileCardCenterButton>
  )
}

export default AvatarPicture;