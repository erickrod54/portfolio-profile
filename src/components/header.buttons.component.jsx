import React from "react";
import { styled } from "styled-components";
import { EachBtn } from "../styled-components/styled.components";

/**Portfolio-erick - version 7.00 - HeaderButtons - Features:
 * 
 *      --> Migrating 'EachBt'.
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */
const HeaderButtons = ({ id, urlname, openModal }) => {

    console.log('open modal value ==>', openModal)

    /**className={'header--buttons--each' ? 'header--buttons--each' : 'header--buttons--each-small'} */

    return(
        <section id='header--buttons--each'>
        <ul key={id}>
                       <EachBtn id="btn" onClick={ urlname === 'contact' ? openModal : null}>
                        {urlname} 
                       </EachBtn>     
        </ul>
        </section>
    )
}


export default HeaderButtons;