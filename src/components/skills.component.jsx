import React from "react";
import styled from "styled-components";
import { useAppContext } from '../context'

/**Portfolio-erick - version 5 - Skills
 * Component - Features:
 * 
 *      --> Aplying different scales for
 *          font sizes and small screens
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */

const Skills = () => {

    const { ResumeData } = useAppContext()

    return(
        <SkillsWrapper>
            <h2>my skills and growing:</h2>
            {ResumeData.filter((section) => section.id === 2).map((skillssection) =>{
                const { id, skills } = skillssection;

                
                return(
                 <ul key={id}>
                     {skills.map((skill) => {
                        const { skillname, icon } = skill
                        return(
                            <li key={skillname} className='skills-font'>{skillname} <span className="icon">{icon}</span></li>
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
 align-items: center;
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

    h2{
        text-transform: capitalize;
        color: yellow;
        text-decoration: 3px underline solid white;
    }

    @media screen and (max-width: 2500px) {
     .skills-font{
         display: flex;
         font-size: 2rem;
        }
      h2{
        font-size: 2rem;
      }
    }

    @media screen and (max-width: 800px) {
        .skills-font{
         display: flex;
         font-size: 1rem;
        }

        h2{
        font-size: 1.4rem;
      }
    }
    
    @media screen and (max-width: 400px) {
        .skills-font{
         display: flex;
         font-size: .75rem;
        }

        h2{
        font-size: 1rem;
      }
    }
`

export default Skills;