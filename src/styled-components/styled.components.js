import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css, keyframes } from "styled-components"

/**Portfolio-erick - version 34.13 - styled.components - Features:
 * 
 *      --> Building 'Tagline'  
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

/** Styled Components for new Portfolio - START */

  /**Footer Component styles - START */

  export const Tagline = styled.p`
    font-size: 0.9rem;
    color: #B197FC;
    line-height: 1.5;
`;

  export const LogoIcon = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #B197FC; /* Placeholder for your logo icon */
    mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 400l85.7-208.2c17-41.3 47.8-75.3 87.2-96.3L383.8 17.2c12.3-6.6 26.5 4.7 23 18.2L369.6 177.8c-1.1 4.1-1.6 8.3-1.6 12.6 0 6.3 1.2 12.6 3.6 18.5l76.4 191.1-207.1 0 11.8-35.4 40.4-13.5c6.5-2.2 10.9-8.3 10.9-15.2s-4.4-13-10.9-15.2l-40.4-13.5-13.5-40.4C237 260.4 230.9 256 224 256s-13 4.4-15.2 10.9l-13.5 40.4-40.4 13.5C148.4 323 144 329.1 144 336s4.4 13 10.9 15.2l40.4 13.5 11.8 35.4-143.1 0zM279.6 141.5c-1.1-3.3-4.1-5.5-7.6-5.5s-6.5 2.2-7.6 5.5l-6.7 20.2-20.2 6.7c-3.3 1.1-5.5 4.1-5.5 7.6s2.2 6.5 5.5 7.6l20.2 6.7 6.7 20.2c1.1 3.3 4.1 5.5 7.6 5.5s6.5-2.2 7.6-5.5l6.7-20.2 20.2-6.7c3.3-1.1 5.5-4.1 5.5-7.6s-2.2-6.5-5.5-7.6l-20.2-6.7-6.7-20.2zM32 448l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>'); /* Replaced with a generic placeholder SVG */
    mask-repeat: no-repeat;
    mask-size: contain;
    margin-right: 0.5rem;
`;

  export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
      justify-content: center;
    }
`;

  export const BrandInfo = styled.div`
    flex-basis: 25%; /* Take up about a quarter of the space */
    min-width: 200px; /* Minimum width to prevent content from shrinking too much */

    @media (max-width: 768px) {
      flex-basis: 100%;
      margin-bottom: 2rem;
    }
`;

  export const FooterWrapper = styled.footer`
    color: #ffffff; /* Dark text color */
    padding: 4rem 2rem; /* Adjusted padding for better spacing */
    font-family: Arial, sans-serif;
    border-top: 1px solid #e0e0e0; /* Subtle top border */
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the top */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 2rem; /* Space between columns */
  margin-bottom: 3rem; /* Space between top and bottom sections */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

  /**Footer Component styles - END */

  /**Collaborations Component styles - START */

export const CollabWrapper = styled.div`

`;

const BlinkCaretKeyframe = keyframes`
  50% {
    border-color:transparent;
  }
`

const TypingKeyFrame = keyframes`
from{
  width:0;
}
`

export const AnimationWrapper = styled.div`
  /* 1. Define the gradient as the background */
  background: linear-gradient(
    315deg,
    #ff0058, /* Pink/Red color */
    #03a9f4  /* Blue/Cyan color */
  );

  /* 2. Clip the background only where there is text */
  -webkit-background-clip: text;
  background-clip: text;

  /* 3. Make the foreground text color transparent so the background shows through */
  -webkit-text-fill-color: transparent;
  color: transparent; /* Fallback for non-webkit browsers */

  font: bold 200% Consolas, Monaco, monospace;

  /* The border-right will still be a solid color */
  border-right: .1em solid white; 

  /* You can adjust the width based on the number of characters in the text "Text writing!" (13 characters including space and exclamation) */
  width: 20ch; 
  margin: 2em auto; /* Centering horizontally */
  white-space: nowrap;
  overflow: hidden;

  /* Adjust steps(13, end) for 13 characters */
  -webkit-animation: ${TypingKeyFrame} 5s steps(13, end),
            ${BlinkCaretKeyframe} .5s step-end infinite alternate;

`

export const CollaborationsWrapper = styled.div` 
    display: flex;
    flex-direction: row; 
    
    /* 🔑 REDUCED EXTERNAL SPACE: Reduced margin and padding for a tighter fit */
    margin: 2rem auto; 
    padding: 2rem; 
    
    width: 70%;
    border: 1px solid white;
    border-radius: 0.50rem;

    > * {
      flex: 1;
      min-width: 0;
      /* 🔑 INCREASED SPACE BETWEEN CHILDREN: Increased margin for better separation */
      margin: 3rem; 
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center; 
        width: 90%; 
        
        /* Reduced margin and padding further for tight mobile space */
        margin: 1rem auto; 
        padding: 1rem;

        > * {
            flex: none; 
            max-width: 100%; 
            /* Ensure text-align is still center for mobile stacking */
            text-align: center; 
            /* Adjusted margin for mobile stacking separation */
            margin: 1.5rem 0;
        }
    }
`
  /**Collaborations Componnent styles - END */


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

export const StyledSci = styled.ul`
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
    width: 90vw;
    max-width:450px;
    min-height:450px;
    heigth:auto;
    background: #f00;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    padding: 40px;
    box-sizing:border-box;
    background: #f00; /* This color might be temporary */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; /* Suggesting a pointer to indicate clickability */

    @media (max-width: 480px) {
        /* Introduce the white space (margin) you requested */
        width: calc(100vw - 40px); /* 100% width minus 20px padding on each side */
        margin: 20px 20px; /* 20px margin all around for white space */
        height: calc(100vw - 40px); /* Keep it square, matching the new constrained width */
        min-height:450px;        
        /* Ensure content doesn't get squeezed too small */
        min-width: 300px;
    }

 
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

