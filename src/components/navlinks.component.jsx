import React from "react";
import styled from "styled-components";

/**Portfolio-erick - version 60.4 - NavLinks - Features:
 * 
 *      --> Setting 'nav-links' to start to work in 
 *          'NavLinks'.
 * 
 *      --> Changin versioning to two digits
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const NavLinks = ({ id, urlname, openModal }) => {

    return(
        <NavLinksWrapper id='nav-links'>
        <ul key={id}>
                       <li className="btn" onClick={ urlname === 'contact' ? openModal : null}>
                        {urlname} 
                       </li>     
        </ul>
        </NavLinksWrapper>
    )
}

export const NavLinksWrapper = styled.div`
    
    .btn{
        border: 1px solid var(--clr-black);
        background: var(--clr-white);
        color: var(--clr-black);
    }

    .btn:hover {
     background: var(--clr-primary-5);
     color: var(--clr-white);
    }
`

export default NavLinks;