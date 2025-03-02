import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { SkillsBox, SkillsSection, SkillsTitle } from "../styled-components/styled.components";

/**Portfolio-erick - version 8.08 - SkillsComponent
 *  - Features:
 * 
 *      --> Migrating 'SkillsTitle'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */


const SkillsComponent = () => {

    const { ResumeData } = usePortfolioContext()

    return(
        <SkillsSection>
            <SkillsBox>
            <SkillsTitle>my skills and growing:</SkillsTitle>
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
            </SkillsBox>
        </SkillsSection>
    )
}

export default SkillsComponent;