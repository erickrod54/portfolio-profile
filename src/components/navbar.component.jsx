import React from "react";

import Logo from "./logo.component";
import NavLinks from "./navlinks.component";

import styled from "styled-components";

import { useAppContext } from '../context'

/**Portfolio-erick - version 5 - NavBar -
 * Features:
 * 
 *      --> Fixing resposivess for tne
 *          contact button.  
 * 
 * Notes: In next version i'll style the links and keep
 * adding as they are needed.
 */

const NavBar = () => {

    const { NavBarData, openModal } = useAppContext()

    /**testing data links */
    //console.log(NavBarData)

    return(
        <NavbarWrapper>
            <div className="logo">
            <Logo />
            </div>
            <div className="nav-links">
            {NavBarData.map((item) => {
                const { id } = item
                return(
                    <NavLinks  
                              key={id}{...item} openModal={openModal}/>
                )
            })}
                
            </div>
        </NavbarWrapper>
        )
}

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem;
    padding:2rem ;
    border-radius: 2rem;
    background: var(--gradient-bkgd);
    color: var(--clr-white);
    border: 1px solid black;

    .nav-links{
        width: 70%;
        display: flex;
        justify-content: flex-end ;
        margin: 2rem;
        

        li{
            list-style-type: none;
        }
    }

    @media screen and (max-width: 800px) {
        
        display: flex;
        justify-content: center;
        flex-direction: column;

        .logo{
            
            display:flex;
            justify-content: center;
        }
        .nav-links{
            
            display: flex;
            padding: 1rem;
            flex-direction: column;
            
            li{
                display: flex;
                justify-content: center;
                width: 80%;
            }
        }
    }

    @media screen and (max-width: 400px) {
        display: flex;
        width: 75%;
        padding: .5rem;
        
        .nav-links{
            margin-right:-42rem;
            border: 1px solid white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            li{
                display: flex;
                justify-content: center;
                width: 30%;
            }
        }
    }
`

export default NavBar;