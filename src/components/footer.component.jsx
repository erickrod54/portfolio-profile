import React from "react";
import styled from "styled-components";

import { NavbarWrapper } from "./navbar.component";

import { useAppContext } from '../context';

/**Portfolio-erick - version 1 - Footer Component -
 * Features:
 * 
 *      --> Destruturing 'social' data from 
 *          'useAppContext()'
 * 
 *      --> Building the 'Footer' Component
 *          setting a header and year.    
 * 
 *      --> Mapping and spreading  the 'social'
 *          data that contains icons to link
 *          to my proffesional network
 * 
 *      --> Importing 'NavbarWrapper' and 
 *          extending it in 'FooterWrapper'.
 * 
 * Notes: In next version i'll style the links and keep
 * adding as they are needed.
 */

const Footer = () => {

    const { social } = useAppContext()

    console.log('the social ==>', social)

    return(
        <FooterWrapper >
            <div className="element1">
                <ul>
                    <li>
                    &copy; { new Date().getFullYear()}        
                    </li>
                    <li>
                    Erick Rodriguez  |  Systems Engineer
                    </li>
                    <li>
                    All Rights reserved
                    </li>
                </ul>
            </div>
            <hr></hr>
            <div className="element2">
                {social.map((net) => {
                    const { name, url, icon } = net;

                    return(
                       <a key={name} href={url}>
                       <ul>
                            <li>
                                <span>   
                                {icon}
                                </span>
                            </li>
                       </ul>
                       </a>
                    )
                })}
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled(NavbarWrapper)`
border: 1px solid black;

.element1{
    border: 1px solid white;
    border-radius: .5rem;
    display:flex ;
    flex-direction: column;
    justify-content: center;
    width: 35%;

    li{
        display: flex;
        flex-flow: column wrap;
        list-style-type: none;
        justify-content: center;
        padding: .35rem;
    }
}
 
.element2{
    border: 1px solid white;
    border-radius: .5rem;
    display:flex ;
    padding: 2rem;
    justify-content: flex-start;
    width: 50%;

    li{
        display: flex;
        justify-content: space-evenly;
        cursor: pointer;

    }
    
    span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
        font-size: 2rem;
    }

    svg:hover {
        background: chartreuse;
        font-size: 4rem;
        border-radius: 50%;
    }
}
}

@media screen and (max-width: 800px) {
        padding: 2rem;
        width: 75%;

        .element1{
            display: flex;
            flex-direction: column;
            width: 65%;
        }
        h2{
            font-size: 1rem;
            width: 120%;
        }
        p{
          font-size:.75rem;  
        }
    }

    @media screen and (max-width: 400px) {
     display: flex;
     flex-direction: column;
     width: 65%;

     .element1{
        display: flex;
        flex-direction: column;
        font-size: .75rem;
        width: 75%;

        li{
            padding: .35rem;
        }
     }

     .element2{
        font-size: .25rem;
        
        display: flex;
        flex-direction: column;
     }
    }
`

export default Footer;