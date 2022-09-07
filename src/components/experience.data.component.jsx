import React from "react";
import styled from "styled-components";

import { NavbarWrapper } from "./navbar.component";

/**Portfolio-erick - version 1 - ExperienceData
 * Component - Features:
 * 
 *      --> Destructuring 'experience' previously
 *          spreaded in 'Experience' Component.
 * 
 *      --> Mapping 'experience' to 
 *          destructure the props and
 *          render them.
 * 
 *       --> Importing 'NavbarWrapper' to extending 
 *           it in 'ExperienceDataWrapper'
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */


const ExperienceData = ({ experience }) => {

    //console.log('experience dataa ==>', experience)
    return(
        <ExperienceDataWrapper>
            {experience.map((singleexperience) => {
                const { id, rol, location, task, period } = singleexperience;

                console.log('length :', experience.length)
                return(
                    <div key={id}>
                        <h4>rol:</h4>
                        <p className="rols">{rol}</p>
                        <h4>task:</h4>
                        <p>{task}</p>
                        <h4>location:</h4>
                        <p>{location}</p>
                        <h4>period</h4>
                        <p className='period'>{period}</p>
                        {id <= 2 ? 
                        <div className="division"/>
                        :
                        null
                        }
                    </div>
                )
            })}
        </ExperienceDataWrapper>
    )
}

export const ExperienceDataWrapper = styled(NavbarWrapper)`
    display: flex;
    flex-direction: column;
    .division{
        margin: 0 auto;
        background: var(--gradient-btn);
        height: .25rem;
        width: 100%;
    }
    .rols{
       color:whitesmoke;
       font-size: .75rem;
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

        @media screen and (max-width: 1915px) {
       
    .rols{
       font-size: 1.5rem;
    }
    .period{
        font-size: 1.2rem;
    }
    h4{
        font-size: 1.7rem;
    }
    p{
        font-size: 1.2rem;
    }
    }

    @media screen and (max-width: 800px) {
    
    .rols{
       font-size: 1.3rem;
    }
    .period{
        font-size: 1.1rem;
    }
    h4{
        font-size: 1.5rem;
    }
    p{
        font-size: 1.1rem;
    }
    }
    
   
`

export default ExperienceData;