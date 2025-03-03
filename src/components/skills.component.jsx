import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { SkillsBox, SkillsSection, SkillsTitle } from "../styled-components/styled.components";

/**Portfolio-erick - version 8.10 - SkillsComponent
 *  - Features:
 * 
 *      --> writting 'SkillsList' media query
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 0.75rem;
  margin: 1rem;
  padding: 1rem;

  @media screen and (max-width: 520px) {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    padding: 2rem;
  }

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
                            <li key={skillname} className='skills--li-bkg'><p>{skillname} <span className="icon">{icon} </span> </p></li>
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