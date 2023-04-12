import React from "react";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 6.06 - Intro - Features:
 * 
 *      --> Refactoring Intro Component.
 * 
 *      --> Applying naming convention.
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const IntroComponent = () => {

    const { filePdf } = usePortfolioContext();

    const { ResumeData } = usePortfolioContext()
    console.log('resume data ==>', ResumeData)
    return(
        <section id='intro'>
              {ResumeData.filter((section) => section.id < 2).map((half) => {
                const { id, myname, intro } = half;
                    //console.log('half ==>', half)
                    return(
                    <div key={id} className="intro--intromessage">
                        <h2 className="intro--intromessage--title">Hello i'm {myname}</h2>
                        <div className="intro--intromessage--text">
                        <p>{intro}</p>
                        </div>
                        <div className="intro--cv">
                            <a href='https://drive.google.com/file/d/1-klR8-5g9xBiqcagM2Pn3hA8B1IQzTfX/view?usp=share_link' target="_blank" rel="noreferrer">{filePdf}</a>
                        </div>
                    </div>
                    )
                 })}
        </section>
    )
}

export default IntroComponent;