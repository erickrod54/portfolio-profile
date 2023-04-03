import React from "react";

//import NavBar from "../components/navbar.component";

import UnderConstructionPage from "./under.construction.page.jsx";
//import Resume from "../components/resume.component";
//import Footer from "../components/footer.component";

//import Contact from "../components/contact.component";

/**Portfolio-erick - version 6.04 - HomePage Component -
 * Features:
 * 
 *      --> Placing 'UnderConstructionPage' page.
 * 
 * Notes: This component will be active in the meantime
 * the new layout get done.
 */

const HomePage = () => {

    return(
      <div className="container">
          <UnderConstructionPage />
          {/**
           <NavBar />
          <Resume />
          <Footer />
          <Contact />
           */}
      </div>  
        
    )
}

export default HomePage