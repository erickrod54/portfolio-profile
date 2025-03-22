import styled from "styled-components"

/**Portfolio-erick - version 10.19 - styled.components - Features:
 * 
 *      --> Adding 'StyleBneonCard' 
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

/** Styled Components for new Portfolio - START */

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
export const ExperimentalUIWrapper = styled.div`
    height: 100vh; 
    width: 100vw;  
    margin: 0;     
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    background: linear-gradient(to bottom right, #1C1C1C, #0A0A0A);  
`
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