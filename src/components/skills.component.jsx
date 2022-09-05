import React from "react";
import styled from "styled-components";
import { useAppContext } from '../context'

/**Portfolio-erick - version 1 - Skills
 * Component - Features:
 * 
 *      --> Destructuring 'ResumeData' from 
 *          useAppContext()
 * 
 *      --> Filtering and Mapping 'ResumeData' to 
 *          destructure the 'skills' section.
 * 
 *       --> Building the 'SkillsWrapper' to 
 *          style the 'skills' section.
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */

const Skills = () => {

    const { ResumeData } = useAppContext()

    return(
        <SkillsWrapper>
            <h2>My Skills and growing:</h2>
            {ResumeData.filter((section) => section.id === 2).map((skillssection) =>{
                const { id, skills } = skillssection;

                
                return(
                 <ul key={id}>
                     {skills.map((skill) => {
                        const { skillname, icon } = skill
                        return(
                            <li key={skillname}>{skillname} <span className="icon">{icon}</span></li>
                        )
                     })}
                 </ul>
                )
             })}
        </SkillsWrapper>
    )
}

const SkillsWrapper = styled.div`
 
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
    ul{
        border: 1px solid white;
        border-radius: .50rem;
        width: 80%;
        font-size: 1rem;
        display: flex;
        list-style-type: none;
        flex-flow: row wrap;

        li{
            background: var(--gradient-btn);
            border-radius: .75rem;
            padding: .25rem;
            margin:1rem;

            .icon{
                color: yellow;
            }
        }
    }
`

export default Skills;