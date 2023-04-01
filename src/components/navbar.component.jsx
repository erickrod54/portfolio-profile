import React from "react";

import Logo from "./logo.component";
import NavLinks from "./navlinks.component";

import styled from "styled-components";

import { useAppContext } from '../context'

/**Portfolio-erick - version 6.02 - NavBar -
 * Features:
 * 
 *      --> Migrating Style Component global styles 
 *          to start to fix header styles.  
 * 
 *      --> Changing style component target from 
 *          div to semantinc tag section.
 * 
 * Notes: In next version i'll style the links and keep
 * adding as they are needed.
 */

const NavBar = () => {

    const { NavBarData, openModal } = useAppContext()

    /**testing data links */
    //console.log(NavBarData)

    return(
        <NavbarWrapper id='navbar'>
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

export const NavbarWrapper = styled.section`
    
`

export default NavBar;