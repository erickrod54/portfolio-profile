import { faDiscord, faLinkedinIn, faTelegram, faTwitch, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 15.19 - SocialComponent -
* Features:

    --> Clearing 'faInstagram'

* Notes: Temperorally the state of the recent created
* 'is-revealed' is set to 'true' for testing porpouse
* but will be controlled by a handler from the parent
* component
**/


const SocialContent = styled.div`
  position: absolute; 
  z-index: 3;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0); 
  transition: 0.5s;
  
  &.is-revealed {
    transform: scale(1);
    bottom: 25px;
  }
`

const SocialTitle = styled.p`
    position: relative;
    color: #fff;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;

  span {
    font-weight: 300;
    font-size: 0.70em;
  }

`

const StyledSci = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 5px;
  margin-left: 1.5rem;
  
  li {
    list-style: none;
  }
  
  // Icon size adjustments
  li svg { 
    width: 14px;
    height: 14px; /* Added height for better centering */
  }
  
  li a {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.2);
    fill: currentColor;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.5s;
    margin-right: 2rem;
  }
  
  li a:hover {
    fill: currentColor;
    color: rgba(255, 255, 255, 1);
  }
`
const StyleSocialWrapper = styled.div`

 

`

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
              <a href={url_discord}>
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
            <li>
              <a href={url_xtwitter}>
                <FontAwesomeIcon icon={faXTwitter}/>
              </a>
            </li>
            <li>
              <a href={url_linkdn}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href={url_twitch}>
                <FontAwesomeIcon icon={faTwitch} />
              </a>
            </li>
          </StyledSci>
        </SocialContent>
        </StyleSocialWrapper>
    )
}

export default SocialComponent;