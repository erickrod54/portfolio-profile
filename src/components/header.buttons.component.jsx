import React from "react";
import { styled } from "styled-components";
import { ButtonsWrapper, EachBtn } from "../styled-components/styled.components";

/**Portfolio-erick - version 7.02 - HeaderButtons - Features:
 * 
 *      --> Migrating 'ButtonsWrapper'.
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const HeaderButtons = ({ id, urlname, openModal }) => {

    console.log('open modal value ==>', openModal)

    /**className={'header--buttons--each' ? 'header--buttons--each' : 'header--buttons--each-small'} */

    return(
        <ButtonsWrapper>
        <ul key={id}>
                       <EachBtn id="btn" onClick={ urlname === 'contact' ? openModal : null}>
                        {urlname} 
                       </EachBtn>     
        </ul>
        </ButtonsWrapper>
    )
}


export default HeaderButtons;