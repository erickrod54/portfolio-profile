import { faInstagram, faLinkedinIn, faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

/**Portfolio-erick - version 15.04 - SocialComponent -
* Features:

    --> Refacotring to compose 'SocialComponent'

* Notes: This is the 'SocialComponent' isolation
* so the styles and behavior can be better handled
**/


const SocialContent = styled.div`
  .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);
    transition: 0.5s;
  }

`

const StyleSocialWrapper = styled.div`

  .content .title {
    position: relative;
    color: #fff;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
  }

  .content .title span {
    font-weight: 300;
    font-size: 0.70em;
  }

  .content .sci {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
  }
  
  .title {
    margin-bottom:1rem
  }
 
 .sci{
    margin-left:1.5rem;
 }

  .sci li {
    list-style: none;
  }

  .sci li .fa-brands {
    width: 14px;
  }

  .sci li .fa-facebook {
    width: 10px;
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
    margin-right:2rem;
  }

  .sci li a:hover {
    fill: currentColor;
    color: rgba(255, 255, 255, 1);
  }
`

const SocialComponent = () => {

    return(
        <StyleSocialWrapper>    
        <SocialContent className="content">
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