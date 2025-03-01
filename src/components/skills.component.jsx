import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { SkillsSection } from "../styled-components/styled.components";

/**Portfolio-erick - version 8.04 - SkillsComponent
 *  - Features:
 * 
 *      --> Migrating 'SkillsSection'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const SkillsComponent = () => {

    const { ResumeData } = usePortfolioContext()

    return(
        <SkillsSection>
            <div className="skills--box">
            <h2 className="skills--title">my skills and growing:</h2>
            {ResumeData.filter((section) => section.id === 2).map((skillssection) =>{
                const { id, skills } = skillssection;

                
                return(
                 <ul key={id}>
                     {skills.map((skill) => {
                        const { skillname, icon } = skill
                        return(
                            <li key={skillname} className='skills--li-bkg'><p>{skillname} <span className="icon">{icon} </span> </p></li>
                        )
                     })}
                 </ul>
                )
             })}
            </div>
        </SkillsSection>
    )
}

export default SkillsComponent;