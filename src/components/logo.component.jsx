import React from "react";
import { logo } from "../assets/index.js";
import styled from "styled-components";

/**Portfolio-erick - version 6.04 - 'Logo' Component -
 * Features:
 * 
 *      --> Migrating Logo styles.  
 * 
 * Notes: The 'logo' will be use later to
 * implement other changes.
 */

const Logo = () => {

    return(
        <LogoWrapper>
           <img src={logo} alt='logo'/>
        </LogoWrapper>
    )
}

const LogoWrapper = styled.div`
    
`

export default Logo;