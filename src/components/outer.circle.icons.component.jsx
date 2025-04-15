import styled from 'styled-components';
import { IconComponent } from './index.components';
import { faGitAlt, faReact, faAngular, faWordpress, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { usePortfolioContext } from '../context.js'
import { ProfileItemInnerSpan,
         ProfileItemAws,
         ProfileItemPython,
         ProfileItemJs,
         IconJsCustom,
         ProfileItemWordpress,
         ProfileItemAngular,
         ProfileItemReact,
         ProfileItemGitAlt,
         IconAngularCustom,
         IconReactCustom,
         IconWordpressCustom, IconTwentyEight } from '../styled-components/styled.components.index.js';

/**Portfolio-erick - version 15.01 - OuterCircleIcons -
* Features:

    --> Renaming 'IconGitAlt' to 'IconGitAltCustom'  

* Notes: This component will hold the outer circle
* with icons.
**/


const IconGitAltCustom = styled(IconTwentyEight)`
  /** Portland Orange */
  color:#F1502F
`

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
            <IconJsCustom icon={faSquareJs}/>
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