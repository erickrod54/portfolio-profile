import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components"

/**Portfolio-erick - version 16.07 - styled.components - Features:
 * 
 *      --> Adding 'ExperimentalUIWrapper' responsiveness
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

/** Styled Components for new Portfolio - START */

/**SocialComponent styles - START */

export const SocialContent = styled.div`
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

export const SocialTitle = styled.p`
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

export const StyleSocialWrapper = styled.div`


`

export const StyledSci = styled.ul`
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
/**SocialComponent styles - END */

/**OuterCircleIcons component styles - Begin */

export const ProfileItemInnerSpan = styled.span`
  /* block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 */
  display: block;
  width: 40px; /* w-[40px] */
  height: 40px; /* h-[40px] */
  transition: all 500ms; /* transition-all duration-500 */
  border-radius: 9999px; /* rounded-full */
  z-index: 2; /* z-[2] */
  background-color: white; /* bg-white */
  padding: 0.25rem; /* p-1 (assuming 1rem = 16px, so 4 * 1 = 4px) */
`;

export const ProfileItemBase = css`
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

export const ProfileItemAws = styled.button`
  ${ProfileItemBase}
  /* right-[40%] -bottom-4 absolute */
  right: 40%;
  bottom: -1rem; /* -bottom-4 */
`;

export const ProfileItemJs = styled.button`
  ${ProfileItemBase}
  /* bottom-8 -left-0 absolute */
  bottom: 2rem; /* bottom-8 */
  left: 0;
`;

export const ProfileItemPython = styled.button`
  ${ProfileItemBase}
  /* bottom-8 -right-0 absolute */
  bottom: 2rem; /* bottom-8 */
  right: 0;
`;

export const IconTwentyEight = styled(FontAwesomeIcon)`
  width:30px;
  height:30px;
  display:block;
`

export const IconJsCustom = styled(IconTwentyEight)`
  color:#F7DF1E;
`

export const ProfileItemWordpress = styled.button`
  ${ProfileItemBase}
  /* -right-4 top-20 absolute */
  right: -1rem; /* -right-4 */
  top: 5rem; /* top-20 */
`;

export const ProfileItemAngular = styled.button`
  ${ProfileItemBase}
  /* -left-4 top-20 absolute */
  left: -1rem; /* -left-4 (assuming 1rem = 16px, so 4 * 4 = 16px) */
  top: 5rem; /* top-20 (assuming 1rem = 16px, so 20 * 4 = 80px, or a custom value) */
`;

export const ProfileItemGitAlt = styled.button`
  ${ProfileItemBase}
  /* right-[45px] -top-[4px] absolute */
  right: 45px;
  top: -4px;
`;

export const IconWordpressCustom = styled(IconTwentyEight)`
  color:#000000;
`

export const IconAngularCustom = styled(IconTwentyEight)`
  color:#C3002F;
`

export const IconReactCustom = styled(IconTwentyEight)`
  color:#61DAFB;
`
export const IconGitAltCustom = styled(IconTwentyEight)`
  /** Portland Orange */
  color:#F1502F
`
/**OuterCircleComponent styles - END */

// Specific components for each button based on their positioning
export const ProfileItemReact = styled.button`
  ${ProfileItemBase}
  /* left-[45px] -top-[4px] absolute */
  left: 45px;
  top: -4px;
`;

/**ProfileCard component styles - Begin */

export const ProfileCardInner = styled.div`
  /* profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50 */
  position: relative;
  padding: 2.5rem; /* p-10 */
  border: 2px dashed rgba(156, 163, 175, 0.5); /* border-2 border-dashed border-gray-400/50 */
  border-radius: 9999px; /* rounded-full */
  /* border-spacing-4 is a Tailwind utility for table cells, which doesn't apply here.
     The border style is achieved with the above properties. */
`;

export const ProfileCardContainer = styled.div`
  /* relative h-full w-full flex items-center justify-center */
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
/**ProfileCard component styles - END */

/** Card component styles  - Begin */
export const StyleProfileWrapper = styled.div`
  position: relative;
  z-index:4
