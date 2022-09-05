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
            <Education />
        </ResumePageWrapper>
        <Experience />
        <Footer/>
        
        </>
    )
}

const ResumePageWrapper = styled(NavbarWrapper)`
    
    .intro{
        font-size: .75rem;
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
`
export default ResumePage;