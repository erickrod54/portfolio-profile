import styled from "styled-components";
import { usePortfolioContext } from "../context";
import { DownloadCV } from "../styled-components/styled.components";

/**Portfolio-erick - version 18.09 - Intro - Features:
 * 
 *      --> Migrating back 'DownloadCV'  
*     
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */


const IntroSection = styled.section`
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

const IntroMessage = styled.div`
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

const IntroTitle = styled.h2`
   color: yellow;
   margin-bottom: 2rem;
`;

const IntroText = styled.p`
    color: var(--clr-white);
`; 

const IntroComponent = () => {

    const { filePdf } = usePortfolioContext();
    const { ResumeData } = usePortfolioContext()
    console.log('resume data ==>', ResumeData)

const DownloadCV = styled.div`
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

    return(
        <IntroSection>
              {ResumeData.filter((section) => section.id < 2).map((half) => {
                const { id, myname, intro } = half;
                    //console.log('half ==>', half)
                    return(
                    <IntroMessage key={id}>
                        <IntroTitle className="intro--intromessage--title">Hello i'm {myname}</IntroTitle>
                        <IntroText>
                            {intro}
                        </IntroText>
                        <DownloadCV>
                            <a href='https://drive.google.com/file/d/1-klR8-5g9xBiqcagM2Pn3hA8B1IQzTfX/view?usp=share_link' target="_blank" rel="noreferrer">{filePdf}</a>
                        </DownloadCV>
                    </IntroMessage>
                    )
                 })}
        </IntroSection>
    )
}

export default IntroComponent;