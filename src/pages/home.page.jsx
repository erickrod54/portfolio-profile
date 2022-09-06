import React from "react";

import NavBar from "../components/navbar.component";
import Resume from "../components/resume.component";
import Footer from "../components/footer.component";

import Contact from "../components/contact.component";

/**Portfolio-erick - version 2 - HomePage Component -
 * Features:
 * 
 *      --> Importing 'Contact' in order to render
 *          it and visualize it.  
 * 
 * Notes: Changes can be made later for this Component
 */

const HomePage = () => {

    return(
        <>
        <NavBar />
        <Resume />
        <Footer />
        <Contact />
        </>
    )
}

export default HomePage