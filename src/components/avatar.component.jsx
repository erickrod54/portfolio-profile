import styled from "styled-components";
import { usePortfolioContext } from "../context";
import { ProfilePictureImg, ProfileCardCenterButton } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 11.04 - AvatarPicture -
* Features:

    --> Migrating 'ProfileCardCenterButton'

* Notes: Migrating styled components
**/


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
