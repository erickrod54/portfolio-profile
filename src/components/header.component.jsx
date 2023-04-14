import React from "react";
import { logo } from "../assets/index.assets";
import { usePortfolioContext } from "../context";
import HeaderButtons from "./header.buttons.component";

/**Portfolio-erick - version 6.06 - HeaderComponent - Features:
 * 
 *      --> Refactoring NavBar to HeaderComponent
 * 
 *      --> Adapting HeaderComponent to the new layout.
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const HeaderComponent = () => {

    const { openModal, NavBarData } = usePortfolioContext()

    return(
        <section id='header'>
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
        </section>
    )
}

export default HeaderComponent;