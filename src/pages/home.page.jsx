import React from "react";

import NavBar from "../components/navbar.component";
//import Resume from "../components/resume.component";
//import Footer from "../components/footer.component";

//import Contact from "../components/contact.component";

/**Portfolio-erick - version 6.01 - HomePage Component -
 * Features:
 * 
 *      --> Refactoring Website implementing grid.
 * 
 *      --> Starting to work Navbar.
 * 
 * Notes: Changes can be made later for this Component
 */

const HomePage = () => {

    return(
      <div className="container">
          <NavBar />
          {/**
          <Resume />
          <Footer />
          <Contact />
           */}
      </div>  
        
    )
}

export default HomePage