`

/**this style component will hold only the html 
 * element 'b' to give the final color to 
 * the Card under 'CardWrapper' the color 
 * is b > background:rgba(0, 0, 0 ,0.6);
*/
export const StyleBneonCard = styled.b`

`

export const CardWrapper = styled.div`
    position: relative;
    width: 190px;
    height: 254px;
    background: #f00;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18rem;
    padding: 18rem;
    cursor: pointer; /* Suggesting a pointer to indicate clickability */

    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(315deg,#03a9f4,#ff0058);    
    }
  
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(315deg,#03a9f4,#ff0058);
      filter: blur(30px);
    }

    b {
      position:absolute;
      inset:6px;
      background:rgba(0, 0, 0 ,0.6);
      z-index: 2;
    }
`

export const StyledWrapper = styled.div`
  div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

  }
`;

/** Card component styles  - End */

export const ExperimentalUIWrapper = styled.div`
    height: 100vh; 
    width: 100vw;  
    margin: 0;     
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    background: linear-gradient(to bottom right, #1C1C1C, #0A0A0A);  
    /* Add for potential content overflow on small screens */
    overflow-y: auto; 

    /* Media query for smaller mobile screens (e.g., height < 600px) */
    @media (max-height: 600px) {
        /* Allow content to scroll if it doesn't fit in the viewport height */
        height: auto; 
        min-height: 100vh;
        /* Add some padding for better spacing around the edges */
        padding: 20px 0; 
    }
`;

  /**Avatar component styles - START */
  // --- Image Styles (The Picture Itself) ---
export const ProfilePictureImg = styled.img`
    width: 90%;
    height: 90%;
    border-radius: 50%;
    object-fit: cover; 
    display: block;
  `;

export const ProfileCardCenterButton = styled.button`
  /* Set the exact size of the final avatar circle */
  width: 200px; /* w-[200px] */
  height: 200px; /* h-[200px] */
  background: radial-gradient(circle at center, #3D3D3D 0%, #000000 100%);
  
  /* Make it a perfect circle */
  border-radius: 9999px; 
  
  padding: 0; 
  border: 2px solid transparent; 
  
  /* Center content */
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  transition: all 500ms;
  z-index: 0;
  
  &:hover {
    border-color: rgba(156, 163, 175, 0.5); /* hover:border-gray-400/50 */
    /* Ensure no scaling on hover */
    transform: none; 
  }
  
  &:active {
    transform: none; 
  }
  
  img{
      position: absolute;
      z-index:3;
      scale:0.8;
      /*opacity:0.25;**/
      transition:0.5s;
    }
    
    &:hover img {
      scale:0.7;
      opacity:0.9;
      /*transform: translateY(-70px);**/
    }
      
  -webkit-tap-highlight-color: transparent;
`;
/** Card component styles - END */
/** Styled Components for new Portfolio - END */

export const SkillsListWrapper = styled.div`
  width: 100%;
  overflow: hidden; /* Prevents overflowing */
  display: flex;
  justify-content: center;
`

export const ContactListItem = styled.ul`
    
`

export   const ContactTitle = styled.label`
    font-weight: 700;
    text-transform: capitalize;
    font-size: larger;
`

export const ContactList = styled.ul`
  
`

export   const CloseButton = styled.button`
  cursor: pointer;
`

export const ContactWrapper = styled.section`
   
`

export const ContactButton = styled.input`
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 17px;
  font-weight: 500;
  color: yellow;
  background-color: transparent;
  border: 2px solid yellow;
  transition: 0.5s ease;
  user-select: none;
`;

export const ContactTextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
`;

export const ContactInput = styled.input`
  padding: 10px;
  margin: 10px 0;
`;

export const ContactForm = styled.form`
  padding: 20px;
  margin: 20px;
  background-color: rgba(127, 255, 212, 0.5);
`;

export const ModalContent = styled.div`
  background: var(--clr-white);
  width: 90vw;
  max-width: var(--fixed-width);
  padding: 3rem;
  border-radius: var(--radius);
  text-align: center;
  position: relative;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  z-index: ${(props) => (props.isOpen ? "999" : "-1")};
  transition: var(--transition);
`;

export const SkillItem = styled.li`
  background: var(--gradient-btn);
  margin: 1rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  color: var(--clr-white);
`;

export const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem; /* Adds some spacing but prevents excessive gaps */
  margin: 0 auto; /* Center the skills */
  padding: 0;
  list-style: none;
  white-space: nowrap; /* Prevents wrapping */

  @media screen and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    }
`;


export const SkillsTitle = styled.h2`
  display: grid;
  margin: 1rem;
  padding: 1rem;
  text-decoration: underline yellow;
  place-items: center;
  text-transform: capitalize;
  color: var(--clr-white);
`;

export const SkillsBox = styled.div`
  display: grid;
  border: 1px solid white;
  margin: 1.7em;
  border-radius: 0.75em;
  justify-content: center;
  align-items: center;
  text-align: center;
`; 

export const SkillsSection = styled.section`
  display: grid;
  grid-column: container-start / container-end;
  place-content: center;
  background: var(--gradient-bkgd);
  margin: 4rem;
  border-radius: 4rem;
`;

export const DownloadCV = styled.div`
  margin-top: 3rem;
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: var(--clr-white);
  text-shadow: none;
  background: transparent;
  box-shadow: transparent;
  transition: 0.5s ease;
  user-select: none;

  &:hover, &:focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;
    cursor: pointer;
  }
`;

export const IntroText = styled.p`
    color: var(--clr-white);
`; 

export const IntroTitle = styled.h2`
    color: yellow;
    margin-bottom: 2rem;
`;

export const IntroMessage = styled.div`
  line-height: 2rem;
  grid-column: col-start 6 / col-end 8;
  padding: 3rem;
  
  @media screen and (max-width: 2000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50rem;
  }

  @media screen and (max-width: 900px) {
    width: 27rem;
  }
`;

export const IntroSection = styled.section`
    display: grid;
    grid-column: container-start / container-end;
    place-content: center;
    background: linear-gradient(
    to left,
    rgb(48, 7, 82) 0%,
    rgba(0, 128, 128, 1) 100%
    );
    margin: 4rem;
    border-radius: 4rem;

    @media screen and (max-width: 520px) {
    width: 20rem;
    }
`;

export const HeaderButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2rem;
    grid-column: col-start 7 / col-end 8;
`;

export const HeaderLogo = styled.div`
    grid-column: col-start 0 / col-end 1;
`;

export const HeaderWrapper = styled.section`
    display: grid;
    margin: 2rem;
    padding: 2rem;
    grid-column: container-start / container-end;
    height: fit-content;
    background: linear-gradient(to left, rgb(48, 7, 82) 0%, rgba(0, 128, 128, 1) 100%);
    border-radius: 4rem;
`

export const ButtonsList = styled.ul`

`

export const ButtonsWrapper = styled.section`
    display: grid;
    place-content: center;
    width: 5vw;
    height: 5vh;
    border-radius: 0.7rem;
    cursor: pointer;
`

export const EachBtn = styled.button`
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 500;
    color: var(--clr-white);
    text-shadow: none;
    background: transparent;
    box-shadow: transparent;
    border: 2px solid var(--clr-white);;
    transition: 0.5s ease;
    user-select: none;

    &:hover,:focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff,
                0 0 10px #ffffff,
                0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff,
                0 0 20px #008cff,
                0 0 50px #008cff,
                0 0 100px #008cff;
    cursor: pointer;
    }

`

export const AnchorTag = styled.a`

`

export const FooterRight = styled.div`
    justify-self: end;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const CenterListItem = styled.li`

`

export const CenterList = styled.ul`

`

export const FooterCenter = styled.div`
    justify-self: end;
` 
export const FooterContainer = styled.section`
        display: grid;
        margin: 2rem;
        padding: 2rem;
        grid-template-columns: repeat(2, 1fr); /* divide container into 3 equal columns */
        grid-column: container-start / container-end;
        background: linear-gradient(
            to left,
            rgb(48, 7, 82) 0%,
            rgba(0, 128, 128, 1) 100%
        );
        border-radius: 2rem;
        margin-left: 4.3rem;
        margin-right: 4.3rem;
`