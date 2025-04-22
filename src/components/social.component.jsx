import { faDiscord, faLinkedinIn, faTwitch, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePortfolioContext } from "../context";
import { StyleSocialWrapper, StyledSci, SocialTitle, SocialContent } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 16.07 - SocialComponent -
* Features:

    --> Clearing 'styled'

* Notes: Temperorally the state of the recent created
* 'is-revealed' is set to 'true' for testing porpouse
* but will be controlled by a handler from the parent
* component
**/

const SocialComponent = ({ isRevealed }) => {

    const { social } = usePortfolioContext();
    
    const url_xtwitter = social[2].url;
    const url_linkdn = social[1].url;
    const url_twitch = social[3].url;
    const url_discord = social[4].url;

    return(
        <StyleSocialWrapper >    
        <SocialContent className={isRevealed ? 'is-revealed' : ''}>
          <SocialTitle>Erick Rodriguez<br /><span>Software Engineer</span></SocialTitle>
          <StyledSci>
            <li>
              <a href={url_discord} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
            <li>
              <a href={url_xtwitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter}/>
              </a>
            </li>
            <li>
              <a href={url_linkdn} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href={url_twitch} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitch} />
              </a>
            </li>
          </StyledSci>
        </SocialContent>
        </StyleSocialWrapper>
    )
}

export default SocialComponent;