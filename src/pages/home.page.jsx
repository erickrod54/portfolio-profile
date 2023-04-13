import React from "react";
import {HeaderComponent, IntroComponent, SkillsComponent, Footer, Contact } from "../components/index.components";

/**Portfolio-erick - version 6.06 - HomePage -
 * Features:
 * 
 *      --> Refactoring HomePage with the new
 *          Layout.
 * 
 * Notes: This file is gonna be changed later.
 */

const HomePage = () => {

    return(
        <div className="container">
            <HeaderComponent />
            <Contact/>
            <IntroComponent />
            <SkillsComponent />
            <Footer />
        </div>
    )
}

export default HomePage;