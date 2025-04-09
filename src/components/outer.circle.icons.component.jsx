import styled from 'styled-components';
import { IconComponent } from './index.components';
import { faGitAlt, faReact, faAngular, faWordpress, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePortfolioContext } from '../context.js'
import { ProfileItemBase, ProfileItemInnerSpan, ProfileItemAws, ProfileItemPython } from '../styled-components/styled.components.index.js';

/**Portfolio-erick - version 14.03 - OuterCircleIcons -
* Features:

    --> Migrating 'ProfileItemPython'  

* Notes: This component will hold the outer circle
* with icons.
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

// --- Floating Profile Item Button Styles ---


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

const OuterCircleIcons = () => {

  const { amazonAwsData, pythonData } = usePortfolioContext();

  return (
    <>
        {/* React Button */}
        <ProfileItemReact className="profile_item">
          <ProfileItemInnerSpan>
            <IconReactCustom icon={faReact}/>
          </ProfileItemInnerSpan>
        </ProfileItemReact>
        
        {/* Git control Button */}
        <ProfileItemVercel className="profile_item">
          <ProfileItemInnerSpan>
            <IconGitAlt icon={faGitAlt}/>
          </ProfileItemInnerSpan>
        </ProfileItemVercel>
        
        {/* Angular Button */}
        <ProfileItemFigma className="profile_item">
          <ProfileItemInnerSpan>
            <IconAngularCustom  icon={faAngular} />
          </ProfileItemInnerSpan>
        </ProfileItemFigma>
        
        {/* Wordpress Button */}
        <ProfileItemLinkedIn className="profile_item">
          <ProfileItemInnerSpan>
            <IconWordpressCustom icon={faWordpress}/>
          </ProfileItemInnerSpan>
        </ProfileItemLinkedIn>

        {/* JS Button */}
        <ProfileItemLaravel className="profile_item">
          <ProfileItemInnerSpan>
            <IconJsCustom icon={faSquareJs}/>
          </ProfileItemInnerSpan>
        </ProfileItemLaravel>

        {/* Python Button */}
        <ProfileItemPython className="profile_item">
          <ProfileItemInnerSpan>
              <IconComponent data={pythonData} />
          </ProfileItemInnerSpan>
        </ProfileItemPython>

        {/* AWS Button */}
        <ProfileItemAws className="profile_item">
          <ProfileItemInnerSpan> 
            <IconComponent data={amazonAwsData}/>
          </ProfileItemInnerSpan>
        </ProfileItemAws>
    </>
    );
}

export default OuterCircleIcons;