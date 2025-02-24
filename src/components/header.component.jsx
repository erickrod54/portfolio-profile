import React from "react";
import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";
import styled from "styled-components";
import { HeaderLogo, HeaderWrapper } from "../styled-components/styled.components";

/**Portfolio-erick - version 7.11 - HeaderComponent - Features:
 * 
 *      --> Migrating  'HeaderLogo'
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
                <div className="header--buttons">
                {NavBarData.map((item) => {
                    const { id } = item
                    return(
                        <HeaderButtons  
                                key={id}{...item} openModal={openModal}/>
                    )
                })} 
                </div>
        </HeaderWrapper>
    )
}

export default HeaderComponent;