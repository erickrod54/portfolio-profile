import styled from 'styled-components';
import { IconComponent } from './index.components';
import { faGitAlt, faReact, faAngular, faWordpress, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { usePortfolioContext } from '../context.js'
import { ProfileItemBase,
         ProfileItemInnerSpan,
         ProfileItemAws,
         ProfileItemPython,
         ProfileItemJs,
         IconJsCustom,
         ProfileItemWordpress,
         ProfileItemAngular,
         ProfileItemReact,
         ProfileItemGitAlt, IconTwentyEight } from '../styled-components/styled.components.index.js';

/**Portfolio-erick - version 14.17 - OuterCircleIcons -
* Features:

    --> Migrating 'ProfileItemReact'  

* Notes: This component will hold the outer circle
* with icons.
**/


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
            <IconGitAlt icon={faGitAlt}/>
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