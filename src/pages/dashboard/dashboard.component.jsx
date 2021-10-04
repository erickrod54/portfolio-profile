import React from "react";

const DashBoard = (props) => (
  <div>
    {/**i'm passing props here to push the navigation 
     * to homepage*/}
    <button onClick={() => props.history.push('/')}>Home Page</button>
    <h1>Dashboard Page</h1>
  </div>
  );


export default DashBoard;