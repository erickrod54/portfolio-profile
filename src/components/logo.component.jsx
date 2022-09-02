import React from "react";
import { logo } from "../assets/index.js";
import styled from "styled-components";

/**Portfolio-erick - version 1 - 'Logo' Component -
 * Features:
 * 
 *      -->Importing and placing 'logo' from
 *         assets > index.
 * 
 *      --> Placing logo in an image tag and 
 *          wrapping it to style it.  
 * 
 * Notes: The 'logo' will be use later to
 * implement other changes.
 */

const Logo = () => {

    return(
        <LogoWrapper>
        <div>
           <img src={logo} alt='logo'/>
        </div>

        </LogoWrapper>
    )
}

const LogoWrapper = styled.div`
    img{
        width: 7rem;
        height: 7rem;
    }
`

export default Logo;