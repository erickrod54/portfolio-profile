import styled, { css } from 'styled-components';
import { AvatarPicture, IconComponent } from './index.components';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { usePortfolioContext } from '../context.js';
import OuterCircleIcons from './outer.circle.icons.component.jsx';

/**Portfolio-erick - version 13.04 - ProfileCard -
* Features:

    --> Clearing 'faAngular'  

* Notes: This is the initial test component, and
* later will be over more refactors.
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

// --- Floating Profile Item Button Styles ---

// Base styles for all floating buttons (profile_item)
const ProfileItemBase = css`
  /* rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] */
  position: absolute; /* Handled in specific component for positioning, but included for clarity */
  border-radius: 9999px; /* rounded-full */
  background-size: cover; /* bg-cover */
  cursor: pointer;
  border: 1px solid rgba(156, 163, 175, 0.5); /* border border-gray-400/50 */
  padding: 2px; /* p-[2px] */
  background-color:black;
  
  /* active:scale-95 hover:scale-95 transition-all duration-500 */
  transition: all 500ms; /* transition-all duration-500 */
  
  &:hover {
    transform: scale(0.95); /* hover:scale-95 */
  }

  &:active {
    transform: scale(0.95); /* active:scale-95 */
  }
`;

// --- Final Component with Styled Components ---

const ProfileCard = () => {

  const { amazonAwsData, pythonData } = usePortfolioContext();

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



