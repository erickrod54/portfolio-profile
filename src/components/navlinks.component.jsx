import React from "react";

/**Portfolio-erick - version 1 - NavLinks - Features:
 * 
 *      --> Destructuring props 'id', 'urlname' previusly
 *          drilled from 'NavBar' Component
 * 
 * Notes: In next version i'll style the links and keep
 * adding as they are needed.
 */

const NavLinks = ({ id, urlname }) => {

    return(
        <ul key={id}>
                       <li>
                        {urlname} 
                       </li>     
        </ul>
    )
}

export default NavLinks;