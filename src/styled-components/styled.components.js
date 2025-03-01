import styled from "styled-components"

/**Portfolio-erick - version 8.06 - styled.components - Features:
 * 
 *      --> writting 'SkillsBox' 
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

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