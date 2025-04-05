import styled from 'styled-components';
import OuterCircleIcons from './outer.circle.icons.component.jsx';
import { AvatarPicture } from './index.components.js';
import { ProfileCardContainer } from '../styled-components/styled.components.js';

/**Portfolio-erick - version 13.12 - ProfileCard -
* Features:

    --> Migrating 'ProfileCardContainer'  

* Notes: This is the initial test component, and
* later will be over more refactors.
**/


const ProfileCardInner = styled.div`
  /* profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50 */
  position: relative;
  padding: 2.5rem; /* p-10 */
  border: 2px dashed rgba(156, 163, 175, 0.5); /* border-2 border-dashed border-gray-400/50 */
  border-radius: 9999px; /* rounded-full */
  /* border-spacing-4 is a Tailwind utility for table cells, which doesn't apply here.
     The border style is achieved with the above properties. */
`;

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



