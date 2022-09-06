import React from "react";
import styled from "styled-components";

/**Portfolio-erick - version 3 - NavLinks - Features:
 * 
 *      --> Drilling 'openModal' to trigger 
 *          a modal to contact.
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const NavLinks = ({ id, urlname, openModal }) => {

    return(
        <NavLinksWrapper>
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