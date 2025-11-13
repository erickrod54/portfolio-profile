import { faAngular, faGitAlt, faWordpress } from '@fortawesome/free-brands-svg-icons';
import IconComponent from './icon.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { useIconsContext } from '../contexts/context.icons.data';

/**Portfolio-erick - version 54.08 - OuterCircleIcons -
* Features:

    --> Clearing local 'react_GradientData'

* Notes: The size was fix in the 'ProfileItemInnerSpan' due 
* to it's wrap on each icon with one change fix size for all
* icons in the circle
**/

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

const ProfileItemInnerSpan = styled.span`
  /* block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 */
  display: block;
  width: 30px; /* w-[40px] */
  height: 30px; /* h-[40px] */
  transition: all 500ms; /* transition-all duration-500 */
  border-radius: 9999px; /* rounded-full */
  z-index: 2; /* z-[2] */
  background-color: white; /* bg-white */
  padding: 0.25rem; /* p-1 (assuming 1rem = 16px, so 4 * 1 = 4px) */
`;

const ProfileItemAws = styled.button`
  ${ProfileItemBase}
  /* right-[40%] -bottom-4 absolute */
  right: 40%;
  bottom: -1rem; /* -bottom-4 */
`;

const ProfileItemPython = styled.button`
  ${ProfileItemBase}
  /* bottom-8 -right-0 absolute */
  bottom: 2rem; /* bottom-8 */
  right: 0;
`;

const ProfileItemJs = styled.button`
  ${ProfileItemBase}
  /* bottom-8 -left-0 absolute */
  bottom: 2rem; /* bottom-8 */
  left: 0;
`;

const ProfileItemWordpress = styled.button`
  ${ProfileItemBase}
  /* -right-4 top-20 absolute */
  right: -1rem; /* -right-4 */
  top: 5rem; /* top-20 */
`;

const ProfileItemAngular = styled.button`
  ${ProfileItemBase}
  /* -left-4 top-20 absolute */
  left: -1rem; /* -left-4 (assuming 1rem = 16px, so 4 * 4 = 16px) */
  top: 5rem; /* top-20 (assuming 1rem = 16px, so 20 * 4 = 80px, or a custom value) */
`;

const ProfileItemReact = styled.button`
  ${ProfileItemBase}
  /* left-[45px] -top-[4px] absolute */
  left: 45px;
  top: -4px;
`;

const ProfileItemGitAlt = styled.button`
  ${ProfileItemBase}
  /* right-[45px] -top-[4px] absolute */
  right: 45px;
  top: -4px;
`;

const IconTwentyEight = styled(FontAwesomeIcon)`
  width:30px;
  height:30px;
  display:block;
`

const IconWordpressCustom = styled(IconTwentyEight)`
  color:#000000;
`

const IconGitAltCustom = styled(IconTwentyEight)`
  /** Portland Orange */
  color:#F1502F
`

const IconAngularCustom = styled(IconTwentyEight)`
  color:#C3002F;
`


const OuterCircleIcons = () => {

  const { pythonData, amazonAwsData, js_SquareData, react_GradientData } = useIconsContext()

  return (
    <>
        {/* React Button */}
        <ProfileItemReact className="profile_item">
          <ProfileItemInnerSpan>
            <IconComponent data={react_GradientData} />
          </ProfileItemInnerSpan>
        </ProfileItemReact>
        
        {/* Git control Button */}
        <ProfileItemGitAlt className="profile_item">
          <ProfileItemInnerSpan>
            <IconGitAltCustom icon={faGitAlt}/>
          </ProfileItemInnerSpan>
        </ProfileItemGitAlt>
        
        {/* Angular Button */}
        <ProfileItemAngular className="profile_item">
          <ProfileItemInnerSpan>
            <IconAngularCustom  icon={faAngular} />
          </ProfileItemInnerSpan>
        </ProfileItemAngular>
        
        {/* Wordpress Button */}
        <ProfileItemWordpress className="profile_item">
          <ProfileItemInnerSpan>
            <IconWordpressCustom icon={faWordpress}/>
          </ProfileItemInnerSpan>
        </ProfileItemWordpress>

        {/* JS Button */}
        <ProfileItemJs className="profile_item">
          <ProfileItemInnerSpan>
            <IconComponent data={js_SquareData}/>
          </ProfileItemInnerSpan>
        </ProfileItemJs>

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