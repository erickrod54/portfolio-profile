import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";

/**Portfolio-erick - version 7.15 - Intro - Features:
 * 
 *      --> writting IntroSection' and 'IntroMessage'.
 * 
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

const IntroComponent = () => {

    const { filePdf } = usePortfolioContext();

    const { ResumeData } = usePortfolioContext()
    console.log('resume data ==>', ResumeData)
    return(
        <IntroSection>
              {ResumeData.filter((section) => section.id < 2).map((half) => {
                const { id, myname, intro } = half;
                    //console.log('half ==>', half)
                    return(
                    <IntroMessage>
                        <h2 className="intro--intromessage--title">Hello i'm {myname}</h2>
                        <div className="intro--intromessage--text">
                        <p>{intro}</p>
                        </div>
                        <div className="intro--cv">
                            <a href='https://drive.google.com/file/d/1-klR8-5g9xBiqcagM2Pn3hA8B1IQzTfX/view?usp=share_link' target="_blank" rel="noreferrer">{filePdf}</a>
                        </div>
                    </IntroMessage>
                    )
                 })}
        </IntroSection>
    )
}

export default IntroComponent;