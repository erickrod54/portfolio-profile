import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { IntroMessage, IntroSection, IntroTitle } from "../styled-components/styled.components";

/**Portfolio-erick - version 7.20 - Intro - Features:
 * 
 *      --> writting 'IntroText'.
 * 
*     
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const IntroText = styled.p`
  color: var(--clr-white);
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
                    <IntroMessage key={id}>
                        <IntroTitle className="intro--intromessage--title">Hello i'm {myname}</IntroTitle>
                        <IntroText>
                            {intro}
                        </IntroText>
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