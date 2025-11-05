import { faLinkedinIn, faTwitch, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DiscordIcon  from "./discord.icon.component";
import styled from 'styled-components';

/**Portfolio-erick - version 53.10 - SocialComponent -
* Features:

    --> Migrating  'SocialComponent' to Vite 

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

  @meadia (max-width:480px){
    margin-top:15px;
    margin-left:0;
  }
  
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
    width: 40px;
    height: 40px;
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
  margin-top:8rem;
  width:100%

  @media(max-width:768px){
    margin-top:4rem;
  }
  
  @media(max-width:480px){
    margin-top:2rem;
    padding:3rem
  }
`

const social = [
    {
        name:'Github',
        icon: 'githubIcon',
        url:'https://github.com/erickrod54'
    },
    {
        name:'Linkdin',
        icon: 'linkedlnIcon',
        url:'https://www.linkedin.com/in/erickrodriguezcardenas'
    },
    {
        name:'X',
        icon:'',
        url:'https://x.com/erickdev54?s=21'
    },
    {
        name:'Twitch',
        icon: '',
        url:'https://dashboard.twitch.tv/u/erickdev54/'
    },
    {
        name:'Discord',
        icon: '',
        url:'https://discord.gg/t8Ka7me4en'
    },
]

const social_title = [
  {
    id:1,
    name:'Erick Rodriguez',
    career:'Software Engineer'
  }
]

const SocialComponent = ({ isRevealed }) => {

    const [{ name, career:engineer }] = social_title;
    
    /**the comma before the url_linkdn skips the first data field */
    const [,{ url:url_linkdn},{ url: url_xtwitter },{ url:url_twitch }] = social;

    return(
        <StyleSocialWrapper >    
        <SocialContent className={isRevealed ? 'is-revealed' : ''}>
          <SocialTitle>{name}<br /><span>{engineer}</span></SocialTitle>
          <StyledSci>
            <li>
                <DiscordIcon />
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