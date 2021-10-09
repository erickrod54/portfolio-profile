import React from "react";

import './custom-button.styles.scss';

/**this passing this props we pass the type 
 * submmit of the input element in sign-in
 * page*/
const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
    {/**children is whatever we want to pass
     * inside the CustomButton as Sign In message
     * or a prop :)
     */}
  </button>
  
);

export default CustomButton;