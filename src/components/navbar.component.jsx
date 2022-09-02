import React from "react";

import Logo from "./logo.component";
import NavLinks from "./navlinks.component";

import styled from "styled-components";

import { useAppContext } from '../context'

/**Portfolio-erick - version 1 - NavBar -
 * Features:
 * 
 *      -->Rebuilding 'navbar' Component.
 * 
 *      -->Importing and placing 'Logo' Component.
 *     
 *      -->Importing and placing 'NavLinks' Component.
 * 
 *      -->Mapping 'NavBarData' and spreading their 
 *         props on 'NavLinks'.  
 * 
 * Notes: In next version i'll style the links and keep
 * adding as they are needed.
 */

const NavBar = () => {

    const { NavBarData } = useAppContext()

    /**testing data links */
    //console.log(NavBarData)

    return(
        <NavbarWrapper>
            <Logo />
            <div className="nav-links">
            {NavBarData.map((item) => {
                const { id } = item
                return(
                    <NavLinks className='nav-links' 
                              key={id}{...item}/>
                )
            })}
                
            </div>
        </NavbarWrapper>
        )
}

const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem;
    padding:2rem ;
    border-radius: 2rem;
    background: var(--gradient-bkgd);
    color: var(--clr-white);

    .nav-links{
        width: 20rem;
        display: flex;
        justify-content: flex-end ;
        margin: 2rem;
        

        li{
            list-style-type: none;
        }
    }
`

export default NavBar;