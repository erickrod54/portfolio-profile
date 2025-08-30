import { faDiscord, faLinkedinIn, faTwitch, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePortfolioContext } from "../context";
import { StyleSocialWrapper, StyledSci, SocialTitle, SocialContent } from '../styled-components/styled.components.index';

/**Portfolio-erick - version 39.20 - SocialComponent -
* Features:

    --> Destructuring  'social' data in a cleaner way

* Notes: Temperorally the state of the recent created
* 'is-revealed' is set to 'true' for testing porpouse
* but will be controlled by a handler from the parent
* component
**/


const SocialComponent = ({ isRevealed }) => {
  
    const { social, social_title } = usePortfolioContext();

    const [{ name, career:engineer }] = social_title;
    
    /**the comma before the url_linkdn skips the first data field */
    const [,{ url:url_linkdn},{ url: url_xtwitter },{ url:url_twitch }, { url:url_discord}] = social;

    return(
        <StyleSocialWrapper >    
        <SocialContent className={isRevealed ? 'is-revealed' : ''}>
          <SocialTitle>{name}<br /><span>{engineer}</span></SocialTitle>
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