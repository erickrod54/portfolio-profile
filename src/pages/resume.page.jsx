import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { NavbarWrapper } from "../components/navbar.component";

import Intro from "../components/intro.component";
import Skills from "../components/skills.component";
import Education from "../components/education.component";
import Experience from "../components/experience.component";

import Footer from "../components/footer.component";

/**Portfolio-erick - version 1 - ResumePage
 * Component - Features:
 * 
 *      --> Importing and placing  'Intro', 
 *         'skills', 'Education'  and
 *          'Experience' to render the
 *          full resume page.
 * 
 *      -->Importing 'NavbarWrapper' to 
 *        'Extending' it in 'ResumePageWrapper'.
 * 
 *      -->Importing 'NavbarWrapper' to 
 *        'Extending' it in 'SkillsNewWrapper'.
 * 
 *      -->Importing 'NavbarWrapper' to 
 *        'Extending' it in 'HeaderWrapper'.
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */ 

const ResumePage = () => {

    return(
        <>
        <HeaderWrapper>
        <Link to='/' className="btn">
            Back Home
        </Link>
        </HeaderWrapper>

        <ResumePageWrapper>
            <Intro className='intro'/>
            <SkillsNewWrapper>
                <Skills />
            </SkillsNewWrapper>
            <Education className='education'/>
        </ResumePageWrapper>
        <Experience className='experience'/>
        <Footer/>
        
        </>
    )
}

const ResumePageWrapper = styled(NavbarWrapper)`
    
    .intro{
        font-size: .75rem;
    }

    @media screen and (max-width: 2500px) {

        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        
        .education{
            font-size: 3rem;
        }
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

const SkillsNewWrapper = styled(NavbarWrapper)`
    
   ul{
    border: none;
   }
`

const HeaderWrapper = styled(NavbarWrapper)`
    .btn{
        width: fit-content;
        text-decoration: none;
        padding: 1rem;
    }

    @media screen and (max-width: 2500px) {
    .btn{
        font-size: 2rem;
    }

    @media screen and (max-width: 800px) {
        .btn{
        font-size: 1rem;
    }
    }
    
    @media screen and (max-width: 400px) {
        .btn{
        font-size: .75rem;
    }
    }

    }
`
export default ResumePage;