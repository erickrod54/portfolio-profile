import AvatarPicture from './avatar.component';
import styled from 'styled-components';
import OuterCircleIcons from './outer.circle.icons.component';

/**Portfolio-erick - version 53.10 - ProfileCard -
* Features:

    --> Migrating 'ProfileCard' to Vite  

* Notes: At this point 'AvatarPicture' and 
* 'OuterCircleIcons' are imported and render
* in this components, still some minor css 
* adjustments
**/


const ProfileCardContainer = styled.div`
  /* relative h-full w-full flex items-center justify-center */
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileCardInner = styled.div`
  /* profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50 */
  position: relative;
  padding: 2.5rem; /* p-10 */
  border: 2px dashed rgba(156, 163, 175, 0.5); /* border-2 border-dashed border-gray-400/50 */
  border-radius: 9999px; /* rounded-full */
  /* border-spacing-4 is a Tailwind utility for table cells, which doesn't apply here.
     The border style is achieved with the above properties. */
`;


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



