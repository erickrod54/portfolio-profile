import {HeaderComponent, IntroComponent, SkillsComponent, Footer, Contact } from "../components/index.components";

/**Portfolio-erick - version 10.00 - HomePage -
 * Features:
 * 
 *      --> Clearing Imports
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