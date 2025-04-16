import { faInstagram, faLinkedinIn, faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

/**Portfolio-erick - version 15.06 - SocialComponent -
* Features:

    --> Getting 'isRevealed' prop handled by parent 
       component CardWrapper

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

const StyleSocialWrapper = styled.div`

.title {
    position: relative;
    color: #fff;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
  }

  .title span {
    font-weight: 300;
    font-size: 0.70em;
  }

  .sci {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
    margin-left: 1.5rem;
  }

  .sci li {
    list-style: none;
  }
  
  // Icon size adjustments
  .sci li svg { 
    width: 14px;
    height: 14px; /* Added height for better centering */
  }

  .sci li a {
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

  .sci li a:hover {
    fill: currentColor;
    color: rgba(255, 255, 255, 1);
  }
`

const SocialComponent = ({ isRevealed }) => {

    return(
        <StyleSocialWrapper >    
        <SocialContent className={isRevealed ? 'is-revealed' : ''}>
          <p className="title">Erick Rodriguez<br /><span>Software Engineer</span></p>
          <ul className="sci">
            <li>
              <a href="/#">
                <FontAwesomeIcon icon={faTelegram}/>
              </a>
            </li>
            <li>
              <a href="/#">
                <FontAwesomeIcon icon={faXTwitter}/>
              </a>
            </li>
            <li>
              <a href="/#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href="/#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </SocialContent>
        </StyleSocialWrapper>
    )
}

export default SocialComponent;