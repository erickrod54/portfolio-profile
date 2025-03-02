import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { SkillsBox, SkillsSection } from "../styled-components/styled.components";

/**Portfolio-erick - version 8.07 - SkillsComponent
 *  - Features:
 * 
 *      --> writting 'SkillsTitle'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */


const SkillsTitle = styled.h2`
  display: grid;
  margin: 1rem;
  padding: 1rem;
  text-decoration: underline yellow;
  place-items: center;
  text-transform: capitalize;
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