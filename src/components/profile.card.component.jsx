import styled, { css } from 'styled-components';
import { AvatarPicture, IconComponent } from './index.components';
import { faGitAlt, faReact, faAngular, faWordpress, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePortfolioContext } from '../context.js';
import OuterCircleIcons from './outer.circle.icons.component.jsx';

/**Portfolio-erick - version 12.04 - ProfileCard -
* Features:

    --> Importing and placing 'OuterCircleIcons'  

* Notes: This is the initial test component, and
* later will be over more refactors.
**/

// --- Main Container Styles ---

const IconTwentyEight = styled(FontAwesomeIcon)`
  width:30px;
  height:30px;
  display:block;
`

const IconGitAlt = styled(IconTwentyEight)`
  /** Portland Orange */
  color:#F1502F
`

const IconReactCustom = styled(IconTwentyEight)`
  color:#61DAFB;
`

const IconAngularCustom = styled(IconTwentyEight)`
  color:#C3002F;
`

const IconWordpressCustom = styled(IconTwentyEight)`
  color:#000000;
`

const IconJsCustom = styled(IconTwentyEight)`
  color:#F7DF1E;
`

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

// Specific components for each button based on their positioning
const ProfileItemReact = styled.button`
  ${ProfileItemBase}
  /* left-[45px] -top-[4px] absolute */
  left: 45px;
  top: -4px;
`;

const ProfileItemVercel = styled.button`
  ${ProfileItemBase}
  /* right-[45px] -top-[4px] absolute */
  right: 45px;
  top: -4px;
`;

const ProfileItemFigma = styled.button`
  ${ProfileItemBase}
  /* -left-4 top-20 absolute */
  left: -1rem; /* -left-4 (assuming 1rem = 16px, so 4 * 4 = 16px) */
  top: 5rem; /* top-20 (assuming 1rem = 16px, so 20 * 4 = 80px, or a custom value) */
`;

const ProfileItemLinkedIn = styled.button`
  ${ProfileItemBase}
  /* -right-4 top-20 absolute */
  right: -1rem; /* -right-4 */
  top: 5rem; /* top-20 */
`;

const ProfileItemLaravel = styled.button`
  ${ProfileItemBase}
  /* bottom-8 -left-0 absolute */
  bottom: 2rem; /* bottom-8 */
  left: 0;
`;

const ProfileItemTailwind = styled.button`
  ${ProfileItemBase}
  /* bottom-8 -right-0 absolute */
  bottom: 2rem; /* bottom-8 */
  right: 0;
`;

const ProfileItemVue = styled.button`
  ${ProfileItemBase}
  /* right-[40%] -bottom-4 absolute */
  right: 40%;
  bottom: -1rem; /* -bottom-4 */
`;


// --- Inner Span Styles (Shared) ---

const ProfileItemInnerSpan = styled.span`
  /* block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 */
  display: block;
  width: 40px; /* w-[40px] */
  height: 40px; /* h-[40px] */
  transition: all 500ms; /* transition-all duration-500 */
  border-radius: 9999px; /* rounded-full */
  z-index: 2; /* z-[2] */
  background-color: white; /* bg-white */
  padding: 0.25rem; /* p-1 (assuming 1rem = 16px, so 4 * 1 = 4px) */
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



