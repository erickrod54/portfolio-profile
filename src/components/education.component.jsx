import React from "react";
import styled from "styled-components";
import { NavbarWrapper } from "./navbar.component";

import EducationData from "./education.data.component";

import { useAppContext } from '../context'

/**Portfolio-erick - version 1 - Education Component -
 * Features:
 * 
 *      --> Building 'Education' Component.
 * 
 *      --> Destructuring 'ResumeData' from 
 *          'useAppContext()'
 * 
 *      --> Importing and placing 'EducationData'
 *          Component to spread the data for 
 *          the education section.
 * 
 *       --> Importing 'NavbarWrapper' to extending
 *          it in 'EducationWrapper'.
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */


const Education = () => {

    const { ResumeData } = useAppContext()

    //console.log('from education component ==>', ResumeData)

    return(
       <EducationWrapper>
            <h2>Education</h2>
           {ResumeData.filter((section) => section.id === 4).map((education) => {
            const { id } = education

            //console.log(education.education)
            return(
                <EducationData key={id} { ...education}/>
            )
           })}
       </EducationWrapper>
    )
}

const EducationWrapper = styled(NavbarWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 2500px) {
            font-size: 3rem;
    }
`

export default Education;