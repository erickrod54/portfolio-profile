import React from "react";
import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { HeaderLogo, HeaderWrapper, HeaderButtons } from "../styled-components/styled.components";

/**Portfolio-erick - version 7.13 - HeaderComponent - Features:
 * 
 *      --> Migrating  'HeaderButtons'
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const HeaderComponent = () => {

    const { openModal, NavBarData } = usePortfolioContext()

    return(
        <HeaderWrapper>
                <HeaderLogo>
                    <img src={logo} alt='logo'/>
                </HeaderLogo>
                <HeaderButtons>
                {NavBarData.map((item) => {
                    const { id } = item
                    return(
                        <HeaderButtons  
                                key={id}{...item} openModal={openModal}/>
                    )
                })} 
                </HeaderButtons>
        </HeaderWrapper>
    )
}

export default HeaderComponent;