import React from "react";
import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";
import styled from "styled-components";

/**Portfolio-erick - version 7.08 - HeaderComponent - Features:
 * 
 *      --> writting 'HeaderWrapper'
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const HeaderWrapper = styled.section`
   display: grid;
    margin: 2rem;
    padding: 2rem;
    grid-column: container-start / container-end;
    height: fit-content;
    background: linear-gradient(to left, rgb(48, 7, 82) 0%, rgba(0, 128, 128, 1) 100%);
    border-radius: 4rem;
`

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