import React from "react";

import './homepage.styles.scss';

/** I'm loggin the props here in case that
 * we need to use specific props like history,
 * location, and match to build a dynamic 
 * link to a child component of homepage
 * 
 * example
 * 
 *  ${props.match.url}/dashboad
*/
const HomePage = (props) => {
console.log(props)   
return(
  <div className="homepage">
     <div className="cardprofile"> 
      <p className="title">here is going to be 
         displayed the cardProfile 
         component for the moment we will draw it
         for style propuses</p>
     </div> 

  </div>
   );
};

export default HomePage;