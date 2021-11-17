import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo} from '../../assets/logo-letters.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className='logo'/>
    </Link>
  <div className="options">
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/sign-in-page'>
          SIGN IN
        </Link>
      }
  </div>
  </div>
);

/**pass current user to the header 
* to track the log in with the header, now
inside the component, thanks to redux connect */
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);