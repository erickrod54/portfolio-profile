import React from "react";

import './form-input.styles.scss';

/**this form-input component, bring handleChange action, and a label
 * that comes from the name of the prop, with ternary operator i put 
 * the value of other props - must contain email, and password value-
*/
const FormInput = ({ handleChange, label,...otherProps}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps}/>
    {
      label ?
      <label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}>
        {label}
      </label>
      : null
    }
  </div>
)

export default FormInput;