import React from "react";
import CardProfile from '../../components/card-profile/card-profile.component'
import Footer from "../../components/footer/footer.component";
import './homepage.styles.scss';

/**Portfolio - HomePage Component version 1 - Features:
 * 
 *       --->Importing and Placing CardProfile Component
 *       --->Importing and Placing Footer Component
*/
const HomePage = () => {
return(
   <>
  <div className="homepage">
     <div className="title">
      <CardProfile />
      <Footer />
     </div>
  </div>
   </>
   );
};

export default HomePage;