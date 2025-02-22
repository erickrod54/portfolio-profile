import React from "react";
import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";
import styled from "styled-components";
import { HeaderWrapper } from "../styled-components/styled.components";

/**Portfolio-erick - version 7.10 - HeaderComponent - Features:
 * 
 *      --> writting  'HeaderLogo'
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const HeaderLogo = styled.div`
  grid-column: col-start 0 / col-end 1;
`;

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