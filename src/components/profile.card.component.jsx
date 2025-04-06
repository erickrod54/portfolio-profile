import OuterCircleIcons from './outer.circle.icons.component.jsx';
import { AvatarPicture } from './index.components.js';
import { ProfileCardContainer, ProfileCardInner } from '../styled-components/styled.components.js';

/**Portfolio-erick - version 13.14 - ProfileCard -
* Features:

    --> Clearing 'styled'  

* Notes: This is the clean and dry component.
**/


// --- Final Component with Styled Components ---

const ProfileCard = () => {

  return (
    <ProfileCardContainer>
      <ProfileCardInner className="profileCard_container">
        
        <OuterCircleIcons />

        {/* Center Profile Icon */}
        <AvatarPicture />

      </ProfileCardInner>
    </ProfileCardContainer>
  );
}

export default ProfileCard;



