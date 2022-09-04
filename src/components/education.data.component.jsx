import React from "react";
import { NavbarWrapper } from "./navbar.component";

import styled from "styled-components";

/**Portfolio-erick - version 1 - EducationData
 * Component - Features:
 * 
 *      --> Destructuring 'education' previusly
 *          spreaded in 'Education' Component
 * 
 *      --> Mapping 'education' to destructure
 *          and render the props
 * 
 *       --> Importing 'NavbarWrapper' 
 *          to extending it in 
 *         'EducationDataWrapper' 
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */

const EducationData = ({ education }) => {

     //console.log('from Education data ==>', education)   

    return(
        <EducationDataWrapper>
            {education.map((item) => {
                const { id, degree, description, institution, period } = item;
    
                return(
                    <div key={id}>
                        <h4>Degre Obtained</h4>
                        <p className='rols'>{degree}</p>
                        <h4>institution:</h4>
                        <p>{institution}</p>
                        <h4>description:</h4>
                        <p>{description}</p>
                        <p className='period'>{period}</p>
                    </div>
                )
            })}                    
        </EducationDataWrapper>
    )
}


const EducationDataWrapper = styled(NavbarWrapper)`
    width: 70%;

    .rols{
       color:whitesmoke;
       font-size: 1rem;
       text-decoration: underline yellow;
    }
    .period{
        width: fit-content;
        padding: .25rem;
        background: var(--clr-primary-5);
        border:1px solid black;
        border-radius: .25rem;
    }
    h4{
        text-transform: capitalize;
        text-decoration: underline;
        text-shadow: violet;
        color: yellow;
        font-size: 1rem;
    }
    p{
        display: flex;
        flex-flow: wrap;
        font-size: .75rem;
    }
`


export default EducationData;