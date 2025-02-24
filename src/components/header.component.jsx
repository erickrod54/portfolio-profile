import React from "react";
import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";
import styled from "styled-components";
import { HeaderButtonsWrapper, HeaderLogo, HeaderWrapper } from "../styled-components/styled.components";

/**Portfolio-erick - version 7.14 - HeaderComponent - Features:
 * 
 *      --> Migrating  'HeaderButtonsWrapper'
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
                <HeaderButtonsWrapper>
                {NavBarData.map((item) => {
                    const { id } = item
                    return(
                        <HeaderButtons  
                                key={id}{...item} openModal={openModal}/>
                    )
                })} 
                </HeaderButtonsWrapper>
        </HeaderWrapper>
    )
}

export default HeaderComponent;