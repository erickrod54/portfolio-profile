import React from "react";
import styled from "styled-components";

import { useAppContext } from '../context'

/**Portfolio-erick - version 1 - Intro
 * Component - Features:
 * 
 *      --> Destructuring 'ResumeData' from 
 *          useAppContext()
 * 
 *      --> Filtering and Mapping 'ResumeData' to 
 *          destructure the 'intro' section.
 * 
 *       --> Building the 'IntroWrapper' to 
 *          style the 'intro' section.
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */

const Intro = () => {

    const { ResumeData } = useAppContext()

    //console.log(ResumeData)
    
    return(
        <IntroWrapper>
            {ResumeData.filter((section) => section.id < 2).map((half) => {
            const { id, myname, intro } = half;
 
    //console.log('half ==>', half)
 
    return(
     <div key={id}>
        <h2 className="title name">Hello i'm {myname}</h2>
        <div className="text">
        <p>{intro}</p>
        </div>
     </div>
     )
    })}
        </IntroWrapper>
    )
}

const IntroWrapper = styled.div`

    .name{
        color: yellow;
    }
    
    @media screen and (max-width: 800px) {
        padding: 2rem;
        
        h2{
            font-size: 1rem;
            width: 120%;
        }
        p{
            font-size:.75rem;  
        }
    }
    
    @media screen and (max-width: 400px) {
        width: 80%;
        h2{
            font-size: .75rem;
        }
        p{
            font-size:.65rem;  
        }
    }
    `

export default Intro;