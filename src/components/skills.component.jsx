import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { SkillsBox, SkillsList, SkillsSection, SkillsTitle } from "../styled-components/styled.components";

/**Portfolio-erick - version 8.12 - SkillsComponent
 *  - Features:
 * 
 *      --> writting 'SkillItem'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const SkillItem = styled.li`
  background: var(--gradient-btn);
  margin: 1rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
  color: var(--clr-white);
`;

const SkillsComponent = () => {

    const { ResumeData } = usePortfolioContext()

    return(
        <SkillsSection>
            <SkillsBox>
            <SkillsTitle>my skills and growing:</SkillsTitle>
            {ResumeData.filter((section) => section.id === 2).map((skillssection) =>{
                const { id, skills } = skillssection;

                
                return(
                 <SkillsList key={id}>
                     {skills.map((skill) => {
                        const { skillname, icon } = skill
                        return(
                            <SkillItem key={skillname} className='skills--li-bkg'><p>{skillname} <span className="icon">{icon} </span> </p></SkillItem>
                        )
                     })}
                 </SkillsList>
                )
             })}
            </SkillsBox>
        </SkillsSection>
    )
}

export default SkillsComponent;