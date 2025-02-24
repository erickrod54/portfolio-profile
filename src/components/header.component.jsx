import React from "react";
import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";
import styled from "styled-components";
import { HeaderLogo, HeaderWrapper } from "../styled-components/styled.components";

/**Portfolio-erick - version 7.12 - HeaderComponent - Features:
 * 
 *      --> writting  'HeaderButtons'
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const HeaderButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem;
  grid-column: col-start 7 / col-end 8;
`;

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