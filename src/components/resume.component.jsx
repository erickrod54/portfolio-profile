import React from "react";
import styled from "styled-components";
import { NavbarWrapper } from '../components/navbar.component';
import { NavLinksWrapper } from './navlinks.component'


import Intro from "./intro.component";
import Skills from "./skills.component";

import { Link } from 'react-router-dom'

/**Portfolio-erick - version 1 - Resume Component -
 * Features:
 * 
 *      --> Importing and Placing '<Intro />'
 *          and '<Skills />' Components to 
 *          render a welcome screen
 * 
 *       --> Importing and placing 'NavLinksWrapper'
 *          to extending it in 'BtnStyle'.
 * 
 * Notes: In next version i'll style the links and keep
 * adding as they are needed.
 */

const Resume = () => {

    return(
        <ResumeWrapper>
            <Intro />
            <Skills />
            <BtnStyle>
            <Link to='/resume' className="btn">
                view full resume
            </Link>
            </BtnStyle>
        </ResumeWrapper>
    )
}

const ResumeWrapper = styled(NavbarWrapper)`
    display: flex;
    flex-direction: column;
    padding: 8rem;
    border: 1px solid black;
    
    @media screen and (max-width: 2500px) {
        display: flex;
        font-size: 2rem;
    }

    @media screen and (max-width: 800px) {
        display: flex;
    }

    @media screen and (max-width: 400px) {
        display: flex;
        
        padding: .5rem;
        
        .nav-links{
            border: 1px solid white;
            display: flex;
            width: 75%;
            flex-direction: column;
            
            li{
                display: flex;
                justify-content: center;
                width: 30%;
            }
        }
    }
`
const BtnStyle = styled(NavLinksWrapper)`
    .btn{
        text-decoration: none;
        font-size: .75rem;
    }

    @media screen and (max-width: 2500px) {
        .btn{
            text-decoration: none;
            font-size: 1.5rem;
        }
    }
`

export default Resume;
