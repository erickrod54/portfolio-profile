import React from "react";
import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";
import styled from "styled-components";
import { HeaderWrapper } from "../styled-components/styled.components";

/**Portfolio-erick - version 7.09 - HeaderComponent - Features:
 * 
 *      --> Migrating 'HeaderWrapper'
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const HeaderComponent = () => {

    const { openModal, NavBarData } = usePortfolioContext()

    return(
        <HeaderWrapper>
                <div className="header--logo">
                    <img src={logo} alt='logo'/>
                </div>
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