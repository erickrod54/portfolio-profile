import React from "react";
import styled from "styled-components";
import { NavbarWrapper } from "./navbar.component";

import ExperienceData from "./experience.data.component";

import { useAppContext } from '../context' 


/**Portfolio-erick - version 1 - Experience
 * Component - Features:
 * 
 *      --> Destructuring 'ResumeData' from 
 *         'useAppContext()'
 * 
 *      --> Filtering and Mapping 'ResumeData' to 
 *          destructure 'experience' and spread
 *          all the props.
 * 
 *       --> Importing 'NavbarWrapper' to extending 
 *           it in 'ExperienceWrapper'
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */

const Experience = () => {

    const { ResumeData } = useAppContext()

    //console.log('from experience component ==>', ResumeData)
    return(
        <ExperienceWrapper>
            <h2>Experience:</h2>
            {ResumeData.filter((section) => section.id === 3).map((experience) => {
                const { id } = experience;
                
                return(
                    <ExperienceData key={id} {...experience} />
                )
            })}
        </ExperienceWrapper>
    )
}

const ExperienceWrapper = styled(NavbarWrapper)`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1915px) {
        h2{
         display: flex; 
         justify-content: center ;
         font-size: 2.5rem;
        }
    }

    @media screen and (max-width: 800px) {
        h2{
         display: flex; 
         justify-content: flex-start;
         font-size: 2rem;
        }
    }
    
    @media screen and (max-width: 400px) {
        h2{
         display: flex; 
         justify-content: flex-start;
         font-size: 1.5rem;
        }
    }
`

export default Experience;