import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-in.styles.scss';

/**the reason to use a class component instead
of a functional component is because we need to
store the data the user enter (here  lives 
a state)*/

class SignIn extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  /** handleSubmit will take an event  and 
   * will be received by the form
   * onSubmitthis function will prevent 
   * the default submit action from firing 
   * because we want full control over exactly 
   * this submit is going to do ( for now we will
   * prevent it and clear out our fields)
  */
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' })
  } 
/** handleChange will take also an event, 
 * but in the case we are going to pull 
 * both the value and the name off of our 
 * event target, and we will set the name
 * of the event (if the user set password
 * then password, if the user st email then 
 * the event email), and their respective value
 * this function will be tracking our inputs
 * in a onChange attribute*/
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render(){
    return(
      <div className="sign-in">
        <h2>Log in</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email}
            label="Email" 
            handleChange={this.handleChange} 
            required
            />
          
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password}
            label="Password" 
            handleChange={this.handleChange}
            required
            />
          
           {/**implementing CustomButton, 
            * replacing value, we have children*/}       
          <CustomButton type="submit" > Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;