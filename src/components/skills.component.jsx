import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { SkillsSection } from "../styled-components/styled.components";

/**Portfolio-erick - version 8.05 - SkillsComponent
 *  - Features:
 * 
 *      --> writting 'SkillsSection'
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const SkillsBox = styled.div`
  display: grid;
  border: 1px solid white;
  margin: 1.7em;
  border-radius: 0.75em;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SkillsComponent = () => {

    const { ResumeData } = usePortfolioContext()

    return(
        <SkillsSection>
            <SkillsBox>
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
            </SkillsBox>
        </SkillsSection>
    )
}

export default SkillsComponent;