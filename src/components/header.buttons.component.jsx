import React from "react";

/**Portfolio-erick - version 6.06 - HeaderButtons - Features:
 * 
 *      --> Refactoring NavLinks as HeaderButtons.
 * 
 *      --> Applying style naming convention.
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */
const HeaderButtons = ({ id, urlname, openModal }) => {

    console.log('open modal value ==>', openModal)

    return(
        <section className='header--buttons--each'>
        <ul key={id}>
                       <li className="btn" onClick={ urlname === 'contact' ? openModal : null}>
                        {urlname} 
                       </li>     
        </ul>
        </section>
    )
}

export default HeaderButtons